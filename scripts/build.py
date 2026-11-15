import argparse
import os
import re
import shutil
import sys
from datetime import date, datetime, timezone
from email.utils import format_datetime
from functools import partial
from html import escape, unescape
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

from icons import BRANDS, ICONS

ROOT = Path(__file__).resolve().parent.parent
PAGES = ROOT / "pages"
LAYOUTS = ROOT / "layouts"
STYLES = ROOT / "styles"
PUBLIC = ROOT / "public"
DIST = ROOT / "dist"

URL = "https://yurii-voievodin.github.io"
NAME = "Yurii Voievodin"
TITLE = "Yurii Voievodin - Software Developer"
DESCRIPTION = (
    "Software developer with 14+ years of experience building iOS, macOS and web applications"
    " — CV, projects, and a travel photo blog."
)
THEME_COLOR = "#7c3aed"
GOOGLE_VERIFICATION = "cTGblQb-bn7Tw2ClzLhJfzgTQ94t8V54PnaOiXzZXJ4"
VARS = {
    "email": "yurii.voievodin@icloud.com",
    "github": "https://github.com/yurii-voievodin",
    "linkedin": "https://www.linkedin.com/in/yurivoevodin",
    "year": str(date.today().year),
}

HEAD_TAG = re.compile(r"\s*(<title>.*?</title>|<meta\s[^>]*>|<link\s[^>]*>)", re.S)
ATTR = re.compile(r'([\w:-]+)="([^"]*)"')
MARKER = re.compile(r"<!--\s*(include|slot|icon):\s*(\S+?)(?:\s+(\d+))?\s*-->|\{\{\s*(\w+)\s*\}\}")


def absolute(path):
    return path if path.startswith("http") else URL + path


def split_head(text):
    tags, pos = [], 0
    while True:
        match = HEAD_TAG.match(text, pos)
        if not match:
            return tags, text[pos:].lstrip("\n")
        tags.append(match.group(1))
        pos = match.end()


class Page:
    def __init__(self, path):
        self.path = path
        tags, self.body = split_head(path.read_text(encoding="utf-8"))
        self.title = TITLE
        self.meta, self.refresh, self.canonical, self.alternates = {}, None, None, {}
        for tag in tags:
            if tag.startswith("<title>"):
                self.title = unescape(tag[7:-8])
                continue
            attrs = {k: unescape(v) for k, v in ATTR.findall(tag)}
            if tag.startswith("<meta") and attrs.get("http-equiv") == "refresh":
                self.refresh = attrs["content"].split("url=", 1)[1]
            elif tag.startswith("<meta"):
                self.meta[attrs["name"]] = attrs["content"]
            elif attrs.get("rel") == "canonical":
                self.canonical = attrs["href"]
            elif attrs.get("rel") == "alternate":
                self.alternates[attrs["hreflang"]] = attrs["href"]
        rel = path.relative_to(PAGES).as_posix()
        if rel == "404.html":
            self.url = "/404.html"
        elif rel == "index.html":
            self.url = "/"
        elif rel.endswith("/index.html"):
            self.url = "/" + rel[: -len("index.html")]
        else:
            self.url = "/" + rel[: -len(".html")] + "/"

    def get(self, name, default=""):
        return self.meta.get(name, default)

    @property
    def description(self):
        return self.get("description", DESCRIPTION)

    @property
    def output(self):
        return self.url.lstrip("/") + ("index.html" if self.url.endswith("/") else "")

    def vars(self):
        return {"title": self.title, "description": self.description, "lang": self.get("lang", "en"), **VARS}


def icon(name, size=24):
    if name in BRANDS:
        return (
            f'<svg class="icon" width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor" '
            f'aria-hidden="true">{BRANDS[name]}</svg>'
        )
    return (
        f'<svg class="icon" width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
        f'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
        f"{ICONS.get(name, ICONS['Circle'])}</svg>"
    )


def render(text, page, source):
    values = page.vars()
    slots = {
        "head": lambda: head(page),
        "layout": lambda: render(read(LAYOUTS / f"{page.get('layout', 'default')}.html"), page, "layout"),
        "content": lambda: render(page.body, page, page.path),
    }

    def replace(match):
        kind, name, size, var = match.groups()
        if var:
            if var not in values:
                sys.exit(f"{source}: unknown variable {{{{ {var} }}}}")
            return escape(values[var])
        if kind == "icon":
            return icon(name, int(size or 24))
        if kind == "include":
            path = ROOT / name
            text = read(path)
            if PAGES in path.parents:
                text = split_head(text)[1]
            return render(text, page, path)
        if name not in slots:
            sys.exit(f"{source}: unknown slot '{name}'")
        return slots[name]()

    return MARKER.sub(replace, text)


def read(path):
    if not path.exists():
        sys.exit(f"missing file {path.relative_to(ROOT)}")
    return path.read_text(encoding="utf-8")


def meta(name, content, attr="name"):
    return f'<meta {attr}="{name}" content="{escape(content)}">'


def link(rel, href, **extra):
    attrs = "".join(f' {k}="{escape(v)}"' for k, v in extra.items())
    return f'<link rel="{rel}" href="{escape(href)}"{attrs}>'


def head(page):
    image = page.get("image")
    kind = page.get("type", "website")
    tags = ['<meta charset="utf-8">', meta("viewport", "width=device-width, initial-scale=1")]
    if page.refresh:
        tags.append(meta("refresh", f"0; url={page.refresh}", "http-equiv"))
    tags += [
        f"<title>{escape(page.title)}</title>",
        meta("description", page.description),
        meta("author", NAME),
        link("manifest", "/manifest.json"),
    ]
    if page.get("keywords"):
        tags.append(meta("keywords", page.get("keywords")))
    tags.append(meta("creator", NAME))
    if page.get("robots"):
        tags.append(meta("robots", page.get("robots")))
    tags.append(meta("theme-color", THEME_COLOR))
    if page.canonical:
        tags.append(link("canonical", absolute(page.canonical)))
    tags += [link("alternate", absolute(href), hreflang=lang) for lang, href in page.alternates.items()]
    tags += [
        link("alternate", absolute("/feed.xml"), type="application/rss+xml"),
        meta("google-site-verification", GOOGLE_VERIFICATION),
        meta("og:title", page.title, "property"),
        meta("og:description", page.description, "property"),
        meta("og:url", absolute(page.canonical or page.url), "property"),
    ]
    if page.get("locale"):
        tags.append(meta("og:locale", page.get("locale"), "property"))
    if image:
        tags.append(meta("og:image", absolute(image), "property"))
    tags.append(meta("og:type", kind, "property"))
    if kind == "article":
        tags.append(meta("article:published_time", page.get("published"), "property"))
        tags.append(meta("article:author", NAME, "property"))
        tags += [meta("article:tag", tag, "property") for tag in page.get("keywords").split(", ")]
    tags += [
        meta("twitter:card", "summary_large_image" if image else "summary"),
        meta("twitter:title", page.title),
        meta("twitter:description", page.description),
    ]
    if image:
        tags.append(meta("twitter:image", absolute(image)))
    tags += [
        link("icon", "/favicon.ico", type="image/x-icon"),
        link("apple-touch-icon", "/apple-touch-icon.png"),
        link("stylesheet", "/static/site.css"),
    ]
    return "\n  ".join(tags)


def sitemap(pages):
    entries = []
    for page in pages:
        if not page.get("sitemap"):
            continue
        priority, changefreq = page.get("sitemap").split()
        lastmod = page.get("published") or date.today().isoformat()
        alternates = "".join(
            f'\n    <xhtml:link rel="alternate" hreflang="{lang}" href="{xml_escape(absolute(href))}"/>'
            for lang, href in page.alternates.items()
        )
        entries.append(
            f"  <url>\n    <loc>{xml_escape(absolute(page.url))}</loc>{alternates}\n"
            f"    <lastmod>{lastmod}</lastmod>\n    <changefreq>{changefreq}</changefreq>\n"
            f"    <priority>{priority}</priority>\n  </url>"
        )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + "\n".join(entries)
        + "\n</urlset>\n"
    )


def xml(text):
    return xml_escape(text, {'"': "&quot;", "'": "&apos;"})


def feed(pages):
    posts = sorted((p for p in pages if p.get("type") == "article"), key=lambda p: p.get("published"), reverse=True)
    items = []
    for post in posts:
        url = absolute(post.url)
        published = format_datetime(datetime.fromisoformat(post.get("published")).replace(tzinfo=timezone.utc), usegmt=True)
        items.append(
            f"    <item>\n      <title>{xml(post.title.removesuffix(' - ' + NAME))}</title>\n"
            f"      <link>{url}</link>\n      <guid>{url}</guid>\n      <pubDate>{published}</pubDate>\n"
            f"      <description>{xml(post.description)}</description>\n    </item>"
        )
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{xml(TITLE)}</title>
    <link>{URL}</link>
    <description>{xml(DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="{URL}/feed.xml" rel="self" type="application/rss+xml"/>
{chr(10).join(items)}
  </channel>
</rss>"""


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.unlink(missing_ok=True)
    path.write_text(text, encoding="utf-8")


def copy_public(out):
    for path in PUBLIC.rglob("*"):
        if path.is_dir() or path.name == ".DS_Store":
            continue
        target = out / path.relative_to(PUBLIC)
        target.parent.mkdir(parents=True, exist_ok=True)
        try:
            os.link(path, target)
        except OSError:
            shutil.copy2(path, target)


def build(out):
    shutil.rmtree(out, ignore_errors=True)
    copy_public(out)
    styles = [STYLES / "base.css"] + sorted(p for p in STYLES.glob("*.css") if p.name != "base.css")
    write(out / "static/site.css", "\n".join(read(p) for p in styles))
    pages = [Page(path) for path in sorted(PAGES.rglob("*.html"))]
    base = read(LAYOUTS / "base.html")
    for page in pages:
        write(out / page.output, render(base, page, "layouts/base.html"))
    write(out / "sitemap.xml", sitemap(pages))
    write(out / "feed.xml", feed(pages))
    write(out / "robots.txt", f"User-Agent: *\nAllow: /\n\nSitemap: {URL}/sitemap.xml\n")
    print(f"Built {len(pages)} pages into {out}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", type=Path, default=DIST)
    parser.add_argument("--serve", action="store_true")
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()
    build(args.out)
    if args.serve:
        print(f"Serving on http://localhost:{args.port}")
        ThreadingHTTPServer(("", args.port), partial(SimpleHTTPRequestHandler, directory=args.out)).serve_forever()

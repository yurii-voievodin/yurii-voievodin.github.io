import argparse
import json
import os
import re
import shutil
import sys
from datetime import date, datetime, timezone
from email.utils import format_datetime
from functools import cache, partial
from html import escape, unescape
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from check import check
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
WEBSITE_LD = json.dumps(
    {"@context": "https://schema.org", "@type": "WebSite", "name": NAME, "url": URL, "description": DESCRIPTION},
    ensure_ascii=False,
)
GOOGLE_VERIFICATION = "cTGblQb-bn7Tw2ClzLhJfzgTQ94t8V54PnaOiXzZXJ4"
VARS = {
    "email": "yurii.voievodin@icloud.com",
    "github": "https://github.com/yurii-voievodin",
    "linkedin": "https://www.linkedin.com/in/yurivoevodin",
    "year": str(date.today().year),
}

HEAD_TAG = re.compile(r'\s*(<title>.*?</title>|<(?:meta|link)\s(?:[^>"]|"[^"]*")*>)', re.S)
ATTR = re.compile(r'([\w:-]+)="([^"]*)"')
GALLERY = re.compile(r"<!--\s*gallery:\s*(\S+)\s+(\S+)\s*-->(.*?)<!--\s*/gallery\s*-->", re.S)
GALLERY_KINDS = ("carousel-tall", "carousel-wide", "post-grid", "personal-grid")
IMG = re.compile(r'<img\s(?:[^>"]|"[^"]*")*>')
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


def rel(path):
    return path.relative_to(ROOT).as_posix()


class Page:
    def __init__(self, path):
        self.path = path
        tags, self.body = split_head(read(path))
        self.title = None
        self.meta, self.canonical, self.alternates = {}, None, {}
        for tag in tags:
            if tag.startswith("<title>"):
                self.title = unescape(tag[7:-8])
                continue
            attrs = {k: unescape(v) for k, v in ATTR.findall(tag)}
            needs = (
                ("name", "content") if tag.startswith("<meta")
                else ("href",) if attrs.get("rel") == "canonical"
                else ("hreflang", "href") if attrs.get("rel") == "alternate"
                else None
            )
            if needs is None or any(name not in attrs for name in needs):
                sys.exit(f"{rel(path)}: unsupported head tag {tag}")
            if tag.startswith("<meta"):
                self.meta[attrs["name"]] = attrs["content"]
            elif attrs["rel"] == "canonical":
                self.canonical = attrs["href"]
            else:
                self.alternates[attrs["hreflang"]] = attrs["href"]
        if self.get("type") == "article":
            if not self.get("image"):
                sys.exit(f'{rel(path)}: article without <meta name="image">')
            try:
                date.fromisoformat(self.get("published"))
            except ValueError:
                sys.exit(f'{rel(path)}: article needs <meta name="published" content="YYYY-MM-DD">')
        rel_page = path.relative_to(PAGES).as_posix()
        if rel_page == "404.html":
            self.url = "/404.html"
        elif rel_page == "index.html":
            self.url = "/"
        elif rel_page.endswith("/index.html"):
            self.url = "/" + rel_page[: -len("index.html")]
        else:
            self.url = "/" + rel_page[: -len(".html")] + "/"

    def get(self, name, default=""):
        return self.meta.get(name, default)

    @property
    def description(self):
        return self.get("description", DESCRIPTION)

    @property
    def output(self):
        return self.url.lstrip("/") + ("index.html" if self.url.endswith("/") else "")

    def vars(self):
        return {"lang": self.get("lang", "en"), **VARS}

    @property
    def keywords(self):
        return [word.strip() for word in self.get("keywords").split(",") if word.strip()]


def icon(name, size=24):
    if name in BRANDS:
        paint, body = 'fill="currentColor"', BRANDS[name]
    elif name in ICONS:
        paint = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'
        body = ICONS[name]
    else:
        sys.exit(f"unknown icon '{name}'")
    return f'<svg class="icon" width="{size}" height="{size}" viewBox="0 0 24 24" {paint} aria-hidden="true">{body}</svg>'


def enter(stack, path):
    if path in stack:
        chain = stack[stack.index(path) :] + (path,)
        sys.exit("include cycle: " + " -> ".join(rel(p) for p in chain))
    return stack + (path,)


def gallery(gid, kind, body, source):
    photos = [{k: unescape(v) for k, v in ATTR.findall(tag)} for tag in IMG.findall(body)]
    if kind not in GALLERY_KINDS:
        sys.exit(f"{source}: gallery '{gid}' has unknown kind '{kind}', expected one of {', '.join(GALLERY_KINDS)}")
    if not photos or IMG.sub("", body).strip() or any("src" not in photo for photo in photos):
        sys.exit(f"{source}: gallery '{gid}' must hold only <img src=…> lines")
    carousel = kind.startswith("carousel")
    ids = [f"{gid}-photo-{n}" for n in range(1, len(photos) + 1)]
    zoom = f'<span class="post-photo-zoom"><span>{icon("Maximize2", 20)}</span></span>'
    if carousel:
        html = [
            f'<div class="carousel {kind}" id="{gid}" tabindex="0" role="region"'
            ' aria-roledescription="carousel" aria-label="Photo carousel">'
        ]
    else:
        html = [f'<div class="{kind}">']
    for i, (photo, pid) in enumerate(zip(photos, ids)):
        src, text = escape(photo["src"]), escape(photo.get("alt", ""))
        if carousel:
            size = "".join(f' {k}="{escape(photo[k])}"' for k in ("width", "height") if k in photo)
            lazy = ' loading="lazy"' if i else ""
            html.append(f'<a class="slide" href="#{pid}" aria-label="Open full size"><img src="{src}" alt="{text}"{size}{lazy}></a>')
        elif kind == "personal-grid":
            html.append(f'<a class="post-photo personal-card" href="#{pid}"><img src="{src}" alt="{text}" loading="lazy">{zoom}</a>')
        else:
            html.append(f'<a class="post-photo" href="#{pid}" aria-label="Open photo"><img src="{src}" alt="" loading="lazy">{zoom}</a>')
    html.append("</div>")
    for i, (photo, pid) in enumerate(zip(photos, ids)):
        src, text = escape(photo["src"]), escape(photo.get("alt", ""))
        alt, caption = text, ""
        if not carousel:
            alt = "" if text else "Photo"
            if text:
                caption = f'\n    <figcaption><span class="lightbox-text">{text}</span></figcaption>'
        nav = ""
        if len(ids) > 1:
            nav = (
                f'\n  <a class="lightbox-prev" href="#{ids[i - 1]}" aria-label="Previous image">{icon("ArrowLeft", 20)}</a>'
                f'\n  <a class="lightbox-next" href="#{ids[(i + 1) % len(ids)]}" aria-label="Next image">{icon("ArrowRight", 20)}</a>'
            )
        html.append(
            f'<div class="lightbox" id="{pid}" role="dialog" aria-label="Image viewer">\n'
            f'  <a class="lightbox-close" href="#_" aria-label="Close image viewer">{icon("X", 20)}</a>{nav}\n'
            f'  <figure>\n    <img src="{src}" alt="{alt}" loading="lazy">{caption}\n  </figure>\n</div>'
        )
    return "\n".join(html)


def render(text, page, stack, posts):
    source = rel(stack[-1])
    values = page.vars()

    def layout():
        path = LAYOUTS / f"{page.get('layout', 'default')}.html"
        return render(read(path), page, enter(stack, path), posts)

    slots = {
        "head": lambda: head(page),
        "layout": layout,
        "content": lambda: render(page.body, page, enter(stack, page.path), posts),
        "posts": lambda: tiles(posts),
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
            return render(text, page, enter(stack, path), posts)
        if name not in slots:
            sys.exit(f"{source}: unknown slot '{name}'")
        return slots[name]()

    text = GALLERY.sub(lambda match: gallery(*match.groups(), source), text)
    return MARKER.sub(replace, text)


@cache
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
    tags += [
        '<meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)">',
        '<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">',
    ]
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
        tags += [meta("article:tag", tag, "property") for tag in page.keywords]
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
        f'<script type="application/ld+json">{WEBSITE_LD}</script>',
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
            f'\n    <xhtml:link rel="alternate" hreflang="{lang}" href="{escape(absolute(href))}"/>'
            for lang, href in page.alternates.items()
        )
        entries.append(
            f"  <url>\n    <loc>{escape(absolute(page.url))}</loc>{alternates}\n"
            f"    <lastmod>{lastmod}</lastmod>\n    <changefreq>{changefreq}</changefreq>\n"
            f"    <priority>{priority}</priority>\n  </url>"
        )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + "\n".join(entries)
        + "\n</urlset>\n"
    )


def headline(post):
    return post.title.removesuffix(" - " + NAME)


def tiles(posts):
    html = []
    for i, post in enumerate(posts):
        lazy = ' loading="lazy"' if i else ""
        published = date.fromisoformat(post.get("published"))
        html.append(
            f'<article class="blog-tile">\n  <img src="{escape(post.get("image"))}" alt=""{lazy}>\n'
            f'  <div class="blog-tile-body">\n'
            f'    <a class="blog-tile-link" href="{post.url}"><h2 class="blog-tile-title">{escape(headline(post))}</h2></a>\n'
            f'    <p class="blog-tile-date">{icon("Calendar", 16)}{published:%b, %Y}</p>\n  </div>\n</article>'
        )
    return "\n".join(html)


def feed(posts):
    items = []
    for post in posts:
        url = absolute(post.url)
        published = format_datetime(datetime.fromisoformat(post.get("published")).replace(tzinfo=timezone.utc), usegmt=True)
        items.append(
            f"    <item>\n      <title>{escape(headline(post))}</title>\n"
            f"      <link>{url}</link>\n      <guid>{url}</guid>\n      <pubDate>{published}</pubDate>\n"
            f"      <description>{escape(post.description)}</description>\n    </item>"
        )
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{escape(TITLE)}</title>
    <link>{URL}</link>
    <description>{escape(DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="{URL}/feed.xml" rel="self" type="application/rss+xml"/>
{chr(10).join(items)}
  </channel>
</rss>"""


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.unlink(missing_ok=True)
    path.write_text(text, encoding="utf-8")


def hardlink(src, dst):
    try:
        os.link(src, dst)
    except OSError:
        shutil.copy2(src, dst)


def build(out):
    shutil.rmtree(out, ignore_errors=True)
    shutil.copytree(PUBLIC, out, ignore=shutil.ignore_patterns(".DS_Store"), copy_function=hardlink)
    styles = [STYLES / "base.css"] + sorted(p for p in STYLES.glob("*.css") if p.name != "base.css")
    write(out / "static/site.css", "\n".join(read(p) for p in styles))
    pages = [Page(path) for path in sorted(PAGES.rglob("*.html"))]
    urls = {}
    for page in pages:
        if page.url in urls:
            sys.exit(f"{rel(urls[page.url].path)} and {rel(page.path)} are both {page.url}")
        urls[page.url] = page
    paths = {page.path: page for page in pages}
    for page in pages:
        for kind, name, *_ in MARKER.findall(page.body):
            included = paths.get(ROOT / name) if kind == "include" else None
            if included and page.canonical != included.url:
                sys.exit(f'{rel(page.path)} includes {name}, so it needs <link rel="canonical" href="{included.url}">')
    for page in pages:
        original = urls.get(page.canonical)
        if original and original is not page:
            page.title = page.title or original.title
            if "description" in original.meta:
                page.meta.setdefault("description", original.meta["description"])
    for page in pages:
        page.title = page.title or TITLE
    posts = sorted((p for p in pages if p.get("type") == "article"), key=lambda p: p.get("published"), reverse=True)
    base = LAYOUTS / "base.html"
    for page in pages:
        write(out / page.output, render(read(base), page, (base,), posts))
    write(out / "sitemap.xml", sitemap(pages))
    write(out / "feed.xml", feed(posts))
    write(out / "robots.txt", f"User-Agent: *\nAllow: /\n\nSitemap: {URL}/sitemap.xml\n")
    print(f"Built {len(pages)} pages into {out}")
    if check(out, {url: out / page.output for url, page in urls.items()}, URL):
        sys.exit(1)


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

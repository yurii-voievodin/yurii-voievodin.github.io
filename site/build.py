import argparse
import importlib
import os
import shutil
import sys
from datetime import date
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

import config
from engine import ROOT, SLOTS, render

PUBLIC = ROOT.parent / "public"
CSS_FIRST = ["base"]


def load_areas(only):
    names = sorted(p.stem for p in (ROOT / "areas").glob("*.py") if p.stem != "__init__")
    names = ["core"] + [n for n in names if n != "core"]
    if only:
        unknown = set(only) - set(names)
        if unknown:
            sys.exit(f"unknown areas: {', '.join(sorted(unknown))}")
        names = [n for n in names if n == "core" or n in only]
    modules = [importlib.import_module(f"areas.{name}") for name in names]
    for module in modules:
        for name, slot in getattr(module, "SLOTS", {}).items():
            if name in SLOTS:
                sys.exit(f"slot '{name}' is defined twice ({module.__name__})")
            SLOTS[name] = slot
    return modules


def link_tree(source, target):
    for path in source.rglob("*"):
        if path.is_dir() or path.name == ".DS_Store":
            continue
        dest = target / path.relative_to(source)
        dest.parent.mkdir(parents=True, exist_ok=True)
        try:
            os.link(path, dest)
        except OSError:
            shutil.copy2(path, dest)


def write(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.unlink(missing_ok=True)
    path.write_text(text, encoding="utf-8")


def write_css(out):
    folder = ROOT / "static/css"
    names = CSS_FIRST + sorted(p.stem for p in folder.glob("*.css") if p.stem not in CSS_FIRST)
    css = "\n".join((folder / f"{name}.css").read_text(encoding="utf-8") for name in names)
    write(out / "static/site.css", css)


def sitemap(pages):
    today = date.today().isoformat()
    entries = []
    for page in pages:
        if not page.sitemap:
            continue
        priority, changefreq = page.sitemap
        alternates = "".join(
            f'\n    <xhtml:link rel="alternate" hreflang="{lang}" href="{xml_escape(config.absolute(path))}"/>'
            for lang, path in page.alternates.items()
        )
        entries.append(
            f"  <url>\n    <loc>{xml_escape(config.absolute(page.url))}</loc>{alternates}\n"
            f"    <lastmod>{page.lastmod or today}</lastmod>\n    <changefreq>{changefreq}</changefreq>\n"
            f"    <priority>{priority}</priority>\n  </url>"
        )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + "\n".join(entries)
        + "\n</urlset>\n"
    )


ROBOTS = f"User-Agent: *\nAllow: /\n\nSitemap: {config.URL}/sitemap.xml\n"


def build(out, only=None):
    modules = load_areas(only)
    shutil.rmtree(out, ignore_errors=True)
    link_tree(PUBLIC, out)
    (out / "favicon.ico").unlink(missing_ok=True)
    shutil.copy2(ROOT / "static/favicon.ico", out / "favicon.ico")
    write_css(out)

    pages = [page for module in modules for page in module.pages()]
    seen = set()
    for page in pages:
        if page.url in seen:
            sys.exit(f"duplicate page {page.url}")
        seen.add(page.url)
        write(out / page.output, render("partials/layouts/base.html", page))

    files = {"sitemap.xml": sitemap(pages), "robots.txt": ROBOTS}
    for module in modules:
        files.update(getattr(module, "files", dict)())
    for name, text in files.items():
        write(out / name, text)
    print(f"Built {len(pages)} pages into {out}")


def serve(out, port):
    handler = partial(SimpleHTTPRequestHandler, directory=out)
    print(f"Serving on http://localhost:{port}")
    ThreadingHTTPServer(("", port), handler).serve_forever()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", type=Path, default=ROOT / "dist")
    parser.add_argument("--areas", help="comma-separated areas to build (core is always included)")
    parser.add_argument("--serve", action="store_true")
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()
    build(args.out, args.areas.split(",") if args.areas else None)
    if args.serve:
        serve(args.out, args.port)

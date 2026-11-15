import json
import re
import shutil
import sys
from dataclasses import dataclass
from datetime import date
from functools import partial
from html import escape
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote

import components as c

ROOT = Path(__file__).parent
DIST = ROOT / "dist"
PUBLIC = ROOT.parent / "public"


@dataclass
class Page:
    url: str
    source: str
    title: str
    description: str = ""

    @property
    def vars(self):
        return {"title": self.title, "description": self.description, "year": str(date.today().year)}


PAGES = [
    Page("/", "pages/index.html", "No-JS prototype", "Pure HTML + CSS version of the site, built with Python."),
    Page("/qa/", "pages/qa.html", "Q&A", "Accordion with <details>."),
    Page("/timeline/", "pages/timeline.html", "Timeline", "Highlight with :target, detail sheet with popover."),
    Page("/gallery/", "pages/gallery.html", "Gallery", "Scroll-snap carousel and :target lightbox."),
    Page("/tour/", "pages/tour.html", "Feature tour", "Tabs with radio buttons and :has()."),
]

NAV = [
    ("Home", "/"),
    ("Q&A", "/qa/"),
    ("Timeline", "/timeline/"),
    ("Gallery", "/gallery/"),
    ("Tour", "/tour/"),
]


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))


SLOTS = {
    "content": lambda page: render(page.source, page),
    "nav": lambda page: c.nav(NAV, current=page.url),
    "timeline": lambda page: c.timeline(load_json(PUBLIC / "data/timeline.json")["timeline"]),
    "gallery": lambda page: c.gallery("austria", load_json(ROOT / "data/gallery.json")),
    "tour": lambda page: c.feature_tour("wavefall", load_json(ROOT / "data/tour.json")),
}

MARKER = re.compile(r"<!--\s*(include|slot):\s*(\S+?)\s*-->|\{\{\s*(\w+)\s*\}\}")


def render(path, page):
    text = (ROOT / path).read_text(encoding="utf-8")

    def replace(match):
        kind, name, var = match.groups()
        if var:
            if var not in page.vars:
                sys.exit(f"{path}: unknown variable {{{{ {var} }}}}")
            return escape(page.vars[var])
        if kind == "include":
            return render(name, page)
        if name not in SLOTS:
            sys.exit(f"{path}: unknown slot '{name}'")
        return SLOTS[name](page)

    return MARKER.sub(replace, text)


LOCAL_FILE = re.compile(r'(?:src|href)="(/[^"#?]+\.\w+)"')


def copy_assets(html):
    for url in LOCAL_FILE.findall(html):
        source = PUBLIC / unquote(url).lstrip("/")
        target = DIST / unquote(url).lstrip("/")
        if source.is_file() and not target.exists():
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, target)


def build():
    shutil.rmtree(DIST, ignore_errors=True)
    shutil.copytree(ROOT / "static", DIST / "static")
    for page in PAGES:
        html = render("partials/layout.html", page)
        out = DIST / page.url.strip("/") / "index.html"
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(html, encoding="utf-8")
        copy_assets(html)
    print(f"Built {len(PAGES)} pages into {DIST}")


def serve(port=8000):
    handler = partial(SimpleHTTPRequestHandler, directory=DIST)
    print(f"Serving on http://localhost:{port}")
    ThreadingHTTPServer(("", port), handler).serve_forever()


if __name__ == "__main__":
    build()
    if "--serve" in sys.argv:
        serve()

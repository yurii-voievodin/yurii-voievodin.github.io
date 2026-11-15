import re
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

DIST = Path(sys.argv[1]) if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else Path(__file__).parent / "dist"
PARTIAL = "--partial" in sys.argv
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
LEFTOVER = re.compile(r"<!--\s*(include|slot|icon):|\{\{\s*\w+\s*\}\}")
CLOSE_FRAGMENT = "_"


class Scan(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.open, self.ids, self.refs, self.urls, self.errors = [], [], [], [], []

    def error_at(self, message):
        self.errors.append(f"line {self.getpos()[0]}: {message}")

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "script" and attrs.get("type") != "application/ld+json":
            self.error_at("<script>")
        for name in attrs:
            if name.startswith("on"):
                self.error_at(f"inline handler {name}=")
        if attrs.get("id"):
            self.ids.append(attrs["id"])
        for name in ("popovertarget", "for", "commandfor"):
            if attrs.get(name):
                self.refs.append(attrs[name])
        for name in ("href", "src", "poster"):
            if attrs.get(name):
                self.urls.append(attrs[name])
        if tag not in VOID:
            self.open.append(tag)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self.open or self.open[-1] != tag:
            self.error_at(f"unexpected </{tag}>, open: {self.open[-1:] or 'nothing'}")
            return
        self.open.pop()


def page_url(path):
    if path.name != "index.html":
        return "/" + path.relative_to(DIST).as_posix()
    folder = path.parent.relative_to(DIST).as_posix()
    return "/" if folder == "." else f"/{folder}/"


def main():
    pages = {}
    for path in sorted(p for p in DIST.rglob("*.html") if p.name == "index.html" or p.parent == DIST):
        text = path.read_text(encoding="utf-8")
        scan = Scan()
        scan.feed(text)
        if scan.open and scan.open != ["html"]:
            scan.errors.append(f"unclosed tags at end: {scan.open}")
        if LEFTOVER.search(text):
            scan.errors.append(f"leftover marker: {LEFTOVER.search(text).group(0)}")
        pages[page_url(path)] = (path, scan)

    problems = 0
    for url, (path, scan) in pages.items():
        errors = scan.errors
        errors += [f"duplicate id '{i}'" for i, n in Counter(scan.ids).items() if n > 1]
        errors += [f"reference to missing id '{r}'" for r in scan.refs if r not in scan.ids]

        for link in scan.urls:
            parts = urlsplit(link)
            if parts.scheme or parts.netloc:
                continue
            target_url = parts.path or url
            if target_url.endswith("/"):
                if target_url not in pages:
                    if not PARTIAL:
                        errors.append(f"link to missing page {link}")
                    continue
                if parts.fragment and parts.fragment != CLOSE_FRAGMENT and parts.fragment not in pages[target_url][1].ids:
                    errors.append(f"link to missing anchor {link}")
            elif not (DIST / unquote(target_url).lstrip("/")).is_file():
                errors.append(f"missing file {link}")

        rel = path.relative_to(DIST)
        for error in errors:
            print(f"{rel}: {error}")
        problems += len(errors)

    print(f"Checked {len(pages)} pages: {problems} problem(s)")
    sys.exit(1 if problems else 0)


if __name__ == "__main__":
    main()

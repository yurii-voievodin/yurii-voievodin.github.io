import re
import sys
from html import escape
from pathlib import Path

import components as c
from page import head, jsonld

ROOT = Path(__file__).parent

MARKER = re.compile(r"<!--\s*(include|slot|icon):\s*(\S+?)(?:\s+(\d+))?\s*-->|\{\{\s*(\w+)\s*\}\}")

SLOTS = {
    "head": head,
    "jsonld": jsonld,
    "frame": lambda page: render(f"partials/layouts/{page.layout}.html", page),
    "content": lambda page: page.body(page) if page.body else render(page.template, page),
    "footer-links": lambda page: c.footer_links(page.url),
}


def render(path, page):
    text = (ROOT / path).read_text(encoding="utf-8")
    values = page.text_vars()

    def replace(match):
        kind, name, size, var = match.groups()
        if var:
            if var not in values:
                sys.exit(f"{path}: unknown variable {{{{ {var} }}}} on {page.url}")
            return escape(values[var])
        if kind == "include":
            return render(name, page)
        if kind == "icon":
            return c.icon(name, int(size or 24))
        slot = page.slots[name] if name in page.slots else SLOTS.get(name)
        if slot is None:
            sys.exit(f"{path}: unknown slot '{name}' on {page.url}")
        return slot(page) if callable(slot) else slot

    return MARKER.sub(replace, text)

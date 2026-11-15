from html import escape

import config
from icons import ICONS


def icon(name, size=24, color="currentColor", cls=""):
    inner = ICONS.get(name, ICONS["Circle"])
    class_attr = f"icon {cls}".strip()
    return (
        f'<svg class="{class_attr}" width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" '
        f'stroke="{escape(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" '
        f'aria-hidden="true">{inner}</svg>'
    )


def footer_links(current):
    links = []
    for label, href, icon_name in config.NAVIGATION:
        mark = ' aria-current="page"' if href == current else ""
        links.append(f'<a href="{href}"{mark}>{icon(icon_name, 16)}{escape(label)}</a>')
    return "\n".join(links)

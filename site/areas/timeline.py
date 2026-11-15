import json
import re
from html import escape

import components as c
from engine import ROOT
from mdlite import markdown
from page import Page

TIMELINE_JSON = ROOT.parent / "public/data/timeline.json"


def date_id(date):
    return re.sub(r"[\s,.-]", "", date or "").lower()


def timeline(events):
    return '<ol class="timeline">\n' + "\n".join(timeline_event(e) for e in events) + "\n</ol>"


def timeline_event(event):
    data = event.get("data") or {}
    symbol = data.get("symbol") or {}
    marker = (
        c.icon(symbol["icon"], 16, symbol.get("color") or "gray")
        if symbol.get("icon")
        else '<span class="timeline-pip"></span>'
    )
    detail = data.get("detailPage")
    button = (
        f'<button class="timeline-more" popovertarget="detail-{detail}" aria-label="View details">{c.icon("Plus", 20)}</button>'
        if detail
        else ""
    )
    anchor = date_id(event.get("date"))
    id_attr = f' id="{anchor}"' if anchor else ""
    return f"""<li class="timeline-event">
  <span class="timeline-marker">{marker}</span>
  <article class="panel timeline-card"{id_attr}>
    <div class="timeline-text">
{timeline_text(event, data)}
    </div>
    {button}
  </article>
</li>"""


def timeline_text(event, data):
    if event.get("comment"):
        return f'<div class="timeline-md">{markdown(event["comment"])}</div>'
    parts = []
    if event.get("date"):
        parts.append(f'<div class="timeline-date">{escape(event["date"])}</div>')
    if event.get("title"):
        parts.append(f'<div class="timeline-md timeline-title">{markdown(event["title"])}</div>')
    if event.get("description"):
        parts.append(f'<div class="timeline-md">{markdown(event["description"])}</div>')
    if data.get("image"):
        src = escape("/" + data["image"]["path"])
        parts.append(f'<img class="timeline-image" src="{src}" alt="" width="320" height="240" loading="lazy">')
    return "\n".join(parts)


SLOTS = {
    "timeline": lambda page: timeline(json.loads(TIMELINE_JSON.read_text(encoding="utf-8"))["timeline"]),
}


def pages():
    return [
        Page(
            "/timeline/",
            "Professional Timeline - Yurii Voievodin",
            "A chronological journey through my professional career, key milestones,"
            " and notable achievements in software development.",
            template="pages/timeline/timeline.html",
            sitemap=(0.8, "monthly"),
        ),
    ]

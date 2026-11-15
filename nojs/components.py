import re
from html import escape

from icons import ICONS
from mdlite import markdown


def icon(name, size=24, color="currentColor"):
    inner = ICONS.get(name, ICONS["Circle"])
    return (
        f'<svg class="icon" width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" '
        f'stroke="{escape(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" '
        f'aria-hidden="true">{inner}</svg>'
    )


def nav(items, current):
    links = []
    for label, href in items:
        mark = ' aria-current="page"' if href == current else ""
        links.append(f'<a href="{href}"{mark}>{escape(label)}</a>')
    return "\n".join(links)


def date_id(date):
    return re.sub(r"[\s,.-]", "", date or "").lower()


def timeline(events):
    return '<ol class="timeline">\n' + "\n".join(timeline_event(e) for e in events) + "\n</ol>"


def timeline_event(event):
    data = event.get("data") or {}
    symbol = data.get("symbol") or {}
    marker = icon(symbol["icon"], 16, symbol.get("color") or "gray") if symbol.get("icon") else '<span class="timeline-pip"></span>'

    detail = data.get("detailPage")
    button = (
        f'<button class="timeline-more" popovertarget="detail-{detail}" aria-label="View details">{icon("Plus", 20)}</button>'
        if detail
        else ""
    )
    anchor = date_id(event.get("date"))
    id_attr = f' id="{anchor}"' if anchor else ""

    return f"""<li class="timeline-event">
  <span class="timeline-marker">{marker}</span>
  <article class="panel timeline-card"{id_attr}>
    <div class="timeline-text prose">
{timeline_text(event, data)}
    </div>
    {button}
  </article>
</li>"""


def timeline_text(event, data):
    if event.get("comment"):
        return markdown(event["comment"])

    parts = []
    if event.get("date"):
        parts.append(f'<p class="timeline-date">{escape(event["date"])}</p>')
    if event.get("title"):
        parts.append(f'<div class="timeline-title">{markdown(event["title"])}</div>')
    if event.get("description"):
        parts.append(markdown(event["description"]))
    if data.get("image"):
        src = escape("/" + data["image"]["path"])
        parts.append(f'<img class="timeline-image" src="{src}" alt="" width="320" height="240" loading="lazy">')
    return "\n".join(parts)


def gallery(name, photos):
    total = len(photos)
    slides, boxes = [], []

    for i, photo in enumerate(photos, 1):
        photo_id = f"{name}-photo-{i}"
        prev_id = f"{name}-photo-{(i - 2) % total + 1}"
        next_id = f"{name}-photo-{i % total + 1}"
        src, alt, caption = escape(photo["src"]), escape(photo["alt"]), escape(photo["caption"])

        slides.append(f"""<a class="slide" href="#{photo_id}" aria-label="Open photo {i} of {total}">
  <img src="{src}" alt="{alt}" loading="{'eager' if i == 1 else 'lazy'}">
  <span class="slide-counter">{i} / {total}</span>
</a>""")

        boxes.append(f"""<div class="lightbox" id="{photo_id}" role="dialog" aria-label="Photo {i} of {total}">
  <a class="lightbox-close" href="#_" aria-label="Close image viewer">{icon("X", 20)}</a>
  <a class="lightbox-prev" href="#{prev_id}" aria-label="Previous image">{icon("ArrowLeft", 20)}</a>
  <a class="lightbox-next" href="#{next_id}" aria-label="Next image">{icon("ArrowRight", 20)}</a>
  <img src="{src}" alt="{alt}" loading="lazy">
  <p class="lightbox-caption"><strong>Photo {i} of {total}</strong> {caption}</p>
</div>""")

    return (
        f'<div class="carousel" id="{name}" tabindex="0" role="region" aria-label="Photo carousel">\n'
        + "\n".join(slides)
        + "\n</div>\n"
        + "\n".join(boxes)
    )


def feature_tour(name, items):
    out = []
    for i, item in enumerate(items):
        checked = " checked" if i == 0 else ""
        out.append(f"""<label class="tour-item">
  <input class="visually-hidden" type="radio" name="tour-{name}"{checked}>
  <img class="tour-shot" src="{escape(item["image"])}" alt="" loading="{'eager' if i == 0 else 'lazy'}">
  <span class="tour-text">
    <span class="tour-title">{escape(item["title"])}</span>
    <span class="tour-body"><span>{escape(item["body"])}</span></span>
  </span>
</label>""")
    return f'<div class="tour" style="--n: {len(items)}">\n' + "\n".join(out) + "\n</div>"

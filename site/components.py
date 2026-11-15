from html import escape

import config
from icons import BRANDS, ICONS


def icon(name, size=24, color="currentColor", cls=""):
    inner = ICONS.get(name, ICONS["Circle"])
    class_attr = f"icon {cls}".strip()
    return (
        f'<svg class="{class_attr}" width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" '
        f'stroke="{escape(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" '
        f'aria-hidden="true">{inner}</svg>'
    )


def brand_icon(name, size=20):
    return (
        f'<svg class="icon" width="{size}" height="{size}" viewBox="0 0 24 24" fill="currentColor" '
        f'aria-hidden="true">{BRANDS[name]}</svg>'
    )


def external_attrs(external):
    return ' target="_blank" rel="noopener noreferrer"' if external else ""


def button(href, label_html, variant="primary", external=False, cls=""):
    class_attr = f"btn btn-{variant} {cls}".strip()
    return f'<a class="{class_attr}" href="{escape(href)}"{external_attrs(external)}>{label_html}</a>'


def back_link(href, label):
    return f'<a class="back-link" href="{escape(href)}">{icon("ArrowLeft", 16)}{escape(label)}</a>'


def tag(text, tone="violet", size="sm"):
    return f'<span class="tag tag-{tone} tag-{size}">{escape(text)}</span>'


def tag_row(items, tone="violet", size="sm", cls=""):
    class_attr = f"tag-row {cls}".strip()
    return f'<div class="{class_attr}">' + "".join(tag(t, tone, size) for t in items) + "</div>"


def gradient_text(html, element="span", cls=""):
    class_attr = f"gradient-text {cls}".strip()
    return f'<{element} class="{class_attr}">{html}</{element}>'


def gradient_link(href, html, external=False):
    return f'<a class="gradient-link" href="{escape(href)}"{external_attrs(external)}>{html}</a>'


def inline_link(href, html):
    return f'<a class="inline-link" href="{escape(href)}">{html}</a>'


def section_heading(html, size="md", icon_name=None, cls=""):
    class_attr = f"section-heading section-heading-{size} {cls}".strip()
    mark = f'<span class="section-heading-icon">{icon(icon_name, 24)}</span>' if icon_name else ""
    return f'<h2 class="{class_attr}">{mark}{html}</h2>'


def footer_links(current):
    links = []
    for label, href, icon_name in config.NAVIGATION:
        mark = ' aria-current="page"' if href == current else ""
        links.append(f'<a href="{href}"{mark}>{icon(icon_name, 16)}{escape(label)}</a>')
    return "\n".join(links)


def carousel(name, photos, shape="tall", lightbox=False):
    total = len(photos)
    slides = []
    for i, photo in enumerate(photos, 1):
        src, alt = escape(photo["src"]), escape(photo["alt"])
        loading = "eager" if i == 1 else "lazy"
        counter = f'<span class="slide-counter">{i} / {total}</span>' if total > 1 else ""
        inner = f'<img src="{src}" alt="{alt}" loading="{loading}">{counter}'
        if lightbox:
            slides.append(f'<a class="slide" href="#{name}-photo-{i}" aria-label="Open photo {i} of {total}">{inner}</a>')
        else:
            slides.append(f'<div class="slide">{inner}</div>')
    html = (
        f'<div class="carousel carousel-{shape}" id="{name}" tabindex="0" role="region" '
        f'aria-roledescription="carousel" aria-label="Photo carousel">\n' + "\n".join(slides) + "\n</div>"
    )
    return html + ("\n" + lightboxes(name, photos) if lightbox else "")


def lightboxes(name, photos, caption_key=None):
    total = len(photos)
    boxes = []
    for i, photo in enumerate(photos, 1):
        prev_id = f"{name}-photo-{(i - 2) % total + 1}"
        next_id = f"{name}-photo-{i % total + 1}"
        src, alt = escape(photo["src"]), escape(photo["alt"])
        caption = photo.get(caption_key) if caption_key else None
        caption_html = f'<span class="lightbox-text">{escape(caption)}</span>' if caption else ""
        arrows = (
            f'<a class="lightbox-prev" href="#{prev_id}" aria-label="Previous image">{icon("ArrowLeft", 20)}</a>\n'
            f'  <a class="lightbox-next" href="#{next_id}" aria-label="Next image">{icon("ArrowRight", 20)}</a>\n'
            if total > 1
            else ""
        )
        boxes.append(f"""<div class="lightbox" id="{name}-photo-{i}" role="dialog" aria-label="Photo {i} of {total}">
  <a class="lightbox-close" href="#_" aria-label="Close image viewer">{icon("X", 20)}</a>
  {arrows}<figure>
    <img src="{src}" alt="{alt}" loading="lazy">
    <figcaption><strong>Photo {i} of {total}</strong>{caption_html}</figcaption>
  </figure>
</div>""")
    return "\n".join(boxes)

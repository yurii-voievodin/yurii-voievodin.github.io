import json
from datetime import date, datetime, timezone
from email.utils import format_datetime
from html import escape
from xml.sax.saxutils import escape as xml_escape

import components as c
import config
from engine import ROOT
from page import Page

DATA = ROOT / "data/blog"
GALLERY = "gallery"
MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
]


def load_posts():
    posts = [json.loads(path.read_text(encoding="utf-8")) for path in DATA.glob("*.json")]
    return sorted(posts, key=lambda post: post["date"], reverse=True)


def format_date(value, style="monthYear"):
    day = date.fromisoformat(value)
    month = MONTHS[day.month - 1]
    if style == "long":
        return f"{month} {day.day:02d}, {day.year}"
    if style == "shortMonthYear":
        return f"{month[:3]}, {day.year}"
    return f"{month}, {day.year}"


def photo_card(href, src, alt, overlay=None, external=False, cls=""):
    label = ""
    if overlay is None:
        overlay = f'<span class="post-photo-zoom"><span>{c.icon("Maximize2", 20)}</span></span>'
        label = f' aria-label="Open {escape(alt)} full size"'
    class_attr = f"post-photo {cls}".strip()
    return (
        f'<a class="{class_attr}" href="{escape(href)}"{label}{c.external_attrs(external)}>'
        f'<img src="{escape(src)}" alt="{escape(alt)}" loading="lazy">{overlay}</a>'
    )


def post_card(post):
    href = f"/blog/{post['slug']}/"
    image = escape(post["featuredImage"])
    shown = format_date(post["date"], "shortMonthYear")
    return f"""<article class="panel blog-entry">
  <div class="blog-entry-row">
    <div class="blog-entry-media"><img src="{image}" alt="" loading="lazy"></div>
    <div class="blog-entry-body">
      <a class="blog-entry-link" href="{href}"><h2 class="blog-entry-title">{escape(post['title'])}</h2></a>
      <p class="blog-entry-excerpt">{escape(post['excerpt'])}</p>
      <div class="blog-entry-meta">
        <span class="blog-entry-date">{c.icon("Calendar", 16)}<span>{shown}</span></span>
        {c.tag_row(post["tags"][:2], cls="blog-entry-tags")}
      </div>
    </div>
  </div>
</article>"""


def gallery_panel(panel, cls):
    cta = panel.get("cta")
    note = f'\n  <p class="post-panel-note">{escape(panel["note"])}</p>' if panel.get("note") else ""
    action = ""
    if cta:
        button = c.button(cta["href"], escape(cta["label"]) + c.icon("ArrowRight", 16))
        action = f'\n  <div class="post-panel-action">{button}</div>'
        cls += " post-panel-cta"
    return f"""<section class="panel panel-2xl post-panel {cls}">
  <h2>{escape(panel['heading'])}</h2>
  <p>{escape(panel['body'])}</p>{note}{action}
</section>"""


def gallery_heading(text):
    if not text:
        return ""
    mark = f'<span class="section-heading-icon">{c.icon("Camera", 32)}</span>'
    return f'<h2 class="section-heading section-heading-lg post-gallery-heading">{mark}{escape(text)}</h2>'


def post_page(post):
    photos = post["photos"]
    hero = post["hero"]
    intro = post.get("intro")
    return Page(
        f"/blog/{post['slug']}/",
        f"{post['title']} - {config.NAME}",
        post["excerpt"],
        template="pages/blog/post.html",
        vars={
            "hero_image": hero["image"],
            "hero_alt": hero["alt"],
            "hero_title": hero["title"],
            "hero_subtitle": hero["subtitle"],
            "post_date": format_date(post["date"], post.get("dateFormat", "monthYear")),
            "photo_count": str(len(photos)),
        },
        slots={
            "post-tags": lambda page: c.tag_row(post["tags"], tone="onImage", size="md", cls="post-hero-tags"),
            "post-intro": lambda page: gallery_panel(intro, "post-intro") if intro else "",
            "post-gallery-heading": lambda page: gallery_heading(post.get("galleryHeading")),
            "post-photos": lambda page: "\n".join(
                photo_card(f"#{GALLERY}-photo-{i}", photo["src"], photo["alt"]) for i, photo in enumerate(photos, 1)
            ),
            "post-outro": lambda page: "\n".join(gallery_panel(panel, "post-outro") for panel in post.get("outro", [])),
            "post-lightboxes": lambda page: c.lightboxes(GALLERY, photos, "description"),
        },
        og_type="article",
        image=post["featuredImage"],
        keywords=post["tags"],
        published=post["date"],
        tags=post["tags"],
        sitemap=(0.6, "monthly"),
        lastmod=post["date"],
    )


def xml(text):
    return xml_escape(text, {'"': "&quot;", "'": "&apos;"})


def feed_item(post):
    url = f"{config.URL}/blog/{post['slug']}/"
    published = format_datetime(datetime.fromisoformat(post["date"]).replace(tzinfo=timezone.utc), usegmt=True)
    return f"""    <item>
      <title>{xml(post['title'])}</title>
      <link>{url}</link>
      <guid>{url}</guid>
      <pubDate>{published}</pubDate>
      <description>{xml(post['excerpt'])}</description>
    </item>"""


def feed(posts):
    items = "\n".join(feed_item(post) for post in posts)
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{xml(config.TITLE)}</title>
    <link>{config.URL}</link>
    <description>{xml(config.DESCRIPTION)}</description>
    <language>en</language>
    <atom:link href="{config.URL}/feed.xml" rel="self" type="application/rss+xml"/>
{items}
  </channel>
</rss>"""


def files():
    return {"feed.xml": feed(load_posts())}


def pages():
    posts = load_posts()
    index = Page(
        "/blog/",
        "Travel Blog - Yurii Voievodin",
        "Stories and adventures from my travels around the world. Exploring new places, capturing memories,"
        " and sharing experiences.",
        template="pages/blog/index.html",
        slots={"blog-entries": "\n".join(post_card(post) for post in posts)},
        sitemap=(0.8, "weekly"),
    )
    return [index, *(post_page(post) for post in posts)]

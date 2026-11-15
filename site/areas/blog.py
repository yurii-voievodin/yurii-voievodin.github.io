from datetime import datetime, timezone
from email.utils import format_datetime
from xml.sax.saxutils import escape as xml_escape

import config
from page import Page


def post(slug, title, published, excerpt, tags, image):
    return Page(
        f"/blog/{slug}/",
        f"{title} - {config.NAME}",
        excerpt,
        template=f"pages/blog/{slug}.html",
        vars={"heading": title},
        og_type="article",
        image=image,
        keywords=tags,
        published=published,
        tags=tags,
        sitemap=(0.6, "monthly"),
        lastmod=published,
    )


POSTS = [
    post(
        "greece-2026",
        "Greece 2026",
        "2026-08-28",
        "Two summer road trips — camping by turquoise coves and the monasteries of Meteora",
        ["travel", "photography", "greece", "roadtrip"],
        "/greece-2026/hero.jpeg",
    ),
    post(
        "bulgaria-2026",
        "Bulgaria 2026",
        "2026-05-06",
        "Black Sea coast, mountains, and ancient cities",
        ["travel", "photography", "bulgaria", "adventure"],
        "/bulgaria-2026/hero.jpeg",
    ),
    post(
        "poland-2025",
        "Poland 2025",
        "2025-12-01",
        "Half a year living in Poland",
        ["photography", "poland", "life"],
        "/poland-2025/01.jpeg",
    ),
    post(
        "prague-2025",
        "Prague 2025",
        "2025-11-01",
        "A few trips to Prague in 2025",
        ["photography", "prague", "czechia"],
        "/prague-2025/01.jpeg",
    ),
    post(
        "austria-2025",
        "Austria 2025",
        "2025-10-11",
        "A journey through Austria's Alpine landscapes and historic Vienna",
        ["travel", "photography", "austria", "adventure", "alps"],
        "/austria-2025/IMG_6445.jpeg",
    ),
    post(
        "norway-2025",
        "Norway 2025",
        "2025-09-20",
        "A photographic journey through the stunning landscapes of Norway",
        ["travel", "photography", "norway", "adventure"],
        "/norway-2025/IMG_7111.jpeg",
    ),
    post(
        "italy-2025",
        "Italy 2025",
        "2025-07-14",
        "A cultural and visual journey through the heart of Italy",
        ["travel", "photography", "italy", "adventure", "culture"],
        "/italy-2025/IMG_5133_SnapseedCopy.jpeg",
    ),
    post(
        "land_rover",
        "Land Rover Discovery Sport 2017",
        "2025-02-02",
        "A collection of my photos with Land Rover in different locations",
        ["automotive", "photography", "ukraine", "travel"],
        "/land_rover/10.jpeg",
    ),
    post(
        "kyiv-2025",
        "Kyiv 2025",
        "2025-01-01",
        "Kyiv in 2025",
        ["photography", "kyiv", "ukraine"],
        "/kyiv-2025/hero.jpeg",
    ),
]


def xml(text):
    return xml_escape(text, {'"': "&quot;", "'": "&apos;"})


def feed_item(page):
    url = config.absolute(page.url)
    published = format_datetime(datetime.fromisoformat(page.published).replace(tzinfo=timezone.utc), usegmt=True)
    return f"""    <item>
      <title>{xml(page.vars['heading'])}</title>
      <link>{url}</link>
      <guid>{url}</guid>
      <pubDate>{published}</pubDate>
      <description>{xml(page.description)}</description>
    </item>"""


def files():
    items = "\n".join(feed_item(page) for page in POSTS)
    feed = f"""<?xml version="1.0" encoding="UTF-8"?>
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
    return {"feed.xml": feed}


def pages():
    index = Page(
        "/blog/",
        "Travel Blog - Yurii Voievodin",
        "Stories and adventures from my travels around the world. Exploring new places, capturing memories,"
        " and sharing experiences.",
        template="pages/blog/index.html",
        sitemap=(0.8, "weekly"),
    )
    return [index, *POSTS]

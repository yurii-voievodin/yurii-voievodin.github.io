import json
from html import escape

import components as c
from areas.blog import photo_card
from engine import ROOT
from page import Page

DATA = ROOT / "data/personal/personal.json"
LIGHTBOX = "photos"


def photo_cards(photos):
    return "\n".join(
        photo_card(f"#{LIGHTBOX}-photo-{i}", photo["src"], photo["alt"], cls="personal-card")
        for i, photo in enumerate(photos, 1)
    )


def link_cards(items):
    cards = []
    for item in items:
        caption = f'<div class="personal-card-caption"><h3>{escape(item["name"])}</h3></div>'
        cards.append(photo_card(item["url"], item["image"], item["alt"], caption, external=True, cls="personal-card"))
    return "\n".join(cards)


def pages():
    data = json.loads(DATA.read_text(encoding="utf-8"))
    return [
        Page(
            "/personal/",
            "Personal Interests - Yurii Voievodin",
            "Explore my personal interests: photography, favorite movies and series, and video games."
            " A glimpse into what inspires me beyond coding.",
            template="pages/personal/personal.html",
            slots={
                "personal-photos": photo_cards(data["photos"]),
                "personal-movies": link_cards(data["movies"]),
                "personal-games": link_cards(data["games"]),
                "personal-lightboxes": c.lightboxes(LIGHTBOX, data["photos"], "alt"),
            },
            sitemap=(0.8, "monthly"),
        ),
    ]

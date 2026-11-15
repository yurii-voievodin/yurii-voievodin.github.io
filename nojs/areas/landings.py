from html import escape

from engine import render
from page import Page

SLOTS = {
    "legal-updated": lambda page: (
        f'<p class="legal-updated">Last updated: {escape(page.vars["updated"])}</p>' if page.vars.get("updated") else ""
    ),
}


def legal_page(url, title, description, app, app_href, kind, body, updated=None, sitemap=(0.3, "yearly")):
    return Page(
        url,
        title,
        description,
        layout="bare",
        template="pages/landings/legal.html",
        vars={"app": app, "app_href": app_href, "kind": kind, "updated": updated or ""},
        slots={"legal-body": lambda page: render(body, page)},
        sitemap=sitemap,
    )


def pages():
    return [
        legal_page(
            "/wavefall-privacy/",
            "Wavefall — Privacy Policy",
            "Privacy policy for Wavefall, a single-player game for iPhone, iPad, and Mac that collects no data of any kind.",
            "Wavefall",
            "/wavefall/",
            "Privacy Policy",
            "pages/landings/wavefall-privacy.html",
            updated="July 20, 2026",
        ),
    ]

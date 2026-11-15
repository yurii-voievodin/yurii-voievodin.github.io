from html import escape

import components as c
import config
from page import Page

TELEGRAM = (
    '<svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
    '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 '
    "7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 "
    "1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 "
    "3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48"
    "-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 "
    '6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
)

CONTACTS = [
    (f"mailto:{config.EMAIL}", c.icon("Mail", 16), config.EMAIL, False),
    (config.GITHUB, c.brand_icon("Github", 16), "yurii-voievodin", True),
    (config.LINKEDIN, c.brand_icon("Linkedin", 16), "yurivoevodin", True),
    ("https://telegram.me/yurii_voievodin", TELEGRAM, "yurii_voievodin", True),
    ("tel:+359877185470", c.icon("Phone", 16), "+359 87 7185470", False),
]

PERSON = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": config.NAME,
    "jobTitle": "Senior iOS Engineer",
    "url": config.URL,
    "email": config.EMAIL,
    "sameAs": [config.GITHUB, config.LINKEDIN],
}


def contacts(page):
    return "\n".join(
        f'<a href="{escape(href)}"{c.external_attrs(external)}>{mark}<span>{escape(label)}</span></a>'
        for href, mark, label, external in CONTACTS
    )


def pages():
    return [
        Page(
            "/cv/",
            "CV - Yurii Voievodin",
            "Experienced software developer with 14+ years of expertise in web and mobile apps development."
            " Proficient in Swift, modern iOS frameworks, AI-powered development tools,"
            " and implementing AI/ML features in applications.",
            layout="focus",
            template="pages/focus/cv.html",
            slots={"cv-contacts": contacts},
            og_type="profile",
            jsonld=[PERSON],
            sitemap=(0.8, "monthly"),
        ),
        Page(
            "/qa/",
            "Q&A - Yurii Voievodin",
            "Answers to common iOS and macOS engineering questions — architecture patterns, networking and data sync,"
            " security, testing and CI/CD, CoreData and Swift concurrency — drawn from 10+ production apps.",
            layout="focus",
            template="pages/focus/qa.html",
            og_type="profile",
            sitemap=(0.6, "monthly"),
        ),
        Page(
            "/security/",
            "Security & Privacy Expertise - Yurii Voievodin",
            "iOS and macOS security expertise: encryption, Keychain management, OAuth 2.0, jailbreak detection,"
            " device fingerprinting, and secure payment processing across 10+ commercial apps.",
            layout="focus",
            template="pages/focus/security.html",
            og_type="profile",
            sitemap=(0.6, "monthly"),
        ),
    ]

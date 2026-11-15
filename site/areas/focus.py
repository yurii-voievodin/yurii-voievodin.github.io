import config
from page import Page

PERSON = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": config.NAME,
    "jobTitle": "Senior iOS Engineer",
    "url": config.URL,
    "email": config.EMAIL,
    "sameAs": [config.GITHUB, config.LINKEDIN],
}


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

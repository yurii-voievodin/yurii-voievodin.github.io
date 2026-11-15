from page import Page


def project(category, slug, name, summary, url=None, sitemap=(0.5, "monthly")):
    return Page(
        url or f"/projects/{category}/{slug}/",
        f"{name} — Projects — Yurii Voievodin",
        summary,
        layout="focus",
        template=f"pages/projects/{category}/{slug}.html",
        sitemap=sitemap,
    )


def pages():
    return [
        project("commercial", "hooh", "Hooh", "Private AI workspace for documents — native SwiftUI app", "/projects/", (0.8, "monthly")),
        project(
            "personal",
            "wavefall",
            "Wavefall",
            "Hero defense game with turn-based tactical combat: a rogue AI sends robots through a portal,"
            " and you hold the arena alone. For iPhone, iPad, and Mac.",
            "/projects/personal/",
            (0.8, "monthly"),
        ),
        project("commercial", "hooh", "Hooh", "Private AI workspace for documents — native SwiftUI app"),
        project(
            "commercial",
            "vistaprint",
            "VistaPrint",
            "E-commerce iOS app for ordering custom printed products, with an integrated design editor.",
        ),
        project(
            "commercial",
            "vistacreate",
            "VistaCreate",
            "Professional design and creative content creation iOS app with thousands of templates"
            " and a full-featured editor",
        ),
        project(
            "commercial",
            "clowder",
            "Clowder",
            "White-label community and event management platform cloned and customized for 50+ organizations.",
        ),
        project(
            "commercial",
            "coachnow",
            "CoachNow",
            "Coaching and training management platform for coaches and athletes, with video, chat, and training spaces.",
        ),
        project(
            "commercial",
            "solitaire",
            "Solitaire (Classic)",
            "Competitive solitaire card game with cash-prize tournaments, head-to-head matches, and daily challenges.",
        ),
        project(
            "commercial",
            "look-up",
            "Look Up",
            "iOS shopping assistant for price comparison, receipt tracking, and shared shopping lists,"
            " built for the Saudi market.",
        ),
        project(
            "commercial",
            "proveit",
            "PROVEIT",
            "Real-money gaming platform with trivia, tournaments, and 8 skill-based arcade games — featured in TechCrunch.",
        ),
        project(
            "commercial",
            "chronograph-ios",
            "Chronograph (iOS)",
            "Pomodoro timer and task management app with cross-device sync, sharing a codebase with the macOS version.",
        ),
        project(
            "commercial",
            "chronograph-macos",
            "Chronograph (macOS)",
            "macOS counterpart of the Pomodoro timer app, sharing a codebase and Core Data schema with the iOS version.",
        ),
        project("commercial", "sumdu", "SumDU", "Schedule viewer for Sumy State University — my first published App Store app."),
        project(
            "personal",
            "wavefall",
            "Wavefall",
            "Hero defense game with turn-based tactical combat: a rogue AI sends robots through a portal,"
            " and you hold the arena alone. For iPhone, iPad, and Mac.",
        ),
        project(
            "personal",
            "head-recorder",
            "Head Recorder",
            "macOS app that records your screen and webcam together as a single video, entirely on-device.",
        ),
        project(
            "personal",
            "wisebudget",
            "WiseBudgeter",
            "macOS app for personal finance management, syncing transactions from Wise and Monobank.",
        ),
        project(
            "personal",
            "my-university",
            "My University",
            "Personal project for browsing university schedules, with favorites, sharing, and offline support.",
        ),
        project(
            "personal",
            "my-university-server",
            "My University Server",
            "Ruby on Rails backend aggregating class schedules from 34+ Ukrainian universities.",
        ),
    ]

from page import Page


def pages():
    return [
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

from html import escape

from engine import render
from page import Page

SLOTS = {
    "legal-updated": lambda page: (
        f'<p class="legal-updated">Last updated: {escape(page.vars["updated"])}</p>' if page.vars.get("updated") else ""
    ),
}

WAVEFALL_LOCALES = {
    "x-default": "/wavefall/",
    "en": "/wavefall/",
    "uk": "/wavefall/uk/",
    "ko": "/wavefall/ko/",
    "ja": "/wavefall/ja/",
    "zh-Hant": "/wavefall/zh-Hant/",
}


def wavefall(lang, og_locale, title, description):
    url = WAVEFALL_LOCALES[lang]
    template = "pages/landings/wavefall.html" if lang == "en" else f"pages/landings/wavefall-{lang}.html"
    return Page(
        url,
        title,
        description,
        layout="bare",
        template=template,
        lang=lang,
        og_locale=og_locale,
        image="/wavefall/trailer-poster.jpg?v=3",
        canonical=url,
        alternates=WAVEFALL_LOCALES,
        sitemap=(0.8 if lang == "en" else 0.7, "monthly"),
    )


def landing(url, title, description, template, image):
    return Page(url, title, description, layout="bare", template=template, image=image, sitemap=(0.8, "monthly"))


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
        wavefall(
            "en",
            "en_US",
            "Wavefall — Hero Defense & Turn-Based Tactical Combat",
            "Hero defense with turn-based tactical combat. A rogue AI sends its robots through a portal,"
            " and you hold the arena alone. Plays offline, no ads, no subscriptions. Native on iPhone, iPad, and Mac."
            " Pre-order now on the App Store, arriving December 10, 2026.",
        ),
        wavefall(
            "uk",
            "uk_UA",
            "Wavefall — оборона героя й покрокові тактичні бої",
            "Оборона героя з покроковими тактичними боями. ШІ вийшов з-під контролю й шле роботів крізь портал,"
            " а ти сам тримаєш арену. Без інтернету, реклами й підписок. Нативно на iPhone, iPad і Mac."
            " Передзамовлення вже в App Store, реліз 10 грудня 2026 року.",
        ),
        wavefall(
            "ko",
            "ko_KR",
            "Wavefall — 히어로 디펜스 & 턴제 전술 전투",
            "턴제 전술 전투의 히어로 디펜스. 통제를 벗어난 AI가 포털 너머로 로봇을 보내고, 당신은 홀로 아레나를 지킵니다."
            " 오프라인 플레이, 광고 없음, 구독 없음. iPhone, iPad, Mac에서 네이티브로 즐길 수 있습니다."
            " 지금 App Store에서 사전 주문하세요, 2026년 12월 10일 출시.",
        ),
        wavefall(
            "ja",
            "ja_JP",
            "Wavefall — ヒーローディフェンス & ターン制タクティカルバトル",
            "ターン制タクティカルバトルのヒーローディフェンス。暴走したAIがポータルからロボットを送り込み、あなたは一人でアリーナを守る。"
            "オフライン対応、広告なし、サブスクなし。iPhone、iPad、Macでネイティブに動作します。"
            "今すぐApp Storeで予約注文 — 2026年12月10日発売。",
        ),
        wavefall(
            "zh-Hant",
            "zh_TW",
            "Wavefall — 英雄防衛 & 回合制戰術戰鬥",
            "回合制戰術戰鬥的英雄防衛遊戲。失控的 AI 透過傳送門派出機器人，你獨自守住競技場。"
            "可離線遊玩，沒有廣告，沒有訂閱。原生支援 iPhone、iPad 與 Mac。"
            "立即在 App Store 預購，2026 年 12 月 10 日推出。",
        ),
        landing(
            "/wisebudget/",
            "WiseBudget — Your Financial Dashboard for Mac",
            "Track expenses and income across multiple currencies, sync transactions from Wise and Monobank,"
            " plan monthly budgets per category, and visualize spending with charts and analytics."
            " Your data stays on your device.",
            "pages/landings/wisebudget.html",
            "/wisebudget/screenshots/dashboard.png",
        ),
        landing(
            "/headrecorder/",
            "Head Recorder — Screen + Webcam, Recorded Together",
            "Record your screen and webcam together in one take. Head Recorder composites your camera"
            " as a customizable bubble over your screen recording — resize it, move it to any corner, mirror it,"
            " pick circle or rectangle — and saves a single video, entirely on your Mac.",
            "pages/landings/headrecorder.html",
            "/headrecorder/screenshots/mac-screen-webcam.png",
        ),
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
        legal_page(
            "/wavefall-support/",
            "Wavefall — Support",
            "Support for Wavefall, a top-down exploration and survival game for iPhone, iPad, and Mac."
            " Contact us for bug reports, questions, or feedback.",
            "Wavefall",
            "/wavefall/",
            "Support",
            "pages/landings/wavefall-support.html",
        ),
        legal_page(
            "/wisebudget-privacy/",
            "WiseBudget — Privacy Policy",
            "Privacy policy for WiseBudget, a personal finance app for macOS."
            " Your financial data stays on your device and is never collected, sold, or shared.",
            "WiseBudget",
            "/wisebudget/",
            "Privacy Policy",
            "pages/landings/wisebudget-privacy.html",
            updated="April 2, 2026",
        ),
        legal_page(
            "/headrecorder-privacy/",
            "Head Recorder — Privacy Policy",
            "Privacy policy for Head Recorder, a macOS screen and webcam recording app"
            " that processes everything locally and collects no data.",
            "Head Recorder",
            "/headrecorder/",
            "Privacy Policy",
            "pages/landings/headrecorder-privacy.html",
            updated="July 31, 2026",
        ),
        legal_page(
            "/headrecorder-support/",
            "Head Recorder — Support",
            "Support for Head Recorder, a macOS app that records your screen and webcam together as one video."
            " Contact us for bug reports, questions, or feedback.",
            "Head Recorder",
            "/headrecorder/",
            "Support",
            "pages/landings/headrecorder-support.html",
        ),
    ]

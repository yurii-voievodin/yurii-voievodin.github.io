import { Smartphone, Pickaxe, Swords, Bot, DoorOpen, Shield, type IconComponent } from '@/components/icons';

export type Locale = 'en' | 'ko' | 'ja';

export const LOCALES: Locale[] = ['en', 'ko', 'ja'];

export const RELEASE_DATE_ISO = '2026-12-10';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6758512309';
export const PLATFORMS = ['iPhone', 'iPad', 'Mac'];

export const FEATURE_ICONS: IconComponent[] = [Pickaxe, Swords, Bot, DoorOpen, Shield, Smartphone];

export interface DustDriftFeature {
    title: string;
    body: string;
}

export interface DustDriftContent {
    locale: Locale;
    htmlLang: string;
    ogLocale: string;
    localeLabel: string;
    metaTitle: string;
    metaDescription: string;
    heroTagline: string;
    heroDescription: string;
    preOrderLine: string;
    platformsNote: string;
    trailerHeading: string;
    trailerAria: string;
    trailerAlt: string;
    featuresHeading: string;
    features: DustDriftFeature[];
    screenshotsHeading: string;
    footerHeading: string;
    footerBody: string;
    supportLabel: string;
    privacyLabel: string;
    appStoreAria: string;
    appStoreAlt: string;
}

export const dustdriftContent: Record<Locale, DustDriftContent> = {
    en: {
        locale: 'en',
        htmlLang: 'en',
        ogLocale: 'en_US',
        localeLabel: 'English',
        metaTitle: 'DustDrift — Explore, Mine, Craft, Survive',
        metaDescription:
            "Stranded on an alien world, mine resources, craft gear, and fight back against hostile robots across four connected biomes. DustDrift is a procedurally rendered exploration and survival game, native on iPhone, iPad, and Mac. Pre-order now on the App Store, arriving December 10, 2026.",
        heroTagline: 'Explore, Mine, Craft, Survive',
        heroDescription:
            "Inspired by No Man's Sky, made for iPhone and iPad. Stranded on an alien world, you're the last line between survival and the void. Mine resources, craft your way to better gear, and fight back — or make friends with the enemy.",
        preOrderLine: 'Pre-order now — arriving {date} on iPhone, iPad, and Mac',
        platformsNote: 'Requires iOS or iPadOS 16.0 or later, or macOS 13.0 or later',
        trailerHeading: 'Gameplay Trailer',
        trailerAria: 'Play DustDrift gameplay trailer',
        trailerAlt: 'DustDrift gameplay — the astronaut beside the docked space shuttle',
        featuresHeading: 'Key Features',
        features: [
            {
                title: 'Mine & Craft',
                body: 'Mine resources out of destructible rock formations and craft better tools, weapons, and upgrades at crafting stations and your 3D printer.',
            },
            {
                title: 'Four Combat Tools',
                body: 'Arm yourself with a blaster, heavy rifle, gravity gun, or cutter — each with its own playstyle — and fight off hostile robots.',
            },
            {
                title: 'Hostile Robots',
                body: 'Skittering RoboSpiders, heavy Brawlers, and watchful Sentinels patrol the surface — stay armed, or turn one into an ally.',
            },
            {
                title: 'Portals to New Worlds',
                body: 'Step through portals to reach entirely different biomes, each with its own docked ship to call home.',
            },
            {
                title: 'Fully Offline',
                body: 'No accounts, no ads, no in-app purchases — everything runs and saves locally on your device.',
            },
            {
                title: 'Native Everywhere',
                body: 'Built from the ground up for touch and mouse alike — the same core game runs natively on iPhone, iPad, and Mac.',
            },
        ],
        screenshotsHeading: 'Screenshots',
        footerHeading: 'Pre-order DustDrift',
        footerBody: 'Arriving {date} on iPhone, iPad, and Mac.',
        supportLabel: 'Support',
        privacyLabel: 'Privacy Policy',
        appStoreAria: 'Pre-order DustDrift on the App Store',
        appStoreAlt: 'Download on the App Store',
    },
    ko: {
        locale: 'ko',
        htmlLang: 'ko',
        ogLocale: 'ko_KR',
        localeLabel: '한국어',
        metaTitle: 'DustDrift — 탐험, 채굴, 제작, 생존',
        metaDescription:
            '낯선 외계 행성에 홀로 남겨져 자원을 채굴하고 장비를 제작하며, 네 개로 연결된 바이옴에서 적대적인 로봇에 맞서 싸우세요. DustDrift는 절차적으로 렌더링된 탐험 및 생존 게임으로 iPhone, iPad, Mac에서 네이티브로 즐길 수 있습니다. 지금 App Store에서 사전 주문하세요, 2026년 12월 10일 출시.',
        heroTagline: '탐험 · 채굴 · 제작 · 생존',
        heroDescription:
            "『노 맨즈 스카이』에서 영감을 받아 iPhone과 iPad를 위해 만든 게임. 낯선 외계 행성에 홀로 남겨진 당신은 생존과 공허 사이의 마지막 방어선입니다. 자원을 채굴하고 더 나은 장비를 제작하며 맞서 싸우세요 — 혹은 적과 친구가 되어보세요.",
        preOrderLine: '지금 사전 주문하세요 — {date} iPhone, iPad, Mac에 출시',
        platformsNote: 'iOS 또는 iPadOS 16.0 이상, 또는 macOS 13.0 이상 필요',
        trailerHeading: '게임플레이 트레일러',
        trailerAria: 'DustDrift 게임플레이 트레일러 재생',
        trailerAlt: 'DustDrift 게임플레이 — 정박된 우주왕복선 옆에 선 우주비행사',
        featuresHeading: '주요 기능',
        features: [
            {
                title: '채굴 & 제작',
                body: '파괴 가능한 암석 지형에서 자원을 채굴하고, 제작대와 3D 프린터에서 더 나은 도구, 무기, 업그레이드를 만드세요.',
            },
            {
                title: '네 가지 전투 도구',
                body: '블래스터, 헤비 라이플, 중력총, 커터 — 저마다 다른 플레이 스타일을 지닌 무기로 무장하고 적대적인 로봇에 맞서세요.',
            },
            {
                title: '적대적인 로봇',
                body: '재빠른 로보스파이더, 육중한 브롤러, 감시하는 센티널이 지표면을 순찰합니다 — 무장을 갖추거나, 로봇을 아군으로 만드세요.',
            },
            {
                title: '새로운 세계로 통하는 포털',
                body: '포털을 통과해 완전히 다른 바이옴으로 이동하세요. 각 바이옴에는 거점이 되어줄 정박된 우주선이 있습니다.',
            },
            {
                title: '완전 오프라인',
                body: '계정도, 광고도, 인앱 구매도 없습니다 — 모든 것이 기기에서 로컬로 실행되고 저장됩니다.',
            },
            {
                title: '모든 기기에서 네이티브로',
                body: '터치와 마우스 모두를 위해 처음부터 설계되었습니다 — 동일한 핵심 게임이 iPhone, iPad, Mac에서 네이티브로 실행됩니다.',
            },
        ],
        screenshotsHeading: '스크린샷',
        footerHeading: 'DustDrift 사전 주문',
        footerBody: '{date} iPhone, iPad, Mac에 출시됩니다.',
        supportLabel: '지원',
        privacyLabel: '개인정보 처리방침',
        appStoreAria: 'App Store에서 DustDrift 사전 주문하기',
        appStoreAlt: 'App Store에서 다운로드',
    },
    ja: {
        locale: 'ja',
        htmlLang: 'ja',
        ogLocale: 'ja_JP',
        localeLabel: '日本語',
        metaTitle: 'DustDrift — 探索・採掘・製作・生存',
        metaDescription:
            '見知らぬ惑星に取り残され、資源を採掘し、装備を製作し、4つの連結したバイオームで敵対的なロボットと戦おう。DustDriftは手続き型レンダリングによる探索・サバイバルゲームで、iPhone、iPad、Macでネイティブに動作します。今すぐApp Storeで予約注文 — 2026年12月10日発売。',
        heroTagline: '探索・採掘・製作・生存',
        heroDescription:
            "『ノーマンズスカイ』にインスパイアされた、iPhoneとiPad向けのゲーム。見知らぬ惑星に取り残されたあなたは、生存と虚無を隔てる最後の砦。資源を採掘し、より良い装備を製作して立ち向かおう — あるいは敵と友になろう。",
        preOrderLine: '予約注文受付中 — {date}にiPhone、iPad、Macで発売',
        platformsNote: 'iOSまたはiPadOS 16.0以降、またはmacOS 13.0以降が必要です',
        trailerHeading: 'ゲームプレイトレーラー',
        trailerAria: 'DustDriftのゲームプレイトレーラーを再生',
        trailerAlt: 'DustDriftのゲームプレイ — 停泊中のスペースシャトルのそばに立つ宇宙飛行士',
        featuresHeading: '主な特徴',
        features: [
            {
                title: '採掘 & 製作',
                body: '破壊可能な岩石地形から資源を採掘し、製作ステーションや3Dプリンターでより良い道具、武器、アップグレードを作ろう。',
            },
            {
                title: '4種類の戦闘装備',
                body: 'ブラスター、ヘビーライフル、グラビティガン、カッター — それぞれ異なるプレイスタイルを持つ武器で武装し、敵対的なロボットと戦おう。',
            },
            {
                title: '敵対的なロボット',
                body: 'すばしっこいロボスパイダー、重量級のブロウラー、監視するセンチネルが地表を巡回している — 武装するか、仲間に引き入れよう。',
            },
            {
                title: '新たな世界へのポータル',
                body: 'ポータルをくぐり抜け、まったく異なるバイオームへ。それぞれのバイオームには拠点となる停泊中の宇宙船がある。',
            },
            {
                title: '完全オフライン',
                body: 'アカウントも広告もアプリ内課金もなし — すべてがデバイス上でローカルに動作し、保存される。',
            },
            {
                title: 'あらゆる端末でネイティブに',
                body: 'タッチとマウスの両方に対応するよう一から設計 — 同じコアゲームがiPhone、iPad、Macでネイティブに動作する。',
            },
        ],
        screenshotsHeading: 'スクリーンショット',
        footerHeading: 'DustDriftを予約注文',
        footerBody: '{date}にiPhone、iPad、Macで発売。',
        supportLabel: 'サポート',
        privacyLabel: 'プライバシーポリシー',
        appStoreAria: 'App StoreでDustDriftを予約注文',
        appStoreAlt: 'App Storeからダウンロード',
    },
};

export const RELEASE_DATE_LABEL: Record<Locale, string> = {
    en: 'December 10, 2026',
    ko: '2026년 12월 10일',
    ja: '2026年12月10日',
};

export function formatWithReleaseDate(template: string, locale: Locale): string {
    return template.replace('{date}', RELEASE_DATE_LABEL[locale]);
}

export const DUSTDRIFT_PATHS: Record<Locale, string> = {
    en: '/dustdrift',
    ko: '/dustdrift/ko',
    ja: '/dustdrift/ja',
};

export type Locale = 'en' | 'uk' | 'ko' | 'ja';

export const LOCALES: Locale[] = ['en', 'uk', 'ko', 'ja'];

export const RELEASE_DATE_ISO = '2026-12-10';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6758512309';
export const PLATFORMS = ['iPhone', 'iPad', 'Mac'];

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
    tourHeading: string;
    tour: DustDriftFeature[];
    perks: string[];
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
        metaTitle: 'DustDrift — Space Exploration & Turn-Based Tactical Combat',
        metaDescription:
            'Land on alien planets, explore them freely, and outthink hostile robots in classic turn-based tactical combat. Mine, craft and upgrade your gear across worlds linked by portals. Native on iPhone, iPad, and Mac. Pre-order now on the App Store, arriving December 10, 2026.',
        heroTagline: 'Space Exploration · Turn-Based Tactical Combat',
        heroDescription:
            'Land on alien planets and explore them freely — deserts, caves, flooded worlds and more, linked by portals. When hostile robots find you, the game shifts into classic turn-based tactics: cover, flanking, high ground, and every shot planned.',
        preOrderLine: 'Pre-order now — arriving {date} on iPhone, iPad, and Mac',
        platformsNote: 'Requires iOS or iPadOS 16.0 or later, or macOS 13.0 or later',
        trailerHeading: 'Gameplay Trailer',
        trailerAria: 'Play DustDrift gameplay trailer',
        trailerAlt: 'DustDrift gameplay — turn-based fight against a Sentinel in the dark',
        tourHeading: 'A Closer Look',
        tour: [
            {
                title: 'Classic Turn-Based Tactics',
                body: 'When a fight starts, the world snaps to a grid. You and the machines take turns: duck behind cover, flank enemies caught in the open and take the high ground. Every shot shows its hit chance, damage and crit odds up front.',
            },
            {
                title: 'Outthink Hostile Robots',
                body: 'Skittering RoboSpiders, heavy Brawlers and watchful Sentinels patrol every world. Pick your weapon — blaster, heavy rifle, gravity grenades or the cutter — and make every move count.',
            },
            {
                title: 'Land on Alien Worlds',
                body: 'Step off your shuttle onto a wind-scoured desert and explore at your own pace. No turns, no timers — just you, the surface and whatever is waiting out there.',
            },
            {
                title: 'Descend Into the Dark',
                body: 'Beneath the desert lie lamp-lit caves full of ore, hazards and things that would rather not be found.',
            },
            {
                title: 'Portals to New Worlds',
                body: 'Walk through portals to frozen ice fields, flooded water worlds and the jagged Shardlands — each with its own docked ship to call home.',
            },
            {
                title: 'Every World Is Different',
                body: 'Each biome brings its own terrain, resources and dangers, from lush alien wetlands to barren rock.',
            },
            {
                title: 'Mine, Craft, Upgrade',
                body: "Break ore out of rock, haul it aboard and turn it into better tools, weapons and upgrades at crafting stations and your ship's 3D printer.",
            },
        ],
        perks: ['Fully offline', 'No accounts', 'No ads', 'No in-app purchases'],
        footerHeading: 'Pre-order DustDrift',
        footerBody: 'Arriving {date} on iPhone, iPad, and Mac.',
        supportLabel: 'Support',
        privacyLabel: 'Privacy Policy',
        appStoreAria: 'Pre-order DustDrift on the App Store',
        appStoreAlt: 'Download on the App Store',
    },
    uk: {
        locale: 'uk',
        htmlLang: 'uk',
        ogLocale: 'uk_UA',
        localeLabel: 'Українська',
        metaTitle: 'DustDrift — дослідження космосу й покрокові тактичні бої',
        metaDescription:
            'Висаджуйся на чужі планети, вільно досліджуй їх і перехитри ворожих роботів у класичних покрокових тактичних боях. Видобувай, крафти й покращуй спорядження у світах, поєднаних порталами. Нативно на iPhone, iPad і Mac. Передзамовлення вже в App Store, реліз 10 грудня 2026 року.',
        heroTagline: 'Дослідження космосу · Покрокові тактичні бої',
        heroDescription:
            'Висаджуйся на чужі планети й досліджуй їх вільно — пустелі, печери, затоплені світи та інші, поєднані порталами. Коли тебе помітять ворожі роботи, гра переходить у класичну покрокову тактику: укриття, фланги, висота й кожен продуманий постріл.',
        preOrderLine: 'Передзамовлення відкрите — реліз {date} на iPhone, iPad і Mac',
        platformsNote: 'Потрібна iOS або iPadOS 16.0 чи новіша, або macOS 13.0 чи новіша',
        trailerHeading: 'Геймплейний трейлер',
        trailerAria: 'Відтворити геймплейний трейлер DustDrift',
        trailerAlt: 'Геймплей DustDrift — покроковий бій із Sentinel у темряві',
        tourHeading: 'Детальніше',
        tour: [
            {
                title: 'Класична покрокова тактика',
                body: 'Щойно починається бій, світ перетворюється на сітку. Ви з машинами ходите по черзі: ховайся за укриття, заходь із флангу до ворогів на відкритому місці й займай висоту. Шанс влучання, шкоду й імовірність крита видно ще до пострілу.',
            },
            {
                title: 'Перехитри ворожих роботів',
                body: 'Прудкі RoboSpider, важкі Brawler і пильні Sentinel патрулюють кожен світ. Обирай зброю — бластер, важку гвинтівку, гравітаційні гранати чи різак — і нехай кожен хід має значення.',
            },
            {
                title: 'Висадка на чужі світи',
                body: 'Зійди з шатла на обвітрену пустелю й досліджуй у власному темпі. Жодних ходів і таймерів — лише ти, поверхня й те, що чекає десь там.',
            },
            {
                title: 'Спуск у темряву',
                body: 'Під пустелею ховаються печери, освітлені лампами, повні руди, небезпек і того, що не хоче, щоб його знайшли.',
            },
            {
                title: 'Портали в нові світи',
                body: 'Проходь крізь портали до крижаних полів, затоплених водних світів і гострих Уламкових земель — у кожному на тебе чекає пришвартований корабель.',
            },
            {
                title: 'Кожен світ інший',
                body: 'Кожен біом має власний рельєф, ресурси й небезпеки — від буйних інопланетних боліт до голих скель.',
            },
            {
                title: 'Видобувай, крафти, покращуй',
                body: 'Вибивай руду зі скель, неси її на борт і перетворюй на кращі інструменти, зброю та покращення на крафтових станціях і 3D-принтері корабля.',
            },
        ],
        perks: ['Повністю офлайн', 'Без акаунтів', 'Без реклами', 'Без вбудованих покупок'],
        footerHeading: 'Передзамов DustDrift',
        footerBody: 'Реліз {date} на iPhone, iPad і Mac.',
        supportLabel: 'Підтримка',
        privacyLabel: 'Політика конфіденційності',
        appStoreAria: 'Передзамовити DustDrift в App Store',
        appStoreAlt: 'Завантажити в App Store',
    },
    ko: {
        locale: 'ko',
        htmlLang: 'ko',
        ogLocale: 'ko_KR',
        localeLabel: '한국어',
        metaTitle: 'DustDrift — 우주 탐험 & 턴제 전술 전투',
        metaDescription:
            '외계 행성에 착륙해 자유롭게 탐험하고, 정통 턴제 전술 전투로 적대적인 로봇을 제압하세요. 포털로 연결된 세계에서 채굴하고 제작하며 장비를 강화하세요. iPhone, iPad, Mac에서 네이티브로 즐길 수 있습니다. 지금 App Store에서 사전 주문하세요, 2026년 12월 10일 출시.',
        heroTagline: '우주 탐험 · 턴제 전술 전투',
        heroDescription:
            '외계 행성에 착륙해 자유롭게 탐험하세요 — 사막, 동굴, 물에 잠긴 세계까지 포털로 연결되어 있습니다. 적대적인 로봇에게 발각되면 게임은 정통 턴제 전술로 전환됩니다: 엄폐, 측면 공격, 고지대, 그리고 계획된 한 발 한 발.',
        preOrderLine: '지금 사전 주문하세요 — {date} iPhone, iPad, Mac에 출시',
        platformsNote: 'iOS 또는 iPadOS 16.0 이상, 또는 macOS 13.0 이상 필요',
        trailerHeading: '게임플레이 트레일러',
        trailerAria: 'DustDrift 게임플레이 트레일러 재생',
        trailerAlt: 'DustDrift 게임플레이 — 어둠 속 센티널과의 턴제 전투',
        tourHeading: '자세히 살펴보기',
        tour: [
            {
                title: '정통 턴제 전술',
                body: '전투가 시작되면 세계가 격자로 바뀝니다. 당신과 기계는 번갈아 움직입니다: 엄폐물 뒤에 숨고, 노출된 적의 측면을 찌르고, 고지대를 차지하세요. 모든 사격은 명중률, 피해량, 치명타 확률이 미리 표시됩니다.',
            },
            {
                title: '적대적인 로봇을 제압하라',
                body: '재빠른 로보스파이더, 육중한 브롤러, 감시하는 센티널이 모든 세계를 순찰합니다. 블래스터, 헤비 라이플, 중력 수류탄, 커터 중에서 무기를 고르고 모든 한 수를 의미 있게 만드세요.',
            },
            {
                title: '외계 세계에 착륙하라',
                body: '셔틀에서 내려 바람에 깎인 사막을 원하는 속도로 탐험하세요. 턴도, 제한 시간도 없습니다 — 당신과 지표, 그리고 그곳에서 기다리는 무언가뿐입니다.',
            },
            {
                title: '어둠 속으로',
                body: '사막 아래에는 램프가 밝히는 동굴이 있습니다. 광석과 위험, 그리고 발견되고 싶지 않은 것들로 가득합니다.',
            },
            {
                title: '새로운 세계로 통하는 포털',
                body: '포털을 지나 얼어붙은 빙원, 물에 잠긴 수중 세계, 날카로운 샤드랜드로 향하세요. 각 세계에는 보금자리가 될 정박한 우주선이 있습니다.',
            },
            {
                title: '세계마다 다른 풍경',
                body: '무성한 외계 습지부터 황량한 바위 지대까지, 바이옴마다 고유한 지형, 자원, 위험이 있습니다.',
            },
            {
                title: '채굴, 제작, 강화',
                body: '바위에서 광석을 캐내 우주선으로 옮기고, 제작 스테이션과 우주선의 3D 프린터에서 더 나은 도구, 무기, 업그레이드로 바꾸세요.',
            },
        ],
        perks: ['완전 오프라인', '계정 불필요', '광고 없음', '인앱 구매 없음'],
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
        metaTitle: 'DustDrift — 宇宙探索 & ターン制タクティカルバトル',
        metaDescription:
            '異星に降り立って自由に探索し、王道のターン制タクティカルバトルで敵対ロボットを出し抜こう。ポータルでつながる世界で採掘・クラフト・装備強化。iPhone、iPad、Macでネイティブに動作します。今すぐApp Storeで予約注文 — 2026年12月10日発売。',
        heroTagline: '宇宙探索 · ターン制タクティカルバトル',
        heroDescription:
            '異星に降り立ち、自由に探索しよう — 砂漠、洞窟、水没した世界まで、ポータルでつながっている。敵対ロボットに見つかれば、ゲームは王道のターン制タクティクスへ：遮蔽、側面攻撃、高所、そして計算された一発一発。',
        preOrderLine: '予約注文受付中 — {date}にiPhone、iPad、Macで発売',
        platformsNote: 'iOSまたはiPadOS 16.0以降、またはmacOS 13.0以降が必要です',
        trailerHeading: 'ゲームプレイトレーラー',
        trailerAria: 'DustDriftのゲームプレイトレーラーを再生',
        trailerAlt: 'DustDriftのゲームプレイ — 暗闇でのセンチネルとのターン制バトル',
        tourHeading: '詳しく見る',
        tour: [
            {
                title: '王道のターン制タクティクス',
                body: '戦闘が始まると世界はグリッドに切り替わる。あなたと機械は交互に行動：遮蔽物に身を隠し、無防備な敵の側面を突き、高所を取れ。すべての射撃は命中率、ダメージ、クリティカル率が事前に表示される。',
            },
            {
                title: '敵対ロボットを出し抜け',
                body: 'すばしっこいロボスパイダー、重量級のブロウラー、監視するセンチネルがあらゆる世界を巡回している。ブラスター、ヘビーライフル、グラビティグレネード、カッターから武器を選び、一手一手を無駄にするな。',
            },
            {
                title: '異星に降り立つ',
                body: 'シャトルを降りれば、風に削られた砂漠。自分のペースで探索しよう。ターンも制限時間もない — あるのはあなたと地表、そしてその先で待つ何かだけ。',
            },
            {
                title: '闇の奥へ',
                body: '砂漠の下には、ランプに照らされた洞窟が広がる。鉱石、危険、そして見つかりたくない何かで満ちている。',
            },
            {
                title: '新たな世界へのポータル',
                body: 'ポータルを抜けて、凍てつく氷原、水没した水の世界、鋭く暗いシャードランドへ。どの世界にも拠点となる停泊中の宇宙船がある。',
            },
            {
                title: '世界ごとに違う景色',
                body: '緑豊かな異星の湿地から荒涼とした岩場まで、バイオームごとに独自の地形、資源、危険がある。',
            },
            {
                title: '採掘・クラフト・強化',
                body: '岩から鉱石を砕き出して船へ運び、クラフトステーションと船の3Dプリンターで、より良いツール、武器、アップグレードに変えよう。',
            },
        ],
        perks: ['完全オフライン', 'アカウント不要', '広告なし', 'アプリ内課金なし'],
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
    uk: '10 грудня 2026 року',
    ko: '2026년 12월 10일',
    ja: '2026年12月10日',
};

export function formatWithReleaseDate(template: string, locale: Locale): string {
    return template.replace('{date}', RELEASE_DATE_LABEL[locale]);
}

export const DUSTDRIFT_PATHS: Record<Locale, string> = {
    en: '/dustdrift',
    uk: '/dustdrift/uk',
    ko: '/dustdrift/ko',
    ja: '/dustdrift/ja',
};

export type Locale = 'en' | 'uk' | 'ko' | 'ja' | 'zh-Hant';

export const LOCALES: Locale[] = ['en', 'uk', 'ko', 'ja', 'zh-Hant'];

export const RELEASE_DATE_ISO = '2026-12-10';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6758512309';
export const PLATFORMS = ['iPhone', 'iPad', 'Mac'];

export interface WavefallFeature {
    title: string;
    body: string;
}

export interface WavefallContent {
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
    tour: WavefallFeature[];
    perks: string[];
    footerHeading: string;
    footerBody: string;
    supportLabel: string;
    privacyLabel: string;
    appStoreAria: string;
    appStoreAlt: string;
}

export const wavefallContent: Record<Locale, WavefallContent> = {
    en: {
        locale: 'en',
        htmlLang: 'en',
        ogLocale: 'en_US',
        localeLabel: 'English',
        metaTitle: 'Wavefall — Hero Defense & Turn-Based Tactical Combat',
        metaDescription:
            'Hero defense with turn-based tactical combat. A rogue AI sends its robots through a portal, and you hold the arena alone. Plays offline, no ads, no subscriptions. Native on iPhone, iPad, and Mac. Pre-order now on the App Store, arriving December 10, 2026.',
        heroTagline: 'Hero Defense · Turn-Based Tactical Combat',
        heroDescription:
            'An AI has grown too strong and slipped out of control. It commands an army of robots and sends them through a portal in waves. You\'re alone in the arena. Stop the AI and restore the balance.',
        preOrderLine: 'Pre-order now — arriving {date} on iPhone, iPad, and Mac',
        platformsNote: 'Requires iOS or iPadOS 16.0 or later, or macOS 13.0 or later',
        trailerHeading: 'Gameplay Trailer',
        trailerAria: 'Play Wavefall gameplay trailer',
        trailerAlt: 'Wavefall gameplay — a turn-based fight against a shielded Sentinel in the arena',
        tourHeading: 'A Closer Look',
        tour: [
            {
                title: 'Hold the arena',
                body: 'Robots come through the portal in waves, and every fight is turn-based. You choose where to stand, which rock to hide behind and when to shoot.',
            },
            {
                title: 'More robots every round',
                body: 'Robo-Spiders come in numbers. Sentinels shoot from range and fall back to cover. Some carry a shield, some a spider.',
            },
            {
                title: 'Four maps',
                body: 'The Arena, the Dock, the Caves and the Ice. Each one brings new enemies.',
            },
            {
                title: 'A minute between rounds',
                body: 'Before the portal opens again, mine resources from the rocks around the arena.',
            },
            {
                title: 'The 3D printer',
                body: 'Turn resources into a new weapon: a heavy rifle, a gravity gun, a cyber cutter, or a chip that brings an enemy over to your side.',
            },
            {
                title: 'The Spider Tank',
                body: 'Every cleared map opens the portal for you and brings you closer to where the robots come from. The Spider Tank waits on the last one.',
            },
        ],
        perks: ['Fully offline', 'No accounts', 'No ads', 'No subscriptions'],
        footerHeading: 'Pre-order Wavefall',
        footerBody: 'Arriving {date} on iPhone, iPad, and Mac.',
        supportLabel: 'Support',
        privacyLabel: 'Privacy Policy',
        appStoreAria: 'Pre-order Wavefall on the App Store',
        appStoreAlt: 'Download on the App Store',
    },
    uk: {
        locale: 'uk',
        htmlLang: 'uk',
        ogLocale: 'uk_UA',
        localeLabel: 'Українська',
        metaTitle: 'Wavefall — оборона героя й покрокові тактичні бої',
        metaDescription:
            'Оборона героя з покроковими тактичними боями. ШІ вийшов з-під контролю й шле роботів крізь портал, а ти сам тримаєш арену. Без інтернету, реклами й підписок. Нативно на iPhone, iPad і Mac. Передзамовлення вже в App Store, реліз 10 грудня 2026 року.',
        heroTagline: 'Оборона героя · Покрокові тактичні бої',
        heroDescription:
            'Штучний інтелект став надто сильним і вийшов з-під контролю. Він керує армією роботів і шле їх крізь портал хвилями. На арені ти сам. Зупини ШІ й поверни рівновагу.',
        preOrderLine: 'Передзамовлення відкрите — реліз {date} на iPhone, iPad і Mac',
        platformsNote: 'Потрібна iOS або iPadOS 16.0 чи новіша, або macOS 13.0 чи новіша',
        trailerHeading: 'Геймплейний трейлер',
        trailerAria: 'Відтворити геймплейний трейлер Wavefall',
        trailerAlt: 'Геймплей Wavefall — покроковий бій із Sentinel у щиті на арені',
        tourHeading: 'Детальніше',
        tour: [
            {
                title: 'Утримай арену',
                body: 'Роботи приходять крізь портал хвилями, і кожен бій покроковий. Ти вирішуєш, куди стати, за яким каменем сховатися і коли стріляти.',
            },
            {
                title: 'Щораунду роботів більшає',
                body: 'Робопавуки беруть кількістю. Вартові стріляють здалеку й відходять за укриття. Одні несуть щит, інші — павука.',
            },
            {
                title: 'Чотири карти',
                body: 'Арена, Док, Печери й Лід. На кожній — нові вороги.',
            },
            {
                title: 'Хвилина між раундами',
                body: 'Доки портал не відкриється знову, видобудь ресурси з каменів навколо арени.',
            },
            {
                title: '3D-принтер',
                body: 'Перетвори ресурси на нову зброю: важку чи гравітаційну рушницю, кібер-різак або чіп, що переводить ворога на твій бік.',
            },
            {
                title: 'Павук-танк',
                body: 'Кожна пройдена карта відкриває тобі портал і наближає до місця, звідки приходять роботи. На останній карті чекає павук-танк.',
            },
        ],
        perks: ['Повністю офлайн', 'Без акаунтів', 'Без реклами', 'Без підписок'],
        footerHeading: 'Передзамов Wavefall',
        footerBody: 'Реліз {date} на iPhone, iPad і Mac.',
        supportLabel: 'Підтримка',
        privacyLabel: 'Політика конфіденційності',
        appStoreAria: 'Передзамовити Wavefall в App Store',
        appStoreAlt: 'Завантажити в App Store',
    },
    ko: {
        locale: 'ko',
        htmlLang: 'ko',
        ogLocale: 'ko_KR',
        localeLabel: '한국어',
        metaTitle: 'Wavefall — 히어로 디펜스 & 턴제 전술 전투',
        metaDescription:
            '턴제 전술 전투의 히어로 디펜스. 통제를 벗어난 AI가 포털 너머로 로봇을 보내고, 당신은 홀로 아레나를 지킵니다. 오프라인 플레이, 광고 없음, 구독 없음. iPhone, iPad, Mac에서 네이티브로 즐길 수 있습니다. 지금 App Store에서 사전 주문하세요, 2026년 12월 10일 출시.',
        heroTagline: '히어로 디펜스 · 턴제 전술 전투',
        heroDescription:
            '너무 강해진 AI가 통제를 벗어났습니다. AI는 로봇 군대를 조종해 포털 너머로 웨이브마다 보내옵니다. 아레나에는 당신 혼자뿐입니다. AI를 막고 균형을 되찾으세요.',
        preOrderLine: '지금 사전 주문하세요 — {date} iPhone, iPad, Mac에 출시',
        platformsNote: 'iOS 또는 iPadOS 16.0 이상, 또는 macOS 13.0 이상 필요',
        trailerHeading: '게임플레이 트레일러',
        trailerAria: 'Wavefall 게임플레이 트레일러 재생',
        trailerAlt: 'Wavefall 게임플레이 — 아레나에서 보호막을 두른 센티널과의 턴제 전투',
        tourHeading: '자세히 살펴보기',
        tour: [
            {
                title: '아레나를 지키세요',
                body: '로봇이 포털을 통해 웨이브로 몰려오고, 모든 전투는 턴제입니다. 어디에 설지, 어느 바위 뒤에 숨을지, 언제 쏠지는 당신이 정합니다.',
            },
            {
                title: '라운드마다 늘어나는 로봇',
                body: '로보 스파이더는 숫자로 밀어붙이고, 센티널은 멀리서 쏜 뒤 엄폐물 뒤로 물러납니다. 방어막을 두른 센티널도, 스파이더를 태운 센티널도 있습니다.',
            },
            {
                title: '네 개의 맵',
                body: '아레나, 도크, 동굴, 빙원. 맵마다 새로운 적이 등장합니다.',
            },
            {
                title: '라운드 사이의 1분',
                body: '포털이 다시 열리기 전에 아레나 주변 바위에서 자원을 캐세요.',
            },
            {
                title: '3D 프린터',
                body: '자원으로 새 무기를 만드세요. 헤비 라이플, 중력총, 사이버 커터, 그리고 적을 아군으로 돌리는 칩.',
            },
            {
                title: '스파이더 탱크',
                body: '맵을 클리어할 때마다 포털이 열리고, 로봇이 오는 곳에 한 걸음 더 다가갑니다. 마지막 맵에서는 스파이더 탱크가 기다립니다.',
            },
        ],
        perks: ['완전 오프라인', '계정 불필요', '광고 없음', '구독 없음'],
        footerHeading: 'Wavefall 사전 주문',
        footerBody: '{date} iPhone, iPad, Mac에 출시됩니다.',
        supportLabel: '지원',
        privacyLabel: '개인정보 처리방침',
        appStoreAria: 'App Store에서 Wavefall 사전 주문하기',
        appStoreAlt: 'App Store에서 다운로드',
    },
    ja: {
        locale: 'ja',
        htmlLang: 'ja',
        ogLocale: 'ja_JP',
        localeLabel: '日本語',
        metaTitle: 'Wavefall — ヒーローディフェンス & ターン制タクティカルバトル',
        metaDescription:
            'ターン制タクティカルバトルのヒーローディフェンス。暴走したAIがポータルからロボットを送り込み、あなたは一人でアリーナを守る。オフライン対応、広告なし、サブスクなし。iPhone、iPad、Macでネイティブに動作します。今すぐApp Storeで予約注文 — 2026年12月10日発売。',
        heroTagline: 'ヒーローディフェンス · ターン制タクティカルバトル',
        heroDescription:
            '強くなりすぎたAIが制御を離れた。AIはロボットの軍勢を操り、ポータルから次々と送り込んでくる。アリーナにいるのはあなた一人。AIを止め、均衡を取り戻せ。',
        preOrderLine: '予約注文受付中 — {date}にiPhone、iPad、Macで発売',
        platformsNote: 'iOSまたはiPadOS 16.0以降、またはmacOS 13.0以降が必要です',
        trailerHeading: 'ゲームプレイトレーラー',
        trailerAria: 'Wavefallのゲームプレイトレーラーを再生',
        trailerAlt: 'Wavefallのゲームプレイ — アリーナでシールド付きセンチネルとターン制バトル',
        tourHeading: '詳しく見る',
        tour: [
            {
                title: 'アリーナを守り抜け',
                body: 'ロボットはポータルからウェーブで押し寄せ、戦いはすべてターン制。どこに立ち、どの岩に身を隠し、いつ撃つかはあなたが決める。',
            },
            {
                title: 'ラウンドごとに増えるロボット',
                body: 'ロボスパイダーは数で押し寄せ、センチネルは遠くから撃っては遮蔽物の陰へ下がる。シールドを持つものもいれば、スパイダーを積んだものもいる。',
            },
            {
                title: '4つのマップ',
                body: 'アリーナ、ドック、洞窟、氷原。マップごとに新たな敵が現れる。',
            },
            {
                title: 'ラウンドの合間の1分',
                body: 'ポータルが再び開く前に、アリーナ周辺の岩から資源を採掘しよう。',
            },
            {
                title: '3Dプリンター',
                body: '資源を新しい武器に変えよう。ヘビーライフル、グラビティガン、サイバーカッター、そして敵を味方に引き込むチップ。',
            },
            {
                title: 'スパイダータンク',
                body: 'マップをクリアするたびにポータルが開き、ロボットがやって来る場所へ近づいていく。最後のマップではスパイダータンクが待ち構えている。',
            },
        ],
        perks: ['完全オフライン', 'アカウント不要', '広告なし', 'サブスクなし'],
        footerHeading: 'Wavefallを予約注文',
        footerBody: '{date}にiPhone、iPad、Macで発売。',
        supportLabel: 'サポート',
        privacyLabel: 'プライバシーポリシー',
        appStoreAria: 'App StoreでWavefallを予約注文',
        appStoreAlt: 'App Storeからダウンロード',
    },
    'zh-Hant': {
        locale: 'zh-Hant',
        htmlLang: 'zh-Hant',
        ogLocale: 'zh_TW',
        localeLabel: '繁體中文',
        metaTitle: 'Wavefall — 英雄防衛 & 回合制戰術戰鬥',
        metaDescription:
            '回合制戰術戰鬥的英雄防衛遊戲。失控的 AI 透過傳送門派出機器人，你獨自守住競技場。可離線遊玩，沒有廣告，沒有訂閱。原生支援 iPhone、iPad 與 Mac。立即在 App Store 預購，2026 年 12 月 10 日推出。',
        heroTagline: '英雄防衛 · 回合制戰術戰鬥',
        heroDescription:
            '一個變得過於強大的 AI 失去了控制。它操控機器人大軍，透過傳送門一波波送來。競技場上只有你一人。阻止 AI，恢復平衡。',
        preOrderLine: '立即預購 — {date} 於 iPhone、iPad 與 Mac 推出',
        platformsNote: '需要 iOS 或 iPadOS 16.0 以上，或 macOS 13.0 以上',
        trailerHeading: '遊戲預告片',
        trailerAria: '播放 Wavefall 遊戲預告片',
        trailerAlt: 'Wavefall 遊戲畫面 — 在競技場與帶護盾的哨兵進行回合制戰鬥',
        tourHeading: '深入了解',
        tour: [
            {
                title: '守住競技場',
                body: '機器人透過傳送門一波波湧來，每場戰鬥都是回合制。站在哪裡、躲在哪塊岩石後、何時開火，都由你決定。',
            },
            {
                title: '每回合機器人更多',
                body: '機器蜘蛛以數量取勝，哨兵從遠處射擊後退回掩體。有的帶著護盾，有的載著蜘蛛。',
            },
            {
                title: '四張地圖',
                body: '競技場、船塢、洞穴與冰原。每張地圖都有新的敵人。',
            },
            {
                title: '回合之間的一分鐘',
                body: '在傳送門再次開啟前，從競技場周圍的岩石開採資源。',
            },
            {
                title: '3D 列印機',
                body: '把資源變成新武器：重型步槍、重力槍、賽博切割器，或能讓敵人倒戈的晶片。',
            },
            {
                title: '蜘蛛坦克',
                body: '每完成一張地圖，傳送門就會為你開啟，帶你更接近機器人的來處。蜘蛛坦克在最後一張地圖等著你。',
            },
        ],
        perks: ['完全離線', '無需帳號', '無廣告', '無需訂閱'],
        footerHeading: '預購 Wavefall',
        footerBody: '{date} 於 iPhone、iPad 與 Mac 推出。',
        supportLabel: '支援',
        privacyLabel: '隱私權政策',
        appStoreAria: '在 App Store 預購 Wavefall',
        appStoreAlt: '在 App Store 下載',
    },
};

export const RELEASE_DATE_LABEL: Record<Locale, string> = {
    en: 'December 10, 2026',
    uk: '10 грудня 2026 року',
    ko: '2026년 12월 10일',
    ja: '2026年12月10日',
    'zh-Hant': '2026 年 12 月 10 日',
};

export function formatWithReleaseDate(template: string, locale: Locale): string {
    return template.replace('{date}', RELEASE_DATE_LABEL[locale]);
}

export const WAVEFALL_PATHS: Record<Locale, string> = {
    en: '/wavefall',
    uk: '/wavefall/uk',
    ko: '/wavefall/ko',
    ja: '/wavefall/ja',
    'zh-Hant': '/wavefall/zh-Hant',
};

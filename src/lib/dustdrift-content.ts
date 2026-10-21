export type Locale = 'en' | 'uk' | 'ko' | 'ja' | 'zh-Hant';

export const LOCALES: Locale[] = ['en', 'uk', 'ko', 'ja', 'zh-Hant'];

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
        metaTitle: 'DustDrift — Hero Defense & Turn-Based Tactical Combat',
        metaDescription:
            'Defend an arena against waves of enemies in turn-based tactical combat. A timer runs between waves, so you can craft better weapons and gear before the next one. Every round brings stronger enemies, and after a set of rounds you move on to a new map. Native on iPhone, iPad, and Mac. Pre-order now on the App Store, arriving December 10, 2026.',
        heroTagline: 'Hero Defense · Turn-Based Tactical Combat',
        heroDescription:
            'Waves of enemies attack an arena, and you defend it. Combat is turn-based: you move, aim and shoot, then the enemies take their turn. Between waves a timer counts down to the next one — use it to craft better weapons and extra gear. Each round brings stronger enemies, and after a set of rounds you move on to the next map.',
        preOrderLine: 'Pre-order now — arriving {date} on iPhone, iPad, and Mac',
        platformsNote: 'Requires iOS or iPadOS 16.0 or later, or macOS 13.0 or later',
        trailerHeading: 'Gameplay Trailer',
        trailerAria: 'Play DustDrift gameplay trailer',
        trailerAlt: 'DustDrift gameplay — a turn-based fight against a shielded Sentinel in the arena',
        tourHeading: 'A Closer Look',
        tour: [
            {
                title: 'Turn-based combat against enemy waves',
                body: 'Enemies attack in waves. On your turn you move, aim and shoot, then the enemies take theirs.',
            },
            {
                title: 'Many enemies — plan every move',
                body: 'RoboSpiders and shielded Sentinels close in from several sides. Think through each move before you make it.',
            },
            {
                title: 'Shield up, pick targets by hit chance',
                body: 'Switch on your shield. Before every shot the game shows the hit chance, damage and crit chance, so you can pick the best target.',
            },
            {
                title: 'Timer between waves — craft weapons',
                body: 'After a wave is cleared, a timer counts down to the next one. Spend it collecting resources and crafting weapons at the lab station.',
            },
            {
                title: 'Print weapons and gear on the 3D printer',
                body: 'Resources turn into better weapons and extra gear at crafting stations and the 3D printer.',
            },
            {
                title: 'Every round, enemies get stronger',
                body: 'Each round is harder than the last. Clear a set of rounds and you move on to a new map.',
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
        metaTitle: 'DustDrift — оборона героя й покрокові тактичні бої',
        metaDescription:
            'Обороняй арену від хвиль ворогів у покрокових тактичних боях. Між хвилями йде таймер, тож є час скрафтити кращу зброю й спорядження до наступної. Кожен раунд приводить сильніших ворогів, а після кількох раундів ти потрапляєш на нову карту. Нативно на iPhone, iPad і Mac. Передзамовлення вже в App Store, реліз 10 грудня 2026 року.',
        heroTagline: 'Оборона героя · Покрокові тактичні бої',
        heroDescription:
            'Хвилі ворогів атакують арену, а ти її обороняєш. Бій покроковий: ти рухаєшся, цілишся й стріляєш, потім ходять вороги. Між хвилями таймер відлічує час до наступної — використай його, щоб скрафтити кращу зброю й додаткове спорядження. Кожен раунд приводить сильніших ворогів, а після кількох раундів ти переходиш на наступну карту.',
        preOrderLine: 'Передзамовлення відкрите — реліз {date} на iPhone, iPad і Mac',
        platformsNote: 'Потрібна iOS або iPadOS 16.0 чи новіша, або macOS 13.0 чи новіша',
        trailerHeading: 'Геймплейний трейлер',
        trailerAria: 'Відтворити геймплейний трейлер DustDrift',
        trailerAlt: 'Геймплей DustDrift — покроковий бій із Sentinel у щиті на арені',
        tourHeading: 'Детальніше',
        tour: [
            {
                title: 'Покроковий бій проти хвиль ворогів',
                body: 'Вороги атакують хвилями. На своєму ході ти рухаєшся, цілишся й стріляєш, потім ходять вони.',
            },
            {
                title: 'Ворогів багато — плануй кожен хід',
                body: 'RoboSpider і Sentinel зі щитами підходять з кількох боків. Обміркуй кожен хід, перш ніж його зробити.',
            },
            {
                title: 'Вмикай щит, обирай ціль за шансом влучання',
                body: 'Увімкни щит. Перед кожним пострілом гра показує шанс влучання, шкоду й шанс крита, тож можна обрати найкращу ціль.',
            },
            {
                title: 'Між хвилями таймер — крафти зброю',
                body: 'Коли хвилю відбито, таймер відлічує час до наступної. Збирай ресурси й крафти зброю на станції.',
            },
            {
                title: 'Друкуй зброю й спорядження на 3D-принтері',
                body: 'Ресурси перетворюються на кращу зброю й додаткове спорядження на крафтових станціях і 3D-принтері.',
            },
            {
                title: 'Кожен раунд вороги сильніші',
                body: 'Кожен раунд складніший за попередній. Пройди кілька раундів — і потрапиш на нову карту.',
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
        metaTitle: 'DustDrift — 히어로 디펜스 & 턴제 전술 전투',
        metaDescription:
            '턴제 전술 전투로 적의 웨이브로부터 아레나를 지키세요. 웨이브 사이에는 타이머가 흐르니, 다음 웨이브 전에 더 좋은 무기와 장비를 제작할 수 있습니다. 라운드마다 적이 더 강해지고, 정해진 라운드를 클리어하면 새로운 맵으로 이동합니다. iPhone, iPad, Mac에서 네이티브로 즐길 수 있습니다. 지금 App Store에서 사전 주문하세요, 2026년 12월 10일 출시.',
        heroTagline: '히어로 디펜스 · 턴제 전술 전투',
        heroDescription:
            '적의 웨이브가 아레나를 공격하고, 당신이 그곳을 지킵니다. 전투는 턴제입니다: 내 턴에 이동하고, 조준하고, 사격한 뒤 적이 행동합니다. 웨이브 사이에는 다음 웨이브까지 타이머가 흐릅니다. 그 시간에 더 좋은 무기와 추가 장비를 제작하세요. 라운드마다 적이 더 강해지고, 정해진 라운드를 클리어하면 다음 맵으로 이동합니다.',
        preOrderLine: '지금 사전 주문하세요 — {date} iPhone, iPad, Mac에 출시',
        platformsNote: 'iOS 또는 iPadOS 16.0 이상, 또는 macOS 13.0 이상 필요',
        trailerHeading: '게임플레이 트레일러',
        trailerAria: 'DustDrift 게임플레이 트레일러 재생',
        trailerAlt: 'DustDrift 게임플레이 — 아레나에서 보호막을 두른 센티널과의 턴제 전투',
        tourHeading: '자세히 살펴보기',
        tour: [
            {
                title: '턴제 전투로 적의 웨이브를 막아내세요',
                body: '적은 웨이브로 공격해 옵니다. 내 턴에 이동하고, 조준하고, 사격하면 이어서 적의 턴이 시작됩니다.',
            },
            {
                title: '적이 많습니다 — 매 턴을 계획하세요',
                body: '로보스파이더와 보호막을 두른 센티널이 여러 방향에서 다가옵니다. 움직이기 전에 한 수를 충분히 생각하세요.',
            },
            {
                title: '보호막을 켜고 명중 확률로 목표를 고르세요',
                body: '보호막을 켜세요. 사격 전에 명중률, 피해량, 치명타 확률이 표시되어 가장 좋은 목표를 고를 수 있습니다.',
            },
            {
                title: '웨이브 사이 타이머 — 그 안에 무기를 제작하세요',
                body: '웨이브를 막아내면 다음 웨이브까지 타이머가 흐릅니다. 그 시간에 자원을 모으고 제작 스테이션에서 무기를 만드세요.',
            },
            {
                title: '3D 프린터로 무기와 장비를 출력하세요',
                body: '자원은 제작 스테이션과 3D 프린터에서 더 좋은 무기와 추가 장비가 됩니다.',
            },
            {
                title: '라운드마다 적이 더 강해집니다',
                body: '라운드가 거듭될수록 어려워집니다. 정해진 라운드를 클리어하면 새로운 맵으로 이동합니다.',
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
        metaTitle: 'DustDrift — ヒーローディフェンス & ターン制タクティカルバトル',
        metaDescription:
            'ターン制タクティカルバトルで、敵のウェーブからアリーナを守ろう。ウェーブの合間にはタイマーが進み、次の襲撃までに武器や装備をクラフトできる。ラウンドごとに敵は強くなり、一定のラウンドをクリアすると新しいマップへ進める。iPhone、iPad、Macでネイティブに動作します。今すぐApp Storeで予約注文 — 2026年12月10日発売。',
        heroTagline: 'ヒーローディフェンス · ターン制タクティカルバトル',
        heroDescription:
            '敵のウェーブがアリーナを襲い、あなたがそれを守る。戦闘はターン制：自分のターンで移動し、狙って撃ち、その後に敵が行動する。ウェーブの合間には次のウェーブまでタイマーがカウントダウン。その時間でより強い武器や追加装備をクラフトしよう。ラウンドごとに敵は強くなり、一定のラウンドをクリアすると次のマップへ進める。',
        preOrderLine: '予約注文受付中 — {date}にiPhone、iPad、Macで発売',
        platformsNote: 'iOSまたはiPadOS 16.0以降、またはmacOS 13.0以降が必要です',
        trailerHeading: 'ゲームプレイトレーラー',
        trailerAria: 'DustDriftのゲームプレイトレーラーを再生',
        trailerAlt: 'DustDriftのゲームプレイ — アリーナでシールド付きセンチネルとターン制バトル',
        tourHeading: '詳しく見る',
        tour: [
            {
                title: 'ターン制バトルで敵のウェーブを迎え撃とう',
                body: '敵はウェーブで襲ってくる。自分のターンで移動し、狙って撃ち、その後に敵のターンになる。',
            },
            {
                title: '敵が大量。一手ずつ考えて動こう',
                body: 'ロボスパイダーとシールド付きセンチネルが複数方向から迫ってくる。動く前に一手をよく考えよう。',
            },
            {
                title: 'シールドを張って、命中率で標的を選ぶ',
                body: 'シールドを起動しよう。撃つ前に命中率、ダメージ、クリティカル率が表示されるので、最適な標的を選べる。',
            },
            {
                title: 'ウェーブの合間のタイマー内に武器をクラフト',
                body: 'ウェーブを倒すと、次のウェーブまでタイマーがカウントダウンする。その間に資源を集め、作業台で武器をクラフトしよう。',
            },
            {
                title: '3Dプリンターで武器と装備を出力',
                body: '資源は、クラフトステーションと3Dプリンターで、より強い武器や追加装備になる。',
            },
            {
                title: 'ラウンドごとに敵が強くなる',
                body: 'ラウンドが進むごとに難しくなる。一定のラウンドをクリアすると、新しいマップへ進める。',
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
    'zh-Hant': {
        locale: 'zh-Hant',
        htmlLang: 'zh-Hant',
        ogLocale: 'zh_TW',
        localeLabel: '繁體中文',
        metaTitle: 'DustDrift — 英雄防衛 & 回合制戰術戰鬥',
        metaDescription:
            '以回合制戰術戰鬥，抵擋一波波敵人，守住競技場。每波之間有倒數計時，讓你在下一波來襲前製作更強的武器與裝備。每一回合敵人都更強，通過一系列回合後即可前往新地圖。原生支援 iPhone、iPad 與 Mac。立即在 App Store 預購，2026 年 12 月 10 日推出。',
        heroTagline: '英雄防衛 · 回合制戰術戰鬥',
        heroDescription:
            '一波波敵人攻向競技場，由你來守護。戰鬥採回合制：在你的回合移動、瞄準、開火，接著輪到敵人行動。每波之間有倒數計時，趁這段時間製作更強的武器與額外裝備。每一回合敵人都更強，通過一系列回合後就能前往下一張地圖。',
        preOrderLine: '立即預購 — {date} 於 iPhone、iPad 與 Mac 推出',
        platformsNote: '需要 iOS 或 iPadOS 16.0 以上，或 macOS 13.0 以上',
        trailerHeading: '遊戲預告片',
        trailerAria: '播放 DustDrift 遊戲預告片',
        trailerAlt: 'DustDrift 遊戲畫面 — 在競技場與帶護盾的哨兵進行回合制戰鬥',
        tourHeading: '深入了解',
        tour: [
            {
                title: '以回合制戰鬥擊退一波波敵人',
                body: '敵人會成波來襲。在你的回合移動、瞄準、開火，接著輪到敵人行動。',
            },
            {
                title: '敵人很多，每一步都要規劃',
                body: '機械蜘蛛與帶護盾的哨兵會從多個方向逼近。行動之前，先想清楚每一步。',
            },
            {
                title: '開啟護盾，依命中率選擇目標',
                body: '開啟護盾。每次開火前，遊戲都會顯示命中率、傷害與暴擊率，讓你挑出最好的目標。',
            },
            {
                title: '每波之間有倒數計時，趕快製作武器',
                body: '擊退一波敵人後，計時器會倒數下一波。趁這段時間收集資源，並在製作站製作武器。',
            },
            {
                title: '用 3D 列印機列印武器與裝備',
                body: '資源會在製作站與 3D 列印機轉化為更強的武器與額外裝備。',
            },
            {
                title: '每一回合敵人都更強',
                body: '每一回合都比上一回合更難。通過一系列回合，就能前往新地圖。',
            },
        ],
        perks: ['完全離線', '無需帳號', '無廣告', '無應用內購買'],
        footerHeading: '預購 DustDrift',
        footerBody: '{date} 於 iPhone、iPad 與 Mac 推出。',
        supportLabel: '支援',
        privacyLabel: '隱私權政策',
        appStoreAria: '在 App Store 預購 DustDrift',
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

export const DUSTDRIFT_PATHS: Record<Locale, string> = {
    en: '/dustdrift',
    uk: '/dustdrift/uk',
    ko: '/dustdrift/ko',
    ja: '/dustdrift/ja',
    'zh-Hant': '/dustdrift/zh-Hant',
};

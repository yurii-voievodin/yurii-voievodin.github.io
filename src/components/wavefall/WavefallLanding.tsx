import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { WAVEFALL_TOUR_IMAGES } from '@/lib/wavefall-images';
import AppLanding from '@/components/landing/AppLanding';
import TrailerPlayer from '@/components/wavefall/TrailerPlayer';
import {
    wavefallContent,
    formatWithReleaseDate,
    PLATFORMS,
    LOCALES,
    WAVEFALL_PATHS,
    RELEASE_DATE_ISO,
    APP_STORE_URL,
    type Locale,
} from '@/lib/wavefall-content';

function LocaleSwitcher({ locale }: { locale: Locale }) {
    return (
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 mb-4 text-xs">
            {LOCALES.map((l) => (
                <Link
                    key={l}
                    href={`${WAVEFALL_PATHS[l]}/`}
                    hrefLang={l}
                    aria-current={l === locale ? 'page' : undefined}
                    className={
                        l === locale
                            ? 'px-2 py-2 text-zinc-100 font-semibold underline underline-offset-4'
                            : 'px-2 py-2 text-zinc-400 hover:text-zinc-200 transition-colors'
                    }
                >
                    {wavefallContent[l].localeLabel}
                </Link>
            ))}
        </div>
    );
}

export default function WavefallLanding({ locale }: { locale: Locale }) {
    const content = wavefallContent[locale];

    return (
        <AppLanding
            lang={content.htmlLang}
            header={<LocaleSwitcher locale={locale} />}
            name="Wavefall"
            icon="/wavefall/icon.png"
            tagline={content.heroTagline}
            description={content.heroDescription}
            appStore={{
                href: APP_STORE_URL,
                badge: '/wavefall/app-store-badge.svg',
                ariaLabel: content.appStoreAria,
                alt: content.appStoreAlt,
            }}
            ctaNote={formatWithReleaseDate(content.preOrderLine, locale)}
            platforms={{ items: PLATFORMS, note: content.platformsNote }}
            sections={[
                {
                    kind: 'custom',
                    heading: content.trailerHeading,
                    children: (
                        <TrailerPlayer
                            variants={[
                                {
                                    id: 'iphone',
                                    label: 'iPhone',
                                    src: `/wavefall/trailer-${locale}.mp4`,
                                    poster: `/wavefall/trailer-poster-${locale}.jpg`,
                                    aspect: '1920 / 886',
                                },
                                {
                                    id: 'ipad',
                                    label: 'iPad',
                                    src: `/wavefall/trailer-ipad-${locale}.mp4`,
                                    poster: `/wavefall/trailer-ipad-poster-${locale}.jpg`,
                                    aspect: '1600 / 1200',
                                },
                                {
                                    id: 'mac',
                                    label: 'Mac',
                                    src: '/wavefall/trailer-mac.mp4',
                                    poster: '/wavefall/trailer-mac-poster.jpg',
                                    aspect: '1920 / 1080',
                                },
                            ]}
                            ariaLabel={content.trailerAria}
                            alt={content.trailerAlt}
                        />
                    ),
                },
                {
                    kind: 'tour',
                    heading: content.tourHeading,
                    items: content.tour.map((item, i) => ({
                        ...item,
                        image: { src: WAVEFALL_TOUR_IMAGES[i], alt: item.title },
                    })),
                    perks: content.perks,
                },
            ]}
            footer={{
                heading: content.footerHeading,
                body: formatWithReleaseDate(content.footerBody, locale),
                links: [
                    { label: content.supportLabel, href: '/wavefall-support' },
                    { label: content.privacyLabel, href: '/wavefall-privacy' },
                ],
            }}
            jsonLd={{
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'Wavefall',
                applicationCategory: 'Game',
                operatingSystem: 'iOS, iPadOS, macOS',
                description: content.metaDescription,
                image: `${siteConfig.url}/wavefall/trailer-poster.jpg`,
                url: `${siteConfig.url}${WAVEFALL_PATHS[locale]}/`,
                inLanguage: content.htmlLang,
                releaseDate: RELEASE_DATE_ISO,
                offers: {
                    '@type': 'Offer',
                    availability: 'https://schema.org/PreOrder',
                    url: APP_STORE_URL,
                },
            }}
        />
    );
}

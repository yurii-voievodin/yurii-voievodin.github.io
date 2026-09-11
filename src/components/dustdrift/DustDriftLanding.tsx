import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { dustdriftScreenshots } from '@/lib/dustdrift-images';
import AppLanding from '@/components/landing/AppLanding';
import TrailerPlayer from '@/components/dustdrift/TrailerPlayer';
import {
    dustdriftContent,
    formatWithReleaseDate,
    FEATURE_ICONS,
    PLATFORMS,
    LOCALES,
    DUSTDRIFT_PATHS,
    RELEASE_DATE_ISO,
    APP_STORE_URL,
    type Locale,
} from '@/lib/dustdrift-content';

function LocaleSwitcher({ locale }: { locale: Locale }) {
    return (
        <div className="flex justify-end gap-3 mb-4 text-xs">
            {LOCALES.map((l) => (
                <Link
                    key={l}
                    href={`${DUSTDRIFT_PATHS[l]}/`}
                    hrefLang={l}
                    aria-current={l === locale ? 'page' : undefined}
                    className={
                        l === locale
                            ? 'px-2 py-2 text-zinc-100 font-semibold underline underline-offset-4'
                            : 'px-2 py-2 text-zinc-400 hover:text-zinc-200 transition-colors'
                    }
                >
                    {dustdriftContent[l].localeLabel}
                </Link>
            ))}
        </div>
    );
}

export default function DustDriftLanding({ locale }: { locale: Locale }) {
    const content = dustdriftContent[locale];

    return (
        <AppLanding
            lang={content.htmlLang}
            header={<LocaleSwitcher locale={locale} />}
            name="DustDrift"
            icon="/dustdrift/icon.png"
            tagline={content.heroTagline}
            description={content.heroDescription}
            appStore={{
                href: APP_STORE_URL,
                badge: '/dustdrift/app-store-badge.svg',
                ariaLabel: content.appStoreAria,
                alt: content.appStoreAlt,
            }}
            ctaNote={formatWithReleaseDate(content.preOrderLine, locale)}
            platforms={{ items: PLATFORMS, note: content.platformsNote }}
            sections={[
                {
                    kind: 'custom',
                    heading: content.trailerHeading,
                    children: <TrailerPlayer ariaLabel={content.trailerAria} alt={content.trailerAlt} />,
                },
                {
                    kind: 'cards',
                    heading: content.featuresHeading,
                    cards: content.features.map((feature, i) => ({ ...feature, icon: FEATURE_ICONS[i] })),
                },
                {
                    kind: 'screenshots',
                    heading: content.screenshotsHeading,
                    images: dustdriftScreenshots,
                },
            ]}
            footer={{
                heading: content.footerHeading,
                body: formatWithReleaseDate(content.footerBody, locale),
                links: [
                    { label: content.supportLabel, href: '/dustdrift-support' },
                    { label: content.privacyLabel, href: '/dustdrift-privacy' },
                ],
            }}
            jsonLd={{
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'DustDrift',
                applicationCategory: 'Game',
                operatingSystem: 'iOS, iPadOS, macOS',
                description: content.metaDescription,
                image: `${siteConfig.url}/dustdrift/trailer-poster.jpg`,
                url: `${siteConfig.url}${DUSTDRIFT_PATHS[locale]}/`,
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

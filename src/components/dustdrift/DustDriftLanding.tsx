import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { dustdriftScreenshots } from '@/lib/dustdrift-images';
import WidePhotoCarousel from '@/components/WidePhotoCarousel';
import TrailerPlayer from '@/components/dustdrift/TrailerPlayer';
import AppStoreBadge from '@/components/dustdrift/AppStoreBadge';
import {
    dustdriftContent,
    formatWithReleaseDate,
    FEATURE_ICONS,
    PLATFORMS,
    LOCALES,
    DUSTDRIFT_PATHS,
    RELEASE_DATE_ISO,
    type Locale,
} from '@/lib/dustdrift-content';

export default function DustDriftLanding({ locale }: { locale: Locale }) {
    const content = dustdriftContent[locale];
    const preOrderLine = formatWithReleaseDate(content.preOrderLine, locale);
    const footerBody = formatWithReleaseDate(content.footerBody, locale);

    const jsonLd = {
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
            url: 'https://apps.apple.com/app/id6758512309',
        },
    };

    return (
        <div className="min-h-screen p-5" lang={content.htmlLang}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-5xl mx-auto">
                {/* Language switcher */}
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

                {/* Hero */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 pt-2">
                    <Image
                        src="/dustdrift/icon.png"
                        alt="DustDrift app icon"
                        width={112}
                        height={112}
                        className="rounded-3xl shadow-lg border border-zinc-700/50 flex-shrink-0"
                    />
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">DustDrift</h1>
                        <p className="text-lg md:text-xl bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-3">
                            {content.heroTagline}
                        </p>
                        <p className="text-zinc-300 leading-relaxed max-w-2xl">{content.heroDescription}</p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mb-12">
                    <AppStoreBadge ariaLabel={content.appStoreAria} alt={content.appStoreAlt} />
                    <p className="text-xs text-zinc-400 mt-1.5">{preOrderLine}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                        {PLATFORMS.map((platform) => (
                            <span
                                key={platform}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/30"
                            >
                                {platform}
                            </span>
                        ))}
                        <span className="text-xs text-zinc-400 ml-1">{content.platformsNote}</span>
                    </div>
                </div>

                {/* Trailer */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">{content.trailerHeading}</h2>
                    <TrailerPlayer ariaLabel={content.trailerAria} alt={content.trailerAlt} />
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">{content.featuresHeading}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {content.features.map(({ title, body }, i) => {
                            const Icon = FEATURE_ICONS[i];
                            return (
                                <div
                                    key={title}
                                    className="rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-5 backdrop-blur-sm"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-3">
                                        <Icon className="w-5 h-5 text-violet-400" />
                                    </div>
                                    <h3 className="font-semibold text-zinc-100 mb-1.5">{title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Screenshots */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-zinc-100 mb-4">{content.screenshotsHeading}</h2>
                    <WidePhotoCarousel images={dustdriftScreenshots} />
                </div>

                {/* Footer CTA */}
                <div className="rounded-3xl bg-zinc-800/90 border border-zinc-700/50 p-8 text-center backdrop-blur-sm mb-8">
                    <h2 className="text-2xl font-bold text-zinc-100 mb-2">{content.footerHeading}</h2>
                    <p className="text-zinc-400 mb-5">{footerBody}</p>
                    <div className="flex justify-center">
                        <AppStoreBadge ariaLabel={content.appStoreAria} alt={content.appStoreAlt} />
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-6 text-sm">
                        <Link
                            href="/dustdrift-support"
                            className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                        >
                            {content.supportLabel}
                        </Link>
                        <span className="text-zinc-600">·</span>
                        <Link
                            href="/dustdrift-privacy"
                            className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                        >
                            {content.privacyLabel}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

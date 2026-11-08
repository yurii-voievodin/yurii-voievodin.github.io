import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { wavefallContent, WAVEFALL_PATHS, LOCALES, type Locale } from '@/lib/wavefall-content';

export function buildWavefallMetadata(locale: Locale): Metadata {
    const content = wavefallContent[locale];
    const canonicalPath = `${WAVEFALL_PATHS[locale]}/`;
    const url = `${siteConfig.url}${canonicalPath}`;

    const languages: Record<string, string> = {
        'x-default': `${siteConfig.url}${WAVEFALL_PATHS.en}/`,
    };
    for (const l of LOCALES) {
        languages[l] = `${siteConfig.url}${WAVEFALL_PATHS[l]}/`;
    }

    return {
        title: content.metaTitle,
        description: content.metaDescription,
        alternates: {
            canonical: canonicalPath,
            languages,
        },
        openGraph: {
            title: content.metaTitle,
            description: content.metaDescription,
            url,
            type: 'website',
            locale: content.ogLocale,
            images: [{ url: `${siteConfig.url}/wavefall/trailer-poster.jpg?v=3` }],
        },
        twitter: {
            card: 'summary_large_image',
            title: content.metaTitle,
            description: content.metaDescription,
            images: [`${siteConfig.url}/wavefall/trailer-poster.jpg?v=3`],
        },
    };
}

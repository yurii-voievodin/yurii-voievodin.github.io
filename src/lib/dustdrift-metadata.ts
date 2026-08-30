import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { dustdriftContent, DUSTDRIFT_PATHS, LOCALES, type Locale } from '@/lib/dustdrift-content';

export function buildDustDriftMetadata(locale: Locale): Metadata {
    const content = dustdriftContent[locale];
    const canonicalPath = `${DUSTDRIFT_PATHS[locale]}/`;
    const url = `${siteConfig.url}${canonicalPath}`;

    const languages: Record<string, string> = {
        'x-default': `${siteConfig.url}${DUSTDRIFT_PATHS.en}/`,
    };
    for (const l of LOCALES) {
        languages[l] = `${siteConfig.url}${DUSTDRIFT_PATHS[l]}/`;
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
            images: [{ url: `${siteConfig.url}/dustdrift/trailer-poster.jpg` }],
        },
        twitter: {
            card: 'summary_large_image',
            title: content.metaTitle,
            description: content.metaDescription,
            images: [`${siteConfig.url}/dustdrift/trailer-poster.jpg`],
        },
    };
}

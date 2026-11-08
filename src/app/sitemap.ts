import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/blog'
import { commercialProjects, personalProjects } from '@/lib/projects-data'
import { WAVEFALL_PATHS, LOCALES } from '@/lib/wavefall-content'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData()
  const baseUrl = 'https://yurii-voievodin.github.io' // Updated to GitHub Pages domain

  const wavefallLanguages: Record<string, string> = {
    'x-default': `${baseUrl}${WAVEFALL_PATHS.en}/`,
  }
  for (const locale of LOCALES) {
    wavefallLanguages[locale] = `${baseUrl}${WAVEFALL_PATHS[locale]}/`
  }

  const wavefallPages = LOCALES.map((locale) => ({
    url: `${baseUrl}${WAVEFALL_PATHS[locale]}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'en' ? 0.8 : 0.7,
    alternates: {
      languages: wavefallLanguages,
    },
  }))

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/personal`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/timeline`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/personal`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/qa`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/wavefall-support`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/wavefall-privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/wisebudget`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wisebudget-privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/headrecorder`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/headrecorder-support`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/headrecorder-privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const projectPages = [
    ...commercialProjects.map((p) => ({ category: 'commercial', slug: p.slug })),
    ...personalProjects.map((p) => ({ category: 'personal', slug: p.slug })),
  ].map(({ category, slug }) => ({
    url: `${baseUrl}/projects/${category}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...wavefallPages, ...blogPages, ...projectPages]
}


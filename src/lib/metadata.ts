import type { Metadata } from 'next';
import { siteConfig } from './config';

type PageType = 'website' | 'profile' | 'article';

export interface PageMetadata {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: PageType;
  keywords?: string[];
  publishedTime?: string;
  tags?: string[];
}

export function buildMetadata({
  title,
  description,
  path = '',
  image,
  type = 'website',
  keywords,
  publishedTime,
  tags,
}: PageMetadata): Metadata {
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image ? `${siteConfig.url}${image}` : undefined;

  const openGraph: Metadata['openGraph'] =
    type === 'article'
      ? {
          title,
          description,
          url,
          type: 'article',
          publishedTime,
          authors: [siteConfig.author.name],
          tags,
          images: imageUrl ? [{ url: imageUrl }] : [],
        }
      : {
          title,
          description,
          url,
          type,
          images: imageUrl ? [{ url: imageUrl }] : [],
        };

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    openGraph,
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

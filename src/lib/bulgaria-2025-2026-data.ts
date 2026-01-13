import { Post } from '@/types/blog';
import BulgariaPost from '@/components/blog-posts/BulgariaPost';

export interface BulgariaPhoto {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export const bulgariaPostMetadata: Post = {
  slug: 'bulgaria-2025-2026',
  title: 'Bulgaria Winter Trip',
  date: '2025-12-20',
  excerpt: 'Winter adventure on the Black Sea',
  tags: ['travel', 'photography', 'bulgaria', 'winter'],
  featuredImage: '/bulgaria-2025-2026/IMG_7922.jpeg',
  component: BulgariaPost,
};

export const bulgariaPhotos: BulgariaPhoto[] = [
  {
    id: 1,
    src: "/bulgaria-2025-2026/IMG_7862.jpeg",
    alt: "Bulgaria Winter Trip",
    description: "Bulgaria - Winter landscapes"
  },
  {
    id: 7,
    src: "/bulgaria-2025-2026/IMG_9832.jpeg",
    alt: "Bulgaria Winter Trip",
    description: "Bulgaria - Winter experience"
  },
  
  {
    id: 3,
    src: "/bulgaria-2025-2026/IMG_7922.jpeg",
    alt: "Bulgaria Winter Trip",
    description: "Bulgaria - Winter views"
  },
  {
    id: 5,
    src: "/bulgaria-2025-2026/IMG_7952.jpeg",
    alt: "Bulgaria Winter Trip",
    description: "Bulgaria - Winter moments"
  },
  {
    id: 4,
    src: "/bulgaria-2025-2026/IMG_7929.jpeg",
    alt: "Bulgaria Winter Trip",
    description: "Bulgaria - Winter adventure"
  },
  {
    id: 6,
    src: "/bulgaria-2025-2026/IMG_7998.jpeg",
    alt: "Bulgaria Winter Trip",
    description: "Bulgaria - Winter memories"
  },
  {
    id: 2,
    src: "/bulgaria-2025-2026/IMG_7916.jpeg",
    alt: "Bulgaria Winter Trip",
    description: "Bulgaria - Winter scenery"
  },
  {
    id: 8,
    src: "/bulgaria-2025-2026/IMG_9864.jpeg",
    alt: "Bulgaria Winter Trip",
    description: "Bulgaria - Winter journey"
  }
];

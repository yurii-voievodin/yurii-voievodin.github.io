import { Post, Photo } from '@/types/blog';
import PraguePost from '@/components/blog-posts/PraguePost';

export const praguePostMetadata: Post = {
  slug: 'prague-2025',
  title: 'Prague 2025',
  date: '2025-11-01',
  excerpt: 'A few trips to Prague in 2025',
  tags: ['photography', 'prague', 'czechia'],
  featuredImage: '/prague-2025/01.jpeg',
  component: PraguePost,
};

export const praguePhotos: Photo[] = [
  { id: 1, src: '/prague-2025/01.jpeg', alt: 'Prague 2025 - Photo 1', description: '' },
  { id: 2, src: '/prague-2025/02.jpeg', alt: 'Prague 2025 - Photo 2', description: '' },
  { id: 3, src: '/prague-2025/03.jpeg', alt: 'Prague 2025 - Photo 3', description: '' },
  { id: 4, src: '/prague-2025/04.jpeg', alt: 'Prague 2025 - Photo 4', description: '' },
  { id: 5, src: '/prague-2025/05.jpeg', alt: 'Prague 2025 - Photo 5', description: '' },
  { id: 6, src: '/prague-2025/06.jpeg', alt: 'Prague 2025 - Photo 6', description: '' },
  { id: 7, src: '/prague-2025/07.jpeg', alt: 'Prague 2025 - Photo 7', description: '' },
  { id: 8, src: '/prague-2025/08.jpeg', alt: 'Prague 2025 - Photo 8', description: '' },
  { id: 9, src: '/prague-2025/09.jpeg', alt: 'Prague 2025 - Photo 9', description: '' },
];

import { Post, Photo } from '@/types/blog';
import KyivPost from '@/components/blog-posts/KyivPost';

export const kyivPostMetadata: Post = {
  slug: 'kyiv-2025',
  title: 'Kyiv 2025',
  date: '2025-01-01',
  excerpt: 'Kyiv in 2025',
  tags: ['photography', 'kyiv', 'ukraine'],
  featuredImage: '/kyiv-2025/hero.jpeg',
  component: KyivPost,
};

export const kyivPhotos: Photo[] = [
{ id: 12, src: '/kyiv-2025/12.jpeg', alt: 'Kyiv 2025 - Photo 12', description: '' },
{ id: 8, src: '/kyiv-2025/08.jpeg', alt: 'Kyiv 2025 - Photo 8', description: '' },
  { id: 1, src: '/kyiv-2025/01.jpeg', alt: 'Kyiv 2025 - Photo 1', description: '' },
  { id: 2, src: '/kyiv-2025/02.jpeg', alt: 'Kyiv 2025 - Photo 2', description: '' },
  { id: 3, src: '/kyiv-2025/03.jpeg', alt: 'Kyiv 2025 - Photo 3', description: '' },
  { id: 4, src: '/kyiv-2025/04.jpeg', alt: 'Kyiv 2025 - Photo 4', description: '' },
  { id: 5, src: '/kyiv-2025/05.jpeg', alt: 'Kyiv 2025 - Photo 5', description: '' },
  { id: 6, src: '/kyiv-2025/06.jpeg', alt: 'Kyiv 2025 - Photo 6', description: '' },
  { id: 11, src: '/kyiv-2025/11.jpeg', alt: 'Kyiv 2025 - Photo 11', description: '' },
  { id: 7, src: '/kyiv-2025/07.jpeg', alt: 'Kyiv 2025 - Photo 7', description: '' },
  { id: 9, src: '/kyiv-2025/09.jpeg', alt: 'Kyiv 2025 - Photo 9', description: '' },
  { id: 10, src: '/kyiv-2025/10.jpeg', alt: 'Kyiv 2025 - Photo 10', description: '' },
];

import { Post, Photo } from '@/types/blog';
import PolandPost from '@/components/blog-posts/PolandPost';

export const polandPostMetadata: Post = {
  slug: 'poland-2025',
  title: 'Poland 2025',
  date: '2025-12-01',
  excerpt: 'Half a year living in Poland',
  tags: ['photography', 'poland', 'life'],
  featuredImage: '/poland-2025/01.jpeg',
  component: PolandPost,
};

export const polandPhotos: Photo[] = [
  { id: 1, src: '/poland-2025/01.jpeg', alt: 'Poland 2025 Trip - Photo 1', description: '' },
  { id: 2, src: '/poland-2025/02.jpeg', alt: 'Poland 2025 Trip - Photo 2', description: '' },
  { id: 3, src: '/poland-2025/03.jpeg', alt: 'Poland 2025 Trip - Photo 3', description: '' },
  { id: 4, src: '/poland-2025/04.jpeg', alt: 'Poland 2025 Trip - Photo 4', description: '' },
  { id: 5, src: '/poland-2025/05.jpeg', alt: 'Poland 2025 Trip - Photo 5', description: '' },
  { id: 6, src: '/poland-2025/06.jpeg', alt: 'Poland 2025 Trip - Photo 6', description: '' },
  { id: 7, src: '/poland-2025/07.jpeg', alt: 'Poland 2025 Trip - Photo 7', description: '' },
  { id: 8, src: '/poland-2025/08.jpeg', alt: 'Poland 2025 Trip - Photo 8', description: '' },
  { id: 9, src: '/poland-2025/09.jpeg', alt: 'Poland 2025 Trip - Photo 9', description: '' },
  { id: 10, src: '/poland-2025/10.jpeg', alt: 'Poland 2025 Trip - Photo 10', description: '' },
];

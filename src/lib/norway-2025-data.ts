import { Post } from '@/types/blog';
import NorwayPost from '@/components/blog-posts/NorwayPost';

export interface NorwayPhoto {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export const norwayPostMetadata: Post = {
  slug: 'norway-2025',
  title: 'Norway 2025',
  date: '2025-09-20',
  excerpt: 'A photographic journey through the stunning landscapes of Norway',
  tags: ['travel', 'photography', 'norway', 'adventure'],
  featuredImage: '/norway-2025/IMG_7111.jpeg',
  component: NorwayPost,
};

export const norwayPhotos: NorwayPhoto[] = [
  {
    id: 1,
    src: "/norway-2025/IMG_5195.jpeg",
    alt: "Norway 2025 Trip - Photo 1",
    description: ""
  },
  {
    id: 2,
    src: "/norway-2025/IMG_5206.jpeg",
    alt: "Norway 2025 Trip - Photo 2",
    description: ""
  },
  {
    id: 3,
    src: "/norway-2025/IMG_5427.jpeg",
    alt: "Norway 2025 Trip - Photo 3",
    description: ""
  },
  {
    id: 4,
    src: "/norway-2025/IMG_5471.jpeg",
    alt: "Norway 2025 Trip - Photo 4",
    description: ""
  },
  {
    id: 5,
    src: "/norway-2025/IMG_5696.jpeg",
    alt: "Norway 2025 Trip - Photo 5",
    description: ""
  },
  {
    id: 6,
    src: "/norway-2025/IMG_7026.jpeg",
    alt: "Norway 2025 Trip - Photo 6",
    description: ""
  },
  {
    id: 7,
    src: "/norway-2025/IMG_7111.jpeg",
    alt: "Norway 2025 Trip - Photo 7",
    description: ""
  },
  {
    id: 8,
    src: "/norway-2025/IMG_7207.jpeg",
    alt: "Norway 2025 Trip - Photo 8",
    description: ""
  },
  {
    id: 9,
    src: "/norway-2025/IMG_7225.jpeg",
    alt: "Norway 2025 Trip - Photo 9",
    description: ""
  },
  {
    id: 10,
    src: "/norway-2025/IMG_7340.jpeg",
    alt: "Norway 2025 Trip - Photo 10",
    description: ""
  }
];
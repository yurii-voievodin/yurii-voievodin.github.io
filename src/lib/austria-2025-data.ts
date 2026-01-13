import { Post } from '@/types/blog';
import AustriaPost from '@/components/blog-posts/AustriaPost';

export interface AustriaPhoto {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export const austriaPostMetadata: Post = {
  slug: 'austria-2025',
  title: 'Austria 2025',
  date: '2025-10-11',
  excerpt: 'A journey through Austria\'s Alpine landscapes and historic Vienna',
  tags: ['travel', 'photography', 'austria', 'adventure', 'alps'],
  featuredImage: '/austria-2025/IMG_6445.jpeg',
  component: AustriaPost,
};

export const austriaPhotos: AustriaPhoto[] = [
  {
    id: 1,
    src: "/austria-2025/IMG_6233.jpeg",
    alt: "Austria 2025 Trip - Semmering",
    description: "Semmering - A picturesque mountain pass and resort area in Lower Austria"
  },
  {
    id: 2,
    src: "/austria-2025/IMG_6298.jpeg",
    alt: "Austria 2025 Trip - Semmering",
    description: "Semmering - Historic alpine resort town known for its stunning mountain vistas"
  },
  {
    id: 3,
    src: "/austria-2025/IMG_6391.jpeg",
    alt: "Austria 2025 Trip - Reichenau an der Rax",
    description: "Reichenau an der Rax - Alpine region at the foot of the Rax mountain range"
  },
  {
    id: 4,
    src: "/austria-2025/IMG_6401.jpeg",
    alt: "Austria 2025 Trip - Vienna",
    description: "Vienna (Innere Stadt) - Historic city center and heart of Austria's capital"
  },
  {
    id: 5,
    src: "/austria-2025/IMG_6423.jpeg",
    alt: "Austria 2025 Trip - Vienna",
    description: "Vienna - Exploring the architectural beauty of Austria's capital city"
  },
  {
    id: 6,
    src: "/austria-2025/IMG_6440.jpeg",
    alt: "Austria 2025 Trip - Vienna",
    description: "Vienna - Magnificent architecture and cultural landmarks in the city center"
  },
  {
    id: 7,
    src: "/austria-2025/IMG_6445.jpeg",
    alt: "Austria 2025 Trip - Vienna",
    description: "Vienna - Imperial grandeur and modern life in the Austrian capital"
  },
  {
    id: 8,
    src: "/austria-2025/IMG_6448.jpeg",
    alt: "Austria 2025 Trip - Vienna",
    description: "Vienna (Innere Stadt) - Historic streets and elegant buildings of central Vienna"
  },
  {
    id: 9,
    src: "/austria-2025/IMG_6452.jpeg",
    alt: "Austria 2025 Trip - Weinviertel",
    description: "Weinviertel - Wine country region north of Vienna, famous for its vineyards and rolling hills"
  },
  {
    id: 10,
    src: "/austria-2025/IMG_7990.jpeg",
    alt: "Austria 2025 Trip - Reichenau an der Rax",
    description: "Reichenau an der Rax - Scenic alpine landscapes in Lower Austria"
  }
];

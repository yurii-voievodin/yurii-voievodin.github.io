import { Post } from '@/types/blog';
import FirstAndSecondCarPost from '@/components/blog-posts/FirstAndSecondCarPost';

export interface CarPhoto {
  id: number;
  src: string;
  alt: string;
  description: string;
  date: string;
}

export const firstAndSecondCarPostMetadata: Post = {
  slug: 'first-and-second-car',
  title: 'Car Collection Memories',
  date: '2024-10-05',
  excerpt: 'A collection of photos documenting my first and second car adventures from 2018 to 2024',
  tags: ['automotive', 'photography', 'memories'],
  featuredImage: '/first-and-second-car/IMG_4979.jpeg',
  component: FirstAndSecondCarPost,
};

export const firstAndSecondCarPhotos: CarPhoto[] = [
  {
    id: 1,
    src: "/first-and-second-car/image.jpeg",
    alt: "First and Second Car - Photo 1",
    description: "Early days - Spring 2018",
    date: "2018-04-03"
  },
  {
    id: 2,
    src: "/first-and-second-car/IMG_2164.jpeg",
    alt: "First and Second Car - Photo 2",
    description: "Spring morning in Sumy",
    date: "2021-04-10"
  },
  {
    id: 3,
    src: "/first-and-second-car/IMG_6244.jpeg",
    alt: "First and Second Car - Photo 3",
    description: "Summer evening memories",
    date: "2021-08-15"
  },
  {
    id: 4,
    src: "/first-and-second-car/IMG_0269.jpeg",
    alt: "First and Second Car - Photo 4",
    description: "Autumn evening in Sumy",
    date: "2021-09-14"
  },
  {
    id: 5,
    src: "/first-and-second-car/IMG_0955.jpeg",
    alt: "First and Second Car - Photo 5",
    description: "Late autumn in Sumy",
    date: "2021-11-19"
  },
  {
    id: 6,
    src: "/first-and-second-car/IMG_1063.jpeg",
    alt: "First and Second Car - Photo 6",
    description: "November afternoon in Sumy",
    date: "2021-11-27"
  },
  {
    id: 7,
    src: "/first-and-second-car/IMG_4979.jpeg",
    alt: "First and Second Car - Photo 7",
    description: "Early autumn moments",
    date: "2022-09-11"
  },
  {
    id: 8,
    src: "/first-and-second-car/DSC00315.jpeg",
    alt: "First and Second Car - Photo 8",
    description: "Spring day reflections",
    date: "2023-04-16"
  },
  {
    id: 9,
    src: "/first-and-second-car/IMG_8140.jpeg",
    alt: "First and Second Car - Photo 9",
    description: "Spring evening in Sumy region",
    date: "2023-04-25"
  },
  {
    id: 10,
    src: "/first-and-second-car/IMG_0651.jpeg",
    alt: "First and Second Car - Photo 10",
    description: "Carpathian adventure - Ivano-Frankivsk region",
    date: "2023-10-07"
  },
  {
    id: 11,
    src: "/first-and-second-car/IMG_3913.jpeg",
    alt: "First and Second Car - Photo 11",
    description: "Winter in the Carpathians",
    date: "2024-01-09"
  },
  {
    id: 12,
    src: "/first-and-second-car/IMG_1298.jpeg",
    alt: "First and Second Car - Photo 12",
    description: "Autumn road trip through Chernihiv Oblast",
    date: "2024-10-05"
  }
];

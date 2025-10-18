import { Post } from '@/types/blog';
import LandRoverPost from '@/components/blog-posts/LandRoverPost';

export interface LandRoverPhoto {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export const landRoverPostMetadata: Post = {
  slug: 'land_rover',
  title: 'Land Rover Discovery Sport 2017',
  date: '2025-02-02',
  excerpt: 'A collection of my photos with Land Rover in different locations',
  tags: ['automotive', 'photography', 'ukraine', 'travel'],
  featuredImage: '/land_rover/10.jpeg',
  component: LandRoverPost,
};

export const landRoverPhotos: LandRoverPhoto[] = [
  {
    id: 1,
    src: "/land_rover/1.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 1",
    description: "Kyiv Reservoir, Kyiv Region, Ukraine"
  },
  {
    id: 2,
    src: "/land_rover/2.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 2",
    description: "Schönborn Palace, Carpathians, Zakarpattia Region, Ukraine"
  },
  {
    id: 3,
    src: "/land_rover/3.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 3",
    description: "Mizhrichna, Zakarpattia Region, Ukraine"
  },
  {
    id: 4,
    src: "/land_rover/4.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 4",
    description: "Chernihiv Region, Ukraine"
  },
  {
    id: 5,
    src: "/land_rover/5.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 5",
    description: "Chernihiv Region, Ukraine"
  },
  {
    id: 6,
    src: "/land_rover/6.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 6",
    description: "Chernihiv Region, Ukraine"
  },
  {
    id: 7,
    src: "/land_rover/7.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 7",
    description: "Kyiv Reservoir, Kyiv Region, Ukraine"
  },
  {
    id: 8,
    src: "/land_rover/8.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 8",
    description: "Kyiv Reservoir, Kyiv Region, Ukraine"
  },
  {
    id: 9,
    src: "/land_rover/9.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 9",
    description: "Pirnivska, Kyiv Region, Ukraine"
  },
  {
    id: 10,
    src: "/land_rover/10.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 10",
    description: "Kyiv Reservoir, Kyiv Region, Ukraine"
  },
  {
    id: 11,
    src: "/land_rover/11.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 11",
    description: "Chernihiv Region, Ukraine"
  },
  {
    id: 12,
    src: "/land_rover/12.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 12",
    description: "Kyiv Reservoir, Kyiv Region, Ukraine"
  },
  {
    id: 13,
    src: "/land_rover/13.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 13",
    description: "Chernihiv Region, Ukraine"
  },
  {
    id: 14,
    src: "/land_rover/14.jpeg",
    alt: "Land Rover Discovery Sport 2017 - Photo 14",
    description: "Zhytomyr Region, Ukraine"
  }
];
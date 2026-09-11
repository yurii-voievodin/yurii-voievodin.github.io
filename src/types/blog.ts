import type { PostDateStyle } from '@/lib/date';

export interface Photo {
  id: number;
  src: string;
  alt: string;
  description: string;
}

export interface GalleryPanel {
  heading: string;
  body: string;
  note?: string;
  cta?: { label: string; href: string };
}

export interface PhotoGallery {
  photos: Photo[];
  hero: {
    image: string;
    alt: string;
    title: string;
    subtitle: string;
  };
  dateFormat?: PostDateStyle;
  intro?: GalleryPanel;
  galleryHeading?: string;
  outro?: GalleryPanel[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  gallery?: PhotoGallery;
  tags?: string[];
  featuredImage?: string;
}

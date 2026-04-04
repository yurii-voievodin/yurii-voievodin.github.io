import { ComponentType } from 'react';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string; // Optional for component-based posts
  component?: ComponentType<{ post: Post }>; // Optional component for specialized posts
  tags?: string[];
  featuredImage?: string;
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  description: string;
}


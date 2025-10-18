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

export interface CVSection {
  title: string;
  items: CVItem[];
}

export interface CVItem {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  skills?: string[];
  htmlContent?: string;
}

export interface HTMLCVSection {
  title: string;
  htmlContent: string;
}


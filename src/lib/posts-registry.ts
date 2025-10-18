import { Post } from '@/types/blog';
import { austriaPostMetadata } from './austria-2025-data';
import { italyPostMetadata } from './italy-2025-data';
import { norwayPostMetadata } from './norway-2025-data';
import { firstAndSecondCarPostMetadata } from './first-and-second-car-data';
import { landRoverPostMetadata } from './land-rover-data';
import { featurePostMetadata } from './feature-data';

// Central registry of all blog posts
export const allPosts: Post[] = [
  austriaPostMetadata,
  italyPostMetadata,
  norwayPostMetadata,
  firstAndSecondCarPostMetadata,
  landRoverPostMetadata,
  featurePostMetadata,
];

// Helper function to get a post by slug
export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find(post => post.slug === slug);
}

// Helper function to get all post slugs
export function getAllPostSlugs(): string[] {
  return allPosts.map(post => post.slug);
}

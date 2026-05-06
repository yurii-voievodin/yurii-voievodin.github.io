import { Post } from '@/types/blog';
import { bulgariaPostMetadata } from './bulgaria-2026-data';
import { kyivPostMetadata } from './kyiv-2025-data';
import { polandPostMetadata } from './poland-2025-data';
import { austriaPostMetadata } from './austria-2025-data';
import { italyPostMetadata } from './italy-2025-data';
import { norwayPostMetadata } from './norway-2025-data';
import { landRoverPostMetadata } from './land-rover-data';

// Central registry of all blog posts
export const allPosts: Post[] = [
  bulgariaPostMetadata,
  polandPostMetadata,
  austriaPostMetadata,
  italyPostMetadata,
  norwayPostMetadata,
  kyivPostMetadata,
  landRoverPostMetadata,
];

// Helper function to get a post by slug
export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find(post => post.slug === slug);
}

// Helper function to get all post slugs
export function getAllPostSlugs(): string[] {
  return allPosts.map(post => post.slug);
}

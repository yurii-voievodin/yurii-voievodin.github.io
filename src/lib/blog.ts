import { Post } from '@/types/blog';
import { allPosts, getPostBySlug, getAllPostSlugs as getPostSlugs } from './posts-registry';

export function getSortedPostsData(): Post[] {
  return [...allPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs() {
  return getPostSlugs().map(slug => ({ params: { slug } }));
}

export function getPostData(slug: string): Post {
  const post = getPostBySlug(slug);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  return post;
}


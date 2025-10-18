import { Post } from '@/types/blog';
import { allPosts, getPostBySlug } from './posts-registry';

export function getSortedPostsData(): Post[] {
  // Sort posts by date (newest first)
  return [...allPosts].sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  return allPosts.map((post) => {
    return {
      params: {
        slug: post.slug
      }
    };
  });
}

export function getPostData(slug: string): Post {
  const post = getPostBySlug(slug);

  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }

  return post;
}



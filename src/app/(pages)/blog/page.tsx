import { getSortedPostsData } from '@/lib/blog';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: "Travel Blog - Yurii Voievodin",
  description: "Stories and adventures from my travels around the world. Exploring new places, capturing memories, and sharing experiences.",
  openGraph: {
    title: "Travel Blog - Yurii Voievodin",
    description: "Stories and adventures from my travels around the world. Exploring new places, capturing memories, and sharing experiences.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Travel Blog - Yurii Voievodin",
    description: "Stories and adventures from my travels around the world. Exploring new places, capturing memories, and sharing experiences.",
  },
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
          Stories and adventures from my travels around the world.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <div className="text-center py-12 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
            <p className="text-zinc-300 text-lg">
              No blog posts yet. Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


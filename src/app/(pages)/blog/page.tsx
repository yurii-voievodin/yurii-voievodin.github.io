import { getSortedPostsData } from '@/lib/blog';
import PostCard from '@/components/PostCard';
import Panel from '@/components/ui/Panel';
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
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-3">
          Travel Blog
        </h1>
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
          Stories and adventures from my travels around the world.
        </p>
        <div className="mt-3 mx-auto w-16 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <Panel className="py-12 text-center">
            <p className="text-zinc-300 text-lg">
              No blog posts yet. Check back soon for new content!
            </p>
          </Panel>
        )}
      </div>
    </div>
  );
}


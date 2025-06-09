import { getSortedPostsData } from '@/lib/blog';
import PostCard from '@/components/PostCard';

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Posts
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, programming, and technology.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts yet. Check back soon for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


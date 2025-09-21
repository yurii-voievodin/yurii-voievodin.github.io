import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { Post } from '@/types/blog';
import { format } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-zinc-800/50 rounded-lg shadow-lg hover:shadow-xl transition-all border border-zinc-700/50 p-6 hover:border-zinc-600/50">
      <div className="flex gap-4">
        {post.featuredImage && (
          <div className="flex-shrink-0">
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-semibold text-zinc-100 mb-2 hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
          </Link>

          <p className="text-zinc-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-zinc-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{format(new Date(post.date), 'MMM, yyyy')}</span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex space-x-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}


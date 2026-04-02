import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { Post } from '@/types/blog';
import { format } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-zinc-800/50 rounded-lg shadow-lg hover:shadow-xl transition-all border border-zinc-700/50 hover:border-violet-500/30 border-l-2 border-l-violet-500/50 overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {post.featuredImage && (
          <div className="relative w-full h-48 sm:w-40 sm:h-auto sm:min-h-[160px] flex-shrink-0">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex-1 min-w-0 p-5 sm:p-6">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-semibold text-zinc-100 mb-2 hover:text-violet-400 transition-colors">
              {post.title}
            </h2>
          </Link>

          <p className="text-zinc-300 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-zinc-400">
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <Calendar size={16} />
              <span>{format(new Date(post.date), 'MMM, yyyy')}</span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full border border-violet-500/20"
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


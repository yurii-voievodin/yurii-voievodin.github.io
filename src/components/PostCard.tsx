import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from '@/components/icons';
import { Post } from '@/types/blog';
import { formatPostDate } from '@/lib/date';
import Panel from '@/components/ui/Panel';
import Tag from '@/components/ui/Tag';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Panel
      as="article"
      className="relative overflow-hidden border-l-2 border-l-violet-500/50 transition-all hover:border-violet-500/30 hover:shadow-xl"
    >
      <div className="flex flex-col sm:flex-row">
        {post.featuredImage && (
          <div className="relative w-full h-48 sm:w-40 sm:h-auto sm:min-h-[160px] flex-shrink-0">
            <Image
              src={post.featuredImage}
              alt=""

              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex-1 min-w-0 p-5 sm:p-6">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
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
              <span>{formatPostDate(post.date, 'shortMonthYear')}</span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Panel>
  );
}

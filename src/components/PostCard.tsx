import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { Post } from '@/types/blog';
import { format } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar size={16} />
            <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
          </div>
          
          {post.readTime && (
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex space-x-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}


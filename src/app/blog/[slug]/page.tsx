import { getAllPostSlugs, getPostData } from '@/lib/blog';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.params.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center space-x-6 text-gray-500 mb-6">
          <div className="flex items-center space-x-2">
            <Calendar size={18} />
            <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
          </div>
          
          {post.readTime && (
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}


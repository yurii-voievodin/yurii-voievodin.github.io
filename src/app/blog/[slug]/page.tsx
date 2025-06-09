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
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Blog
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center space-x-6 text-zinc-400 mb-6">
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
                className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div 
        className="prose prose-lg max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-100 prose-code:bg-zinc-800 prose-code:text-zinc-100 prose-pre:bg-zinc-800 prose-pre:text-zinc-100 prose-blockquote:border-zinc-600 prose-blockquote:text-zinc-400"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}


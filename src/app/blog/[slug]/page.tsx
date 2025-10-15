import { getAllPostSlugs, getPostData } from '@/lib/blog';
import { Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import FutureTechPost from '@/components/blog-posts/FutureTechPost';
import LandRoverPost from '@/components/blog-posts/LandRoverPost';
import NorwayPost from '@/components/blog-posts/NorwayPost';
import ItalyPost from '@/components/blog-posts/ItalyPost';
import AustriaPost from '@/components/blog-posts/AustriaPost';

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

  // Check for enhanced post components
  if (slug === 'feature') {
    return <FutureTechPost post={post} />;
  }

  if (slug === 'land_rover') {
    return <LandRoverPost post={post} />;
  }

  if (slug === 'norway-2025') {
    return <NorwayPost post={post} />;
  }

  if (slug === 'italy-2025') {
    return <ItalyPost post={post} />;
  }

  if (slug === 'austria-2025') {
    return <AustriaPost post={post} />;
  }

  // Default blog post layout with updated styling
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
        >
          <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
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
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-400 text-sm rounded-full border border-violet-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div 
        className="prose prose-lg max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-100 prose-code:bg-zinc-800 prose-code:text-zinc-100 prose-pre:bg-zinc-800 prose-pre:text-zinc-100 prose-blockquote:border-zinc-600 prose-blockquote:text-zinc-400"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}


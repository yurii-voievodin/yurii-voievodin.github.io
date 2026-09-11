import { getAllPostSlugs, getPostData } from '@/lib/blog';
import { Calendar } from '@/components/icons';
import BackLink from '@/components/ui/BackLink';
import Tag from '@/components/ui/Tag';
import { formatPostDate } from '@/lib/date';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);

  const description = post.excerpt || `Read ${post.title} on Yurii Voievodin's travel blog`;
  const imageUrl = post.featuredImage
    ? `${siteConfig.url}${post.featuredImage}`
    : undefined;

  return {
    title: `${post.title} - Yurii Voievodin`,
    description,
    keywords: post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description,
      url: `${siteConfig.url}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [siteConfig.author.name],
      tags: post.tags,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title: post.title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.params.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostData(slug);

  // Check if post has a custom component
  if (post.component) {
    const PostComponent = post.component;
    return <PostComponent post={post} />;
  }

  // Default blog post layout with updated styling
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <BackLink href="/blog">Back to Blog</BackLink>

        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center space-x-6 text-zinc-400 mb-6">
          <div className="flex items-center space-x-2">
            <Calendar size={18} />
            <span>{formatPostDate(post.date, 'long')}</span>
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Tag key={tag} size="md">
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>

      {post.content && (
        <div
          className="prose prose-lg max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-100 prose-code:bg-[var(--card-bg-strong)] prose-code:text-zinc-100 prose-pre:bg-[var(--card-bg-strong)] prose-pre:text-zinc-100 prose-blockquote:border-[var(--rail)] prose-blockquote:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}
    </article>
  );
}


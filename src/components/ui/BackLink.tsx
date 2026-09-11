import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeft } from '@/components/icons';

/** The "Back to …" link that heads the CV, blog post, project and Q&A pages. */
export default function BackLink({
  href,
  children,
  className = 'mb-6',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text font-medium text-transparent transition-all hover:from-violet-300 hover:to-purple-300 ${className}`}
    >
      <ArrowLeft
        className="mr-2 text-violet-400 transition-colors hover:text-violet-300"
        size={16}
      />
      {children}
    </Link>
  );
}

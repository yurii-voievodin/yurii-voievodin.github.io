import Link from 'next/link';
import type { ReactNode } from 'react';

const STYLE = 'text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2';

export default function InlineLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = `${STYLE} ${className}`.trim();

  if (!href.startsWith('/')) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

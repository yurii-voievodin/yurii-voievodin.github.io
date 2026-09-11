import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

const BASE =
  'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-medium border transition-all cursor-pointer';

const variants: Record<ButtonVariant, string> = {
  primary:
    'border-transparent bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-400 hover:to-purple-400',
  secondary:
    'border-[var(--border-strong)] bg-[var(--surface-control)] text-zinc-200 hover:border-[var(--rail)] hover:brightness-125',
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  external,
  className = '',
}: ButtonProps) {
  const classes = `${BASE} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
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

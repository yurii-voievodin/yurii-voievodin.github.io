import type { ReactNode } from 'react';

type HeadingSize = 'sm' | 'md' | 'lg';

const sizes: Record<HeadingSize, string> = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
};

/** Section title, optionally preceded by a violet icon. */
export default function SectionHeading({
  children,
  size = 'md',
  icon,
  className = '',
}: {
  children: ReactNode;
  size?: HeadingSize;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`font-bold text-zinc-100 ${sizes[size]} ${icon ? 'flex items-center' : ''} ${className}`}>
      {icon && <span className="mr-3 text-violet-400">{icon}</span>}
      {children}
    </h2>
  );
}

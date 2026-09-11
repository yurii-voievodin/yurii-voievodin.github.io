import type { ElementType, ReactNode } from 'react';

interface PanelProps {
  children: ReactNode;
  frame?: 'always' | 'responsive';
  radius?: 'lg' | '2xl' | '3xl';
  as?: ElementType;
  className?: string;
  bodyClassName?: string;
  id?: string;
}

const SHELL = {
  always: {
    lg: 'border border-[var(--border-subtle)] rounded-lg shadow-lg',
    '2xl': 'border border-[var(--border-subtle)] rounded-2xl shadow-lg overflow-hidden',
    '3xl': 'border border-[var(--border-subtle)] rounded-3xl shadow-2xl overflow-hidden',
  },
  responsive: {
    lg: 'md:border md:border-[var(--border-subtle)] md:rounded-lg md:shadow-lg',
    '2xl': 'md:border md:border-[var(--border-subtle)] md:rounded-2xl md:shadow-lg md:overflow-hidden',
    '3xl': 'md:border md:border-[var(--border-subtle)] md:rounded-3xl md:shadow-2xl md:overflow-hidden',
  },
} as const;

const FILL = {
  always: 'bg-[var(--card-bg)]',
  responsive: 'md:bg-[var(--card-bg)]',
} as const;

export default function Panel({
  children,
  frame = 'always',
  radius = 'lg',
  as: Tag = 'div',
  className = '',
  bodyClassName = '',
  id,
}: PanelProps) {
  const classes = [
    SHELL[frame][radius],
    FILL[frame],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag id={id} className={classes}>
      {bodyClassName ? <div className={bodyClassName}>{children}</div> : children}
    </Tag>
  );
}

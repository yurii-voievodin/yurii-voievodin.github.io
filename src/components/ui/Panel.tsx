import type { ElementType, ReactNode } from 'react';

/**
 * The site's card surface. `responsive` panels are flat on mobile and become
 * cards from `md` up (how the CV, projects, Q&A and security pages read);
 * `always` panels are cards at every width.
 */
interface PanelProps {
  children: ReactNode;
  frame?: 'always' | 'responsive';
  radius?: 'lg' | '2xl' | '3xl';
  /** Stronger fill with a blur, plus a border highlight on hover. */
  emphasis?: boolean;
  as?: ElementType;
  className?: string;
  /** Inner padding wrapper; pass '' to lay the body out yourself. */
  bodyClassName?: string;
  id?: string;
}

// Written out in full rather than composed, so Tailwind can see every class.
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
  always: {
    soft: 'bg-[var(--card-bg)]',
    strong: 'bg-[var(--card-bg-strong)] backdrop-blur-sm',
  },
  responsive: {
    soft: 'md:bg-[var(--card-bg)]',
    strong: 'md:bg-[var(--card-bg-strong)] md:backdrop-blur-sm',
  },
} as const;

const HOVER = {
  always: 'transition-all duration-300 hover:border-[var(--border-strong)]',
  responsive: 'transition-all duration-300 md:hover:border-[var(--border-strong)]',
} as const;

export default function Panel({
  children,
  frame = 'always',
  radius = 'lg',
  emphasis = false,
  as: Tag = 'div',
  className = '',
  bodyClassName = '',
  id,
}: PanelProps) {
  const classes = [
    SHELL[frame][radius],
    FILL[frame][emphasis ? 'strong' : 'soft'],
    emphasis ? HOVER[frame] : '',
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

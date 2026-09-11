import type { ReactNode } from 'react';

type ShellWidth = '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

const widths: Record<ShellWidth, string> = {
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
};

export default function PageShell({
  children,
  width = '4xl',
  className = '',
}: {
  children: ReactNode;
  width?: ShellWidth;
  className?: string;
}) {
  return <div className={`${widths[width]} mx-auto ${className}`.trim()}>{children}</div>;
}

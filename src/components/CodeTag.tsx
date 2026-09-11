import type { ReactNode } from 'react';

export default function CodeTag({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <code className={`bg-[var(--surface-code)] px-1.5 py-0.5 rounded text-sm ${className}`.trim()}>
      {children}
    </code>
  );
}

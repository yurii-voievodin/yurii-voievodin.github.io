import type { ReactNode } from 'react';

export default function Bullets({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul className={`list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300 ${className}`.trim()}>
      {children}
    </ul>
  );
}

import type { ReactNode } from 'react';
import GradientText from '@/components/ui/GradientText';

export default function GradientLink({
  href,
  children,
  target,
  rel,
  className = '',
}: {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}) {
  return (
    <GradientText
      as="a"
      href={href}
      target={target}
      rel={rel}
      className={`underline decoration-violet-400/50 hover:decoration-violet-300/50 ${className}`.trim()}
    >
      {children}
    </GradientText>
  );
}

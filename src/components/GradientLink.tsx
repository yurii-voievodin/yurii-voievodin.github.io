import React from 'react';

interface GradientLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

export default function GradientLink({
  href,
  children,
  target,
  rel,
  className = ''
}: GradientLinkProps) {
  const defaultClasses = 'bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50';
  const combinedClasses = className ? `${defaultClasses} ${className}` : defaultClasses;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={combinedClasses}
    >
      {children}
    </a>
  );
}

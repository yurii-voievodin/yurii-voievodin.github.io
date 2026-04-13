import React from 'react';

interface CodeTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function CodeTag({ children, className = '' }: CodeTagProps) {
  const defaultClasses = 'bg-zinc-700 px-1 rounded text-xs';
  const combinedClasses = className ? `${defaultClasses} ${className}` : defaultClasses;

  return <code className={combinedClasses}>{children}</code>;
}

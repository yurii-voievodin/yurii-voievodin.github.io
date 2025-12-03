import React from 'react';

interface CodeTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function CodeTag({ children, className = '' }: CodeTagProps) {
  const defaultClasses = 'bg-zinc-900 px-2 py-1 rounded';
  const combinedClasses = className ? `${defaultClasses} ${className}` : defaultClasses;

  return <code className={combinedClasses}>{children}</code>;
}

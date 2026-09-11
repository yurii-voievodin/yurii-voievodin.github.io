import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type GradientTextProps<T extends ElementType> = {
  children: ReactNode;
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export default function GradientText<T extends ElementType = 'span'>({
  children,
  as,
  className = '',
  ...rest
}: GradientTextProps<T>) {
  const Tag = (as ?? 'span') as ElementType;
  return (
    <Tag
      {...rest}
      className={`bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

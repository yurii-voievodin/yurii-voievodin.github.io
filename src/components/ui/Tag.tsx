import type { ReactNode } from 'react';

/** `violet` marks the site's own topics, `zinc` the quieter project references. */
type TagTone = 'violet' | 'zinc' | 'onImage';
type TagSize = 'sm' | 'md';

const tones: Record<TagTone, string> = {
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  zinc: 'bg-[var(--surface-control)] text-zinc-400 border-[var(--border-strong)]',
  /** For chips sitting on a photo, where the palette's own tones disappear. */
  onImage: 'bg-white/30 text-white border-white/40 backdrop-blur-sm drop-shadow-sm',
};

const sizes: Record<TagSize, string> = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export default function Tag({
  children,
  tone = 'violet',
  size = 'sm',
  className = '',
}: {
  children: ReactNode;
  tone?: TagTone;
  size?: TagSize;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full border whitespace-nowrap ${tones[tone]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}

interface AppStoreBadgeProps {
  href: string;
  badge: string;
  ariaLabel: string;
  alt: string;
  className?: string;
}

export default function AppStoreBadge({ href, badge, ariaLabel, alt, className = '' }: AppStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-block ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={badge} alt={alt} className="h-11 w-auto" />
    </a>
  );
}

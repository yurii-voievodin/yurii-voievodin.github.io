const APP_STORE_URL = 'https://apps.apple.com/app/id6758512309';

interface AppStoreBadgeProps {
  className?: string;
  ariaLabel?: string;
  alt?: string;
}

export default function AppStoreBadge({
  className = '',
  ariaLabel = 'Pre-order DustDrift on the App Store',
  alt = 'Download on the App Store',
}: AppStoreBadgeProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-block ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/dustdrift/app-store-badge.svg" alt={alt} className="h-11 w-auto" />
    </a>
  );
}

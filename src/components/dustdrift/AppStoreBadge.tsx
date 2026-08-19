const APP_STORE_URL = 'https://apps.apple.com/app/id6758512309';

export default function AppStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pre-order DustDrift on the App Store"
      className={`inline-block ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/dustdrift/app-store-badge.svg" alt="Download on the App Store" className="h-11 w-auto" />
    </a>
  );
}

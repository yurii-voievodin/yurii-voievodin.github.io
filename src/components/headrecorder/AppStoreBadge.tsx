const APP_STORE_URL = 'https://apps.apple.com/us/app/head-recorder-screen-webcam/id6796696067';

export default function AppStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Head Recorder on the Mac App Store"
      className={`inline-block ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/headrecorder/mac-app-store-badge.svg" alt="Download on the Mac App Store" className="h-11 w-auto" />
    </a>
  );
}

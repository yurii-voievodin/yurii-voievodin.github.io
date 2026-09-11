import Link from 'next/link';
import { Home } from '@/components/icons';

export default function Navigation() {
  return (
    <nav className="bg-[var(--surface-chrome)] border-b border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-1 text-zinc-300 hover:text-zinc-100 transition-colors"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

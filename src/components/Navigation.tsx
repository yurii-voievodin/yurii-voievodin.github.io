'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Navigation() {
  // Only show Home in the header navigation
  const headerNavigation = siteConfig.navigation.filter(
    item => item.name === 'Home'
  );

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-16">
          <div className="flex items-center space-x-8">
            {headerNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-zinc-300 hover:text-zinc-100 transition-colors"
              >
                <Home size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

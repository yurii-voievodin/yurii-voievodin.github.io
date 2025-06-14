'use client';

import Link from 'next/link';
import { Home, User, FileText, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Navigation() {
  // Filter navigation items to exclude Blog and Timeline from header
  const headerNavigation = siteConfig.navigation.filter(
    item => item.name !== 'Blog' && item.name !== 'Timeline'
  );

  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-zinc-100">
            {siteConfig.name}
          </Link>
          
          <div className="flex items-center space-x-8">
            {headerNavigation.map((item) => {
              let icon;
              if (item.name === 'Home') icon = Home;
              else if (item.name === 'Blog') icon = FileText;
              else if (item.name === 'Timeline') icon = Clock;
              else if (item.name === 'CV') icon = User;
              else icon = Home; // fallback
              
              const IconComponent = icon;
              
              return (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="flex items-center space-x-1 text-zinc-300 hover:text-zinc-100 transition-colors"
                >
                  <IconComponent size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}


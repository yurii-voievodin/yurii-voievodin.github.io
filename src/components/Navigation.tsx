'use client';

import Link from 'next/link';
import { Home, User, FileText } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Navigation() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-zinc-100">
            {siteConfig.name}
          </Link>
          
          <div className="flex items-center space-x-8">
            {siteConfig.navigation.map((item) => {
              const icon = item.name === 'Home' ? Home : item.name === 'Blog' ? FileText : User;
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


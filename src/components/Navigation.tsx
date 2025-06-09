import Link from 'next/link';
import { Home, User, FileText } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-zinc-100">
            Your Name
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="flex items-center space-x-1 text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            
            <Link 
              href="/blog" 
              className="flex items-center space-x-1 text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              <FileText size={18} />
              <span>Blog</span>
            </Link>
            
            <Link 
              href="/cv" 
              className="flex items-center space-x-1 text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              <User size={18} />
              <span>CV</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


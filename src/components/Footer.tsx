import { Github, Linkedin, Mail, Home, Clock, FileText, Heart } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const getIconForNav = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home size={16} className="mr-2" />;
      case 'Timeline':
        return <Clock size={16} className="mr-2" />;
      case 'CV':
        return <FileText size={16} className="mr-2" />;
      case 'Personal':
        return <Heart size={16} className="mr-2" />;

      default:
        return null;
    }
  };
  
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">
              Get in Touch
            </h3>
            <p className="text-zinc-300 mb-4">
              I&apos;m always interested in discussing new opportunities, 
              collaborating on projects, or just having a conversation about technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href={siteConfig.social.email} 
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href={siteConfig.social.github} 
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href={siteConfig.social.linkedin} 
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                {siteConfig.navigation.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className="text-zinc-300 hover:text-zinc-100 transition-colors flex items-center mb-2"
                  >
                    {getIconForNav(item.name)}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-400">
            © {currentYear} {siteConfig.name}. Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}


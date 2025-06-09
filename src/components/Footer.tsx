import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
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
                href="mailto:your.email@example.com" 
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/yourusername" 
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-zinc-100 mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Link 
                  href="/" 
                  className="text-zinc-300 hover:text-zinc-100 transition-colors block mb-2"
                >
                  Home
                </Link>
                <Link 
                  href="/blog" 
                  className="text-zinc-300 hover:text-zinc-100 transition-colors block mb-2"
                >
                  Blog
                </Link>
                <Link 
                  href="/cv" 
                  className="text-zinc-300 hover:text-zinc-100 transition-colors block mb-2"
                >
                  CV
                </Link>
              </div>
              <div>
                <a 
                  href="#" 
                  className="text-zinc-300 hover:text-zinc-100 transition-colors block mb-2"
                >
                  RSS Feed
                </a>
                <a 
                  href="#" 
                  className="text-zinc-300 hover:text-zinc-100 transition-colors block mb-2"
                >
                  Sitemap
                </a>
                <a 
                  href="#" 
                  className="text-zinc-300 hover:text-zinc-100 transition-colors block mb-2"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-400">
            © {currentYear} Your Name. Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}


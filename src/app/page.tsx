import Link from 'next/link';
import { ArrowRight, FileText, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-zinc-100 mb-6">
          Welcome to My Personal Blog
        </h1>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
          I&apos;m a software developer passionate about web technologies, sharing insights,
          experiences, and technical knowledge through my blog. Explore my thoughts on 
          programming, technology trends, and personal projects.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/20"
          >
            <FileText className="mr-2" size={20} />
            Read My Blog
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link 
            href="/cv" 
            className="inline-flex items-center px-6 py-3 bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700"
          >
            <User className="mr-2" size={20} />
            View My CV
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-zinc-800/50 rounded-lg p-8 shadow-lg border border-zinc-700/50">
        <h2 className="text-3xl font-bold text-zinc-100 mb-6">About Me</h2>
        <div className="prose prose-lg max-w-none text-zinc-300">
          <p>
            I&apos;m a passionate software developer with expertise in modern web technologies.
            I love building scalable applications, exploring new frameworks, and sharing 
            knowledge with the developer community.
          </p>
          <p>
            This blog serves as a platform where I document my learning journey, 
            share technical insights, and discuss various aspects of software development. 
            From React and Next.js to backend technologies and DevOps practices, 
            you&apos;ll find a wide range of topics here.
          </p>
          <p>
            When I&apos;m not coding, I enjoy reading about emerging technologies,
            contributing to open-source projects, and mentoring fellow developers.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-800/50 p-6 rounded-lg shadow-lg border border-zinc-700/50">
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            Latest from the Blog
          </h3>
          <p className="text-zinc-300 mb-4">
            Discover my latest thoughts on web development, programming best practices, 
            and technology trends.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Explore all posts
            <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
        
        <div className="bg-zinc-800/50 p-6 rounded-lg shadow-lg border border-zinc-700/50">
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            Professional Background
          </h3>
          <p className="text-zinc-300 mb-4">
            Learn more about my professional experience, skills, and educational background 
            in software development.
          </p>
          <Link 
            href="/cv" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            View my CV
            <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

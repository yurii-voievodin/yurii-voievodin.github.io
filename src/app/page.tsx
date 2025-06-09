import Link from 'next/link';
import { ArrowRight, FileText, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to My Personal Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          I&apos;m a software developer passionate about web technologies, sharing insights,
          experiences, and technical knowledge through my blog. Explore my thoughts on 
          programming, technology trends, and personal projects.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FileText className="mr-2" size={20} />
            Read My Blog
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link 
            href="/cv" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <User className="mr-2" size={20} />
            View My CV
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
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
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Latest from the Blog
          </h3>
          <p className="text-gray-600 mb-4">
            Discover my latest thoughts on web development, programming best practices, 
            and technology trends.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Explore all posts
            <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Professional Background
          </h3>
          <p className="text-gray-600 mb-4">
            Learn more about my professional experience, skills, and educational background 
            in software development.
          </p>
          <Link 
            href="/cv" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View my CV
            <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

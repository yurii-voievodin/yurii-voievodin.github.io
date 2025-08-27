import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* About Section */}
      <section className="bg-zinc-800/50 rounded-lg p-8 shadow-lg border border-zinc-700/50">
        <h2 className="text-3xl font-bold text-zinc-100 mb-6">About Me</h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src="/yurii_voievodin.png"
            alt="A photo of me"
            className="w-32 h-32 rounded-full object-cover border-4 border-zinc-700"
          />
          <div className="prose prose-lg max-w-none text-zinc-300">
            <p>
              I&apos;m a passionate software developer with many years of
              programming experience. I love building applications and exploring
              new frameworks.
            </p>
            <p>
              This blog serves as a platform where I document my journey as a
              software developer and share personal insights.
            </p>
            <p>
              When I&apos;m not coding, I enjoy reading books and watching
              movies. I also enjoy playing video games and going to the gym.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-zinc-800/50 p-6 rounded-lg shadow-lg border border-zinc-700/50">
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            Professional Background
          </h3>
          <p className="text-zinc-300 mb-4">
            Learn more about my professional experience, skills, and educational
            background in software development.
          </p>
          <Link
            href="/cv"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            View my CV
            <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>

        <div className="bg-zinc-800/50 p-6 rounded-lg shadow-lg border border-zinc-700/50">
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            Latest from the Blog
          </h3>
          <p className="text-zinc-300 mb-4">
            Discover my latest thoughts on software development, programming
            best practices, and technology trends.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Explore all posts
            <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Home - Yurii Voievodin",
  description: "Experienced software developer with 10+ years of expertise in web and mobile apps development. Proficient in Swift, modern iOS frameworks, AI-powered development tools, and implementing AI/ML features in applications.",
  openGraph: {
    title: "Home - Yurii Voievodin",
    description: "Experienced software developer with 10+ years of expertise in web and mobile apps development. Proficient in Swift, modern iOS frameworks, AI-powered development tools, and implementing AI/ML features in applications.",
    url: siteConfig.url,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Home - Yurii Voievodin",
    description: "Experienced software developer with 10+ years of expertise in web and mobile apps development. Proficient in Swift, modern iOS frameworks, AI-powered development tools, and implementing AI/ML features in applications.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-16">

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
        <span className="text-zinc-100">Yurii </span>
        <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          Voievodin
        </span>
      </h1>

      <p className="text-zinc-300 text-lg max-w-xl mb-10 leading-relaxed">
        Software developer with 10+ years of expertise in web and mobile apps. Proficient in Swift, modern frameworks for native apps, AI-powered development tools.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="/cv"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-violet-500 to-purple-500 text-white font-medium hover:from-violet-400 hover:to-purple-400 transition-all"
        >
          explore my cv
          <ArrowRight size={16} />
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-300 font-medium hover:text-zinc-100 transition-colors"
        >
          view projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

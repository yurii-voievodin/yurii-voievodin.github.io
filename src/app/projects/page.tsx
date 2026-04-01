'use client';

import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { useState } from 'react';
import CommercialProjects from '@/components/projects/CommercialProjects';
import PersonalProjects from '@/components/projects/PersonalProjects';

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState<'commercial' | 'personal'>('commercial');

    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <Link
                        href="/cv"
                        className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 transition-all font-medium"
                    >
                        <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                        Back to CV
                    </Link>
                    <Link
                        href="/security"
                        rel="nofollow"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-800/60 border border-zinc-700/50 rounded-full hover:text-zinc-300 hover:border-zinc-600/50 transition-all"
                    >
                        <Shield size={12} />
                        Security & Privacy
                    </Link>
                </div>

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
                        Projects
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        Collection of iOS, macOS, and web applications I've developed throughout my career. Each project represents different technologies, challenges, and learning experiences.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('commercial')}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeTab === 'commercial'
                                ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                                : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600/50'
                        }`}
                    >
                        Commercial
                    </button>
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeTab === 'personal'
                                ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                                : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600/50'
                        }`}
                    >
                        Personal
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="space-y-8">
                    {activeTab === 'commercial' && <CommercialProjects />}
                    {activeTab === 'personal' && <PersonalProjects />}
                </div>
            </div>
        </div>
    );
}

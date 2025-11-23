'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

type TimelineItem = {
    date?: string;
    title?: string;
    description?: string;
    comment?: string;
    data?: {
        image?: { path: string; id: string };
        symbol?: { icon: string; color: string };
        detailPage?: string;
    };
};

export default function ProjectsPage() {
    const [projects, setProjects] = useState<TimelineItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data.projects);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading projects data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen p-5 flex items-center justify-center">
                <div className="text-zinc-400">Loading projects...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto">
                {/* Back to CV Link */}
                <Link
                    href="/cv"
                    className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
                >
                    <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                    Back to CV
                </Link>

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
                        Projects
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        A collection of iOS, macOS, and web applications I've developed throughout my career. Each project represents different technologies, challenges, and learning experiences.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300"
                        >
                            <div className="p-6 md:p-10 text-zinc-100">
                                {/* Project Header */}
                                <div className="mb-6">
                                    {project.date && (
                                        <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 mb-4">
                                            {project.date}
                                        </div>
                                    )}
                                </div>

                                {/* Project Content Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                    {/* Text Content */}
                                    <div className="lg:col-span-2">
                                        {project.description && (
                                            <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-strong:text-zinc-100 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:underline prose-a:decoration-violet-400/50 hover:prose-a:decoration-violet-300/50 [&_ul]:list-disc [&_ul]:ps-5 [&_ul]:space-y-1 [&_li]:text-zinc-300">
                                                <ReactMarkdown>{project.description}</ReactMarkdown>
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Image */}
                                    {project.data?.image && (
                                        <div className="flex justify-center lg:justify-end">
                                            <div className="relative w-full max-w-sm">
                                                <Image
                                                    src={`/${project.data.image.path}`}
                                                    alt={project.data.image.id}
                                                    width={350}
                                                    height={280}
                                                    className="rounded-2xl shadow-lg border border-zinc-600/50 w-full h-auto"
                                                    priority={false}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {projects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-zinc-400">No projects found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

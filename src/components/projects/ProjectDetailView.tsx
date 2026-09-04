import Link from 'next/link';
import { ArrowLeft } from '@/components/icons';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectNav from '@/components/projects/ProjectNav';
import type { AdjacentProjects, Project, ProjectCategory } from '@/lib/projects-data';

interface ProjectDetailViewProps extends AdjacentProjects {
    category: ProjectCategory;
    project: Project;
}

export default function ProjectDetailView({ category, project, prev, next }: ProjectDetailViewProps) {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <Link
                        href="/cv"
                        className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 transition-all font-medium"
                    >
                        <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                        Back to CV
                    </Link>

                    <div className="flex gap-2">
                        <Link
                            href="/projects"
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                category === 'commercial'
                                    ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                                    : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600/50'
                            }`}
                        >
                            Commercial
                        </Link>
                        <Link
                            href="/projects/personal"
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                category === 'personal'
                                    ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                                    : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600/50'
                            }`}
                        >
                            Personal
                        </Link>
                    </div>
                </div>

                {/* Header Section */}
                <div className="mb-12">
                    <Link
                        href="/projects"
                        className="text-xs font-medium uppercase tracking-wider text-zinc-500 hover:text-violet-300 transition-colors"
                    >
                        Projects
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mt-2 mb-3">
                        {project.name}
                    </h1>
                    <p className="text-lg bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-medium">
                        {project.summary}
                    </p>
                </div>

                <ProjectCard
                    date={project.date}
                    tags={project.tags}
                    images={project.images}
                    wideImages={project.wideImages}
                    footer={project.footer}
                    showSeparator={false}
                >
                    {project.content}
                </ProjectCard>

                <ProjectNav category={category} prev={prev} next={next} />
            </div>
        </div>
    );
}

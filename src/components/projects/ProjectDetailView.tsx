import Link from 'next/link';
import BackLink from '@/components/ui/BackLink';
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
                    <BackLink href="/cv" className="">Back to CV</BackLink>

                    <div className="flex gap-2">
                        <Link
                            href="/projects"
                            aria-current={category === 'commercial' ? 'page' : undefined}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                category === 'commercial'
                                    ? 'bg-violet-500/35 text-violet-200 border border-violet-400/60'
                                    : 'bg-[var(--card-bg)] text-zinc-400 border border-[var(--border-subtle)] hover:text-zinc-300 hover:border-[var(--border-strong)]'
                            }`}
                        >
                            Commercial
                        </Link>
                        <Link
                            href="/projects/personal"
                            aria-current={category === 'personal' ? 'page' : undefined}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                category === 'personal'
                                    ? 'bg-violet-500/35 text-violet-200 border border-violet-400/60'
                                    : 'bg-[var(--card-bg)] text-zinc-400 border border-[var(--border-subtle)] hover:text-zinc-300 hover:border-[var(--border-strong)]'
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
                        className="inline-block py-2 text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-violet-300 transition-colors"
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

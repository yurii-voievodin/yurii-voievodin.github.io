import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '@/components/icons';
import type { Project, ProjectCategory } from '@/lib/projects-data';

interface ProjectNavProps {
    category: ProjectCategory;
    prev?: Project;
    next?: Project;
}

export default function ProjectNav({ category, prev, next }: ProjectNavProps) {
    if (!prev && !next) return null;

    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prev ? (
                <Link
                    href={`/projects/${category}/${prev.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-600/15 to-purple-600/15 px-6 py-5 transition-all duration-300 hover:border-violet-400/60 hover:from-violet-600/25 hover:to-purple-600/25 hover:shadow-lg hover:shadow-violet-950/40"
                >
                    <ArrowLeft
                        className="shrink-0 text-violet-300 transition-transform duration-300 group-hover:-translate-x-1.5"
                        size={26}
                    />
                    <div className="min-w-0">
                        <div className="text-xs font-medium uppercase tracking-wider text-violet-300/80">
                            Next project
                        </div>
                        <div className="mt-1 truncate text-lg font-semibold text-zinc-100 transition-colors group-hover:text-violet-200">
                            {prev.name}
                        </div>
                        <div className="mt-0.5 text-sm text-zinc-500">{prev.date}</div>
                    </div>
                </Link>
            ) : (
                <div className="hidden sm:block" />
            )}

            {next ? (
                <Link
                    href={`/projects/${category}/${next.slug}`}
                    className="group flex items-center justify-end gap-4 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-purple-600/15 to-violet-600/15 px-6 py-5 text-right transition-all duration-300 hover:border-violet-400/60 hover:from-purple-600/25 hover:to-violet-600/25 hover:shadow-lg hover:shadow-violet-950/40"
                >
                    <div className="min-w-0">
                        <div className="text-xs font-medium uppercase tracking-wider text-violet-300/80">
                            Previous project
                        </div>
                        <div className="mt-1 truncate text-lg font-semibold text-zinc-100 transition-colors group-hover:text-violet-200">
                            {next.name}
                        </div>
                        <div className="mt-0.5 text-sm text-zinc-500">{next.date}</div>
                    </div>
                    <ArrowRight
                        className="shrink-0 text-violet-300 transition-transform duration-300 group-hover:translate-x-1.5"
                        size={26}
                    />
                </Link>
            ) : (
                <div className="hidden sm:block" />
            )}
        </div>
    );
}

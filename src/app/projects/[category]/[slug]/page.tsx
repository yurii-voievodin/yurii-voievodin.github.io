import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailView from '@/components/projects/ProjectDetailView';
import {
    commercialProjects,
    getAdjacentProjects,
    getProject,
    personalProjects,
    type ProjectCategory,
} from '@/lib/projects-data';

interface PageProps {
    params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
    return [
        ...commercialProjects.map((p) => ({ category: 'commercial', slug: p.slug })),
        ...personalProjects.map((p) => ({ category: 'personal', slug: p.slug })),
    ];
}

function isProjectCategory(value: string): value is ProjectCategory {
    return value === 'commercial' || value === 'personal';
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category, slug } = await params;
    if (!isProjectCategory(category)) return {};
    const project = getProject(category, slug);
    if (!project) return {};

    return {
        title: `${project.name} — Projects — Yurii Voievodin`,
        description: project.summary,
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { category, slug } = await params;
    if (!isProjectCategory(category)) notFound();

    const project = getProject(category, slug);
    if (!project) notFound();

    const { prev, next } = getAdjacentProjects(category, slug);

    return <ProjectDetailView category={category} project={project} prev={prev} next={next} />;
}

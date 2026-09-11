import type { Metadata } from 'next';
import ProjectDetailView from '@/components/projects/ProjectDetailView';
import { getAdjacentProjects, getLatestProject } from '@/lib/projects-data';

const project = getLatestProject('commercial');

export const metadata: Metadata = {
    title: `${project.name} — Projects — Yurii Voievodin`,
    description: project.summary,
};

export default function ProjectsPage() {
    const { prev, next } = getAdjacentProjects('commercial', project.slug);

    return <ProjectDetailView category="commercial" project={project} prev={prev} next={next} />;
}

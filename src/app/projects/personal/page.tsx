import type { Metadata } from 'next';
import ProjectDetailView from '@/components/projects/ProjectDetailView';
import { getAdjacentProjects, getLatestProject } from '@/lib/projects-data';

const project = getLatestProject('personal');

export const metadata: Metadata = {
    title: `${project.name} — Projects — Yurii Voievodin`,
    description: project.summary,
};

export default function PersonalProjectsPage() {
    const { prev, next } = getAdjacentProjects('personal', project.slug);

    return <ProjectDetailView category="personal" project={project} prev={prev} next={next} />;
}

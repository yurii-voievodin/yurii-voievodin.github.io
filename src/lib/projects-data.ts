import type { AdjacentProjects, Project, ProjectCategory } from '@/types/project';
import { commercialProjects } from './projects/commercial';
import { personalProjects } from './projects/personal';

export type { AdjacentProjects, Project, ProjectCategory, ProjectImage } from '@/types/project';
export { commercialProjects, personalProjects };

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return category === 'commercial' ? commercialProjects : personalProjects;
}

export function getProject(category: ProjectCategory, slug: string): Project | undefined {
  return getProjectsByCategory(category).find((p) => p.slug === slug);
}

export function getLatestProject(category: ProjectCategory): Project {
  return getProjectsByCategory(category)[0];
}

export function getAdjacentProjects(
  category: ProjectCategory,
  slug: string,
): AdjacentProjects {
  const list = getProjectsByCategory(category);
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: list[index + 1],
  };
}

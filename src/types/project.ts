import type { ReactNode } from 'react';

export type ProjectCategory = 'commercial' | 'personal';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  date: string;
  tags: string[];
  images?: ProjectImage[];
  wideImages?: ProjectImage[];
  footer?: ReactNode;
  content: ReactNode;
}

export interface AdjacentProjects {
  prev?: Project;
  next?: Project;
}

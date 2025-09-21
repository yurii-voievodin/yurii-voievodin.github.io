export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export interface CVSection {
  title: string;
  items: CVItem[];
}

export interface CVItem {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  skills?: string[];
  htmlContent?: string;
}

export interface HTMLCVSection {
  title: string;
  htmlContent: string;
}


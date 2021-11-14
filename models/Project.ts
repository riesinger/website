export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  links: ProjectLink[];
  stack: string[];
  development?: string;
}

export interface ProjectLink {
  name: string;
  variant?: "primary" | "secondary" | "tertiary";
  url: string;
}

export interface ProjectImage {
  filename: string;
  width: number;
  height: number;
}

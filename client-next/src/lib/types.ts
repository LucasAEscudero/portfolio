export interface TProject {
  title: string;
  slug: string;
  resume: string;
  description: string;
  role?: { text: string; types: string[] };
  technologies: string[];
  links: { github: string; deploy?: string; youtube?: string };
  image: string;
  date: string;
  collaborators: boolean;
}

export interface TTechnology {
  name: string;
  // order: number;
  type: string;
  url: string;
}

export interface TFormation {
  title: string;
  academy: string;
  description: string;
  certificate?: string;
  status: string;
}

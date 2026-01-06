export interface ModuleItem {
  id: number;
  title: string;
  subtopics: string[];
}

export interface Professor {
  name: string;
  role: string;
  company?: string;
  image?: string;
  link?: string;
}

export interface Benefit {
  title: string;
  description: string;
}
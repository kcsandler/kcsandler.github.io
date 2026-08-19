export type NavIconName =
  | "about"
  | "projects"
  | "experience"
  | "skills"
  | "contact";

export type NavItem = {
  id: string;
  href: string;
  label: string;
  icon: NavIconName;
};

export type SkillGroup = {
  category: string;
  items: string[];
  span?: "full";
  column?: "left" | "right";
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  category: string;
  featured: boolean;
  summary: string;
  problem: string;
  solution: string;
  pipeline: string[];
  result?: string;
  technologies: string[];
  links: ProjectLink[];
  /** Optional screenshot in /public. When omitted, the pipeline diagram is shown instead. */
  image?: {
    src: string;
    alt: string;
  };
};

export type ExperienceRole = {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  highlights: string[];
};

export type EducationEntry = {
  school: string;
  location: string;
  degree: string;
  year: string;
  coursework: string[];
};

import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  slug: string;
  subtitle: string;
  summary: string;
  stack: string[];
  category: string;
  language: string;
  updatedAt: string;
  imageUrl: string;
  sizeKb: number;
  stars: number;
  forks: number;
  links: {
    github: string;
    live?: string;
  };
};

export type ResearchNote = {
  abstract: string;
  researchQuestion: string;
  methodology: string[];
  systemModel: string[];
  evaluation: string[];
  limitations: string[];
  futureWork: string[];
  keywords: string[];
};

export type CaseStudy = {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  repositoryUrl: string;
  liveUrl?: string;
  imageUrl: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  challenges: string[];
  impact: string[];
  metrics: Metric[];
  githubUrl: string;
  research: ResearchNote;
};

export type SkillCluster = {
  title: string;
  description: string;
  skills: string[];
  proof: string;
  accent: "electric" | "cyan" | "purple" | "violet";
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ArchitectureDiagram = {
  title: string;
  description: string;
  nodes: string[];
  icon: LucideIcon;
};

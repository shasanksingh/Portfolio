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
  links: {
    github: string;
    live?: string;
  };
};

export type CaseStudy = {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  challenges: string[];
  impact: string[];
  metrics: Metric[];
  githubUrl: string;
};

export type SkillCluster = {
  title: string;
  description: string;
  skills: string[];
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

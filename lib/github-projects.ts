import type { Project } from "@/types/content";
import { portfolioProjects } from "@/lib/content";

type GitHubRepo = {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  private: boolean;
  size: number;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string | null;
  updated_at: string;
  topics?: string[];
};

const githubUsername = "shasanksingh";
const githubReposUrl = `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated&type=owner`;
const excludedProjectSlugs = new Set(["portfolio", "myportfolio-main", "nextgen-portfolio", githubUsername]);
const prioritySlugs = [
  "ats-resume-ai",
  "sql-copilot",
  "semantic-rag-assessment",
  "paypilot-ai",
  "growify-virtual-tryon",
  "vectorshift-frontend",
  "ge-copilot",
];

const curatedProjectMap = new Map(portfolioProjects.map((project) => [project.slug, project]));

const languageLabels: Record<string, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  html: "HTML",
  css: "CSS",
  ejs: "EJS",
  php: "PHP",
  rust: "Rust",
  jupyter: "Jupyter Notebook",
};

const categoryStacks: Record<string, string[]> = {
  "AI Resume Intelligence": ["RAG", "NLP", "Resume Parsing", "Scoring"],
  "AI Copilot": ["LLM", "Planning", "Validation", "Assistant UX"],
  "AI Automation": ["Automation", "Workflow", "Guardrails", "Backend"],
  "AI Commerce": ["AI UX", "Commerce", "Product UI", "Visual AI"],
  "RAG Research": ["RAG", "Embeddings", "Vector Search", "Retrieval"],
  "Agent Workflow": ["Agents", "Copilot UI", "Task Flow", "Automation"],
  "Frontend Systems": ["React", "Product UI", "State", "Workflow UI"],
  "Realtime Web": ["Realtime", "Security", "Messaging", "Browser APIs"],
  Utility: ["Browser APIs", "Tooling", "Interaction"],
  "Web App": ["Forms", "Backend", "Data Flow"],
  Frontend: ["HTML", "CSS", "JavaScript"],
  SDK: ["SDK", "Open Source", "Systems"],
};

function ogImage(repo: string) {
  return `https://opengraph.githubassets.com/nextgen-portfolio-${repo}/shasanksingh/${repo}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function humanize(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function normalizeLabel(value: string) {
  const key = value.toLowerCase();
  return languageLabels[key] ?? humanize(value);
}

function compactDate(value: string | null) {
  if (!value) {
    return "Recently";
  }

  return value.slice(0, 10);
}

function cleanHomepage(homepage: string | null) {
  const value = homepage?.trim();
  return value && /^https?:\/\//i.test(value) ? value : undefined;
}

function inferCategory(repo: GitHubRepo) {
  const searchable = [repo.name, repo.description ?? "", repo.language ?? "", ...(repo.topics ?? [])]
    .join(" ")
    .toLowerCase();

  if (searchable.includes("resume") || searchable.includes("ats")) {
    return "AI Resume Intelligence";
  }

  if (searchable.includes("sql") || searchable.includes("copilot")) {
    return "AI Copilot";
  }

  if (searchable.includes("rag") || searchable.includes("vector") || searchable.includes("embedding")) {
    return "RAG Research";
  }

  if (searchable.includes("agent") || searchable.includes("assistant") || searchable.includes("workflow")) {
    return "Agent Workflow";
  }

  if (searchable.includes("try") || searchable.includes("commerce") || searchable.includes("shop")) {
    return "AI Commerce";
  }

  if (searchable.includes("ai") || searchable.includes("llm") || searchable.includes("genai") || searchable.includes("ml")) {
    return "AI Automation";
  }

  if (searchable.includes("sdk")) {
    return "SDK";
  }

  if (searchable.includes("chat") || searchable.includes("realtime")) {
    return "Realtime Web";
  }

  if (repo.language === "JavaScript" || repo.language === "TypeScript") {
    return "Frontend Systems";
  }

  if (repo.language === "HTML") {
    return "Frontend";
  }

  return "Web App";
}

function inferStack(repo: GitHubRepo, category: string) {
  const primaryLanguage = repo.language ? [normalizeLabel(repo.language)] : [];
  const topics = (repo.topics ?? []).map(normalizeLabel);
  const categoryStack = categoryStacks[category] ?? [];
  const stack = [...primaryLanguage, ...topics, ...categoryStack];

  return Array.from(new Set(stack)).slice(0, 5);
}

function fallbackSummary(repo: GitHubRepo, category: string) {
  if (repo.description?.trim()) {
    return repo.description.trim();
  }

  const language = repo.language ? `${normalizeLabel(repo.language)} ` : "";
  return `A ${language}repository in Shashank's ${category.toLowerCase()} track, pulled from the public GitHub corpus.`;
}

function repoToProject(repo: GitHubRepo): Project {
  const slug = slugify(repo.name);
  const curated = curatedProjectMap.get(slug);
  const category = curated?.category ?? inferCategory(repo);
  const language = repo.language ? normalizeLabel(repo.language) : curated?.language ?? "Repository";
  const live = cleanHomepage(repo.homepage) ?? curated?.links.live;

  return {
    title: curated?.title ?? humanize(repo.name),
    slug,
    subtitle: curated?.subtitle ?? `${category} repository`,
    summary: curated?.summary ?? fallbackSummary(repo, category),
    category,
    language,
    updatedAt: compactDate(repo.pushed_at ?? repo.updated_at),
    imageUrl: curated?.imageUrl ?? ogImage(repo.name),
    sizeKb: repo.size,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    stack: curated?.stack ?? inferStack(repo, category),
    links: {
      github: repo.html_url,
      ...(live ? { live } : {}),
    },
  };
}

function sortProjects(projects: Project[]) {
  return [...projects].sort((a, b) => {
    const aPriority = prioritySlugs.indexOf(a.slug);
    const bPriority = prioritySlugs.indexOf(b.slug);

    if (aPriority !== -1 || bPriority !== -1) {
      return (aPriority === -1 ? Number.MAX_SAFE_INTEGER : aPriority) - (bPriority === -1 ? Number.MAX_SAFE_INTEGER : bPriority);
    }

    return b.updatedAt.localeCompare(a.updatedAt);
  });
}

export function getFallbackProjects() {
  return sortProjects(portfolioProjects);
}

export async function fetchGitHubProjects() {
  const response = await fetch(githubReposUrl, {
    cache: "no-store",
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub responded with ${response.status}`);
  }

  const repos = (await response.json()) as GitHubRepo[];
  const projects = repos
    .filter((repo) => !repo.private && !repo.fork && !repo.archived && !repo.disabled)
    .filter((repo) => !excludedProjectSlugs.has(slugify(repo.name)))
    .map(repoToProject);

  return sortProjects(projects);
}

export function isAIFocusedProject(project: Pick<Project, "category" | "stack" | "title">) {
  const searchable = [project.category, project.title, ...project.stack].join(" ").toLowerCase();
  return ["ai", "rag", "llm", "agent", "copilot", "vector", "embedding", "machine"].some((term) => searchable.includes(term));
}

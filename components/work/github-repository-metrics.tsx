"use client";

import { Bot, ExternalLink, Github, RadioTower } from "lucide-react";

import { Icon3D } from "@/components/ui/icon-3d";
import { useGitHubProjects } from "@/hooks/use-github-projects";
import { isAIFocusedProject } from "@/lib/github-projects";

export function GitHubRepositoryMetrics() {
  const { projects, source, status } = useGitHubProjects();
  const aiProjects = projects.filter(isAIFocusedProject).length;
  const liveDemos = projects.filter((project) => project.links.live).length;
  const latestProject = projects[0];

  const metrics = [
    { label: "Public repos", value: projects.length, icon: Github },
    { label: "AI systems", value: aiProjects, icon: Bot },
    { label: "Live demos", value: liveDemos, icon: ExternalLink },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
      <div className="rounded-ui border border-line bg-white/86 p-5 shadow-panel backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
            Live GitHub corpus
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-strong px-3 py-1 text-xs font-extrabold text-muted">
            <Icon3D icon={RadioTower} action="data" tone="cyan" size="sm" />
            {source === "github" ? "Synced" : status === "loading" ? "Syncing" : "Fallback"}
          </span>
        </div>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
          {projects.length} public repositories, updated from GitHub.
        </h2>
        <p className="mt-5 leading-7 text-muted">
          New public repositories can show up in Projects automatically. The strongest builds still keep extra notes for
          architecture, tradeoffs, and results.
        </p>
        {latestProject ? (
          <a
            href={latestProject.links.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center justify-between gap-4 rounded-ui border border-line bg-surface-strong p-4 transition hover:-translate-y-0.5 hover:border-electric/40"
          >
            <span className="min-w-0">
              <span className="block text-xs font-extrabold uppercase text-electric">Latest repository signal</span>
              <strong className="mt-1 block truncate font-display text-xl">{latestProject.title}</strong>
            </span>
            <Icon3D icon={ExternalLink} action="external" tone="blue" size="sm" />
          </a>
        ) : null}
      </div>
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {metrics.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-ui border border-line bg-white/86 p-5 shadow-sm backdrop-blur">
              <Icon3D icon={Icon} action={item.label === "Public repos" ? "github" : "data"} tone="blue" size="md" />
              <strong className="mt-4 block font-display text-4xl">{item.value}</strong>
              <span className="mt-2 block text-sm font-bold text-muted">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { ArrowRight, ExternalLink, Github, RadioTower, RefreshCcw, Star } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Icon3D } from "@/components/ui/icon-3d";
import { useGitHubProjects } from "@/hooks/use-github-projects";
import { caseStudies } from "@/lib/content";
import { ProjectArtwork } from "@/components/work/project-artwork";
import { isAIFocusedProject } from "@/lib/github-projects";

export function ProjectShowcase() {
  const { projects, source, status, fetchedAt } = useGitHubProjects();
  const featuredSlugs = new Set(caseStudies.map((study) => study.slug));
  const featuredProjects = projects.filter((project) => featuredSlugs.has(project.slug));
  const otherProjects = projects.filter((project) => !featuredSlugs.has(project.slug));
  const aiProjectCount = projects.filter(isAIFocusedProject).length;
  const updatedLabel = fetchedAt ? new Date(fetchedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "Syncing";

  return (
    <section className="container grid gap-14 pb-20">
      <div className="grid gap-3 rounded-ui border border-line bg-white/82 p-4 shadow-sm backdrop-blur md:grid-cols-4">
        {[
          { label: "Repository feed", value: source === "github" ? "Live GitHub" : "Curated fallback", icon: RadioTower },
          { label: "Public projects", value: projects.length, icon: Github },
          { label: "AI focused", value: aiProjectCount, icon: Star },
          { label: status === "loading" ? "Sync status" : "Last refresh", value: status === "loading" ? "Fetching" : updatedLabel, icon: RefreshCcw },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex min-w-0 items-center gap-3 rounded-ui bg-surface-strong p-3">
              <Icon3D icon={Icon} action={item.label === "Repository feed" ? "data" : "build"} tone="blue" size="md" />
              <span className="min-w-0">
                <strong className="block truncate font-display text-lg">{item.value}</strong>
                <small className="text-xs font-bold uppercase text-muted">{item.label}</small>
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="project-card overflow-hidden rounded-ui border border-line bg-white/86 p-4 shadow-panel backdrop-blur"
            data-gsap
          >
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
              <div className="project-card-visual overflow-hidden rounded-ui border border-line bg-surface-strong shadow-[0_24px_70px_rgba(8,103,232,0.16)]">
                <ProjectArtwork project={project} />
              </div>
              <div className="flex flex-col rounded-ui border border-line bg-white/72 p-6 backdrop-blur">
                <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
                  {project.category}
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">{project.title}</h2>
                <p className="mt-4 leading-7 text-muted">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 text-sm text-muted sm:grid-cols-3">
                  <span>
                    <strong className="block text-foreground">Language</strong>
                    {project.language}
                  </span>
                  <span>
                    <strong className="block text-foreground">Updated</strong>
                    {project.updatedAt}
                  </span>
                  <span>
                    <strong className="block text-foreground">Size</strong>
                    {project.sizeKb} KB
                  </span>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={`/case-studies/${project.slug}`} icon={ArrowRight}>
                    Research Note
                  </ButtonLink>
                  <ButtonLink href={project.links.github} icon={Github} variant="secondary" target="_blank">
                    GitHub
                  </ButtonLink>
                  {project.links.live ? (
                    <ButtonLink href={project.links.live} icon={ExternalLink} variant="ghost" target="_blank">
                      Live
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="grid gap-6">
        <div className="max-w-3xl">
          <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
            GitHub repository index
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight">
            Supporting builds, prototypes, and engineering history.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project) => (
            <a
              key={project.slug}
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="project-card group overflow-hidden rounded-ui border border-line bg-white/86 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-panel"
              data-gsap
            >
              <div className="project-card-visual">
                <ProjectArtwork project={project} compact />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-extrabold uppercase text-electric">{project.category}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-muted">
                    <Icon3D icon={Star} action="build" tone="violet" size="sm" />
                    {project.stars}
                  </span>
                </div>
                <strong className="mt-3 block font-display text-xl">{project.title}</strong>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{project.summary}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-bold text-muted">
                  <span>{project.language}</span>
                  <span>{project.updatedAt}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}

import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { caseStudies, projects } from "@/lib/content";
import { ProjectArtwork } from "@/components/work/project-artwork";

export function ProjectShowcase() {
  const featuredSlugs = new Set(caseStudies.map((study) => study.slug));
  const featuredProjects = projects.filter((project) => featuredSlugs.has(project.slug));
  const otherProjects = projects.filter((project) => !featuredSlugs.has(project.slug));

  return (
    <section className="container grid gap-14 pb-20">
      <div className="grid gap-6">
        {featuredProjects.map((project) => (
          <article key={project.slug} className="rounded-ui border border-line bg-white p-4 shadow-panel" data-gsap>
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
              <div className="overflow-hidden rounded-ui border border-line bg-surface-strong">
                <ProjectArtwork project={project} />
              </div>
              <div className="flex flex-col rounded-ui border border-line bg-[#f8fbff] p-6">
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
            Complete GitHub index
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight">
            All public repositories, including earlier web projects.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project) => (
            <a
              key={project.slug}
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-ui border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-panel"
              data-gsap
            >
              <ProjectArtwork project={project} compact />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-extrabold uppercase text-electric">{project.category}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-muted">
                    <Star className="h-3.5 w-3.5" aria-hidden="true" />
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

import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { caseStudies, projects } from "@/lib/content";

export function ProjectShowcase() {
  return (
    <section className="container grid gap-8 pb-20">
      {caseStudies.map((study) => (
        <article key={study.slug} className="rounded-ui border border-line bg-white p-5 shadow-panel" data-gsap>
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
            <div className="rounded-ui bg-foreground p-6 text-white">
              <span className="text-xs font-extrabold uppercase text-cyan">{study.eyebrow}</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight">{study.title}</h2>
              <p className="mt-4 text-sm leading-6 text-white/72">{study.problem}</p>
              <div className="mt-6">
                <ButtonLink href={`/case-studies/${study.slug}`} icon={ArrowRight} variant="secondary">
                  View Presentation
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-ui border border-line bg-surface-strong p-5">
                <span className="text-xs font-extrabold uppercase text-electric">Solution</span>
                <p className="mt-3 text-sm leading-6 text-muted">{study.solution}</p>
              </div>
              <div className="rounded-ui border border-line bg-surface-strong p-5">
                <span className="text-xs font-extrabold uppercase text-electric">Architecture</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {study.architecture.slice(0, 4).map((node) => (
                    <span key={node} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-muted">
                      {node}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-ui border border-line bg-surface-strong p-5">
                <span className="text-xs font-extrabold uppercase text-electric">Impact</span>
                <p className="mt-3 text-sm leading-6 text-muted">{study.impact[0]}</p>
              </div>
            </div>
          </div>
        </article>
      ))}

      <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
        <h2 className="font-display text-3xl font-extrabold">Additional repository signals</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-ui border border-line bg-surface-strong p-4 transition hover:-translate-y-1 hover:border-electric/40"
            >
              <span className="text-xs font-extrabold uppercase text-electric">{project.subtitle}</span>
              <strong className="mt-2 block font-display text-xl">{project.title}</strong>
              <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}

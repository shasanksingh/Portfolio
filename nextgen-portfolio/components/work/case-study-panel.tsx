import { ArrowRight, Github } from "lucide-react";

import { ArchitectureFlow } from "@/components/work/architecture-flow";
import { ProjectArtwork } from "@/components/work/project-artwork";
import { ButtonLink } from "@/components/ui/button-link";
import { portfolioProjects } from "@/lib/content";
import type { CaseStudy } from "@/types/content";

type CaseStudyPanelProps = {
  study: CaseStudy;
  index: number;
  compact?: boolean;
};

export function CaseStudyPanel({ study, index, compact = false }: CaseStudyPanelProps) {
  const reversed = index % 2 === 1;
  const project = portfolioProjects.find((item) => item.slug === study.slug);
  const textOrder = compact ? "order-2 lg:order-none" : "";
  const visualOrder = compact ? "order-1 lg:order-none" : "";

  return (
    <article
      className="project-card rounded-ui border border-line bg-white/86 p-4 shadow-panel backdrop-blur transition hover:-translate-y-1 md:p-5"
      data-gsap
    >
      <div
        className={`grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className={`self-start rounded-ui border border-line bg-[#f7fbff] p-5 md:p-6 ${textOrder}`}>
          <div>
            <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              {study.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">{study.title}</h2>
            <p className={`${compact ? "mt-3 text-sm leading-6" : "mt-4 text-base leading-7"} text-muted`}>
              {study.summary}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              <strong className="text-foreground">Research question:</strong> {study.research.researchQuestion}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.stack.slice(0, compact ? 5 : study.stack.length).map((tech) => (
                <span key={tech} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {!compact ? (
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Method", value: study.research.methodology[0] },
                { label: "System", value: study.architecture.slice(0, 3).join(" -> ") },
                { label: "Impact", value: study.impact[0] },
              ].map((item) => (
                <div key={item.label} className="rounded-ui border border-line bg-white/72 p-3">
                  <span className="text-[11px] font-extrabold uppercase text-electric">{item.label}</span>
                  <p className="mt-2 line-clamp-3 text-xs font-semibold leading-5 text-muted">{item.value}</p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/case-studies/${study.slug}`} icon={ArrowRight}>
              Read Case Study
            </ButtonLink>
            <ButtonLink href={study.githubUrl} icon={Github} variant="secondary" target="_blank">
              GitHub
            </ButtonLink>
          </div>
        </div>
        <div className={`grid self-start gap-4 ${visualOrder}`}>
          <div className="project-card-visual overflow-hidden rounded-ui border border-line bg-white shadow-[0_24px_70px_rgba(8,103,232,0.14)]">
            {project ? <ProjectArtwork project={project} compact={compact} /> : null}
          </div>
          {!compact ? (
            <div className="rounded-ui border border-line bg-surface-strong p-4">
              <h3 className="mb-3 font-display text-lg font-bold">Architecture</h3>
              <ArchitectureFlow nodes={study.architecture.slice(0, 5)} />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

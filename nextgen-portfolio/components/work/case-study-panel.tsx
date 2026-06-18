import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

import { ArchitectureFlow } from "@/components/work/architecture-flow";
import { ProjectArtwork } from "@/components/work/project-artwork";
import { ButtonLink } from "@/components/ui/button-link";
import { projects } from "@/lib/content";
import type { CaseStudy } from "@/types/content";

type CaseStudyPanelProps = {
  study: CaseStudy;
  index: number;
  compact?: boolean;
};

export function CaseStudyPanel({ study, index, compact = false }: CaseStudyPanelProps) {
  const reversed = index % 2 === 1;
  const project = projects.find((item) => item.slug === study.slug);

  return (
    <article
      className="rounded-ui border border-line bg-white p-4 shadow-panel transition hover:-translate-y-1 md:p-5"
      data-gsap
    >
      <div className={`grid gap-6 lg:grid-cols-[1.02fr_0.98fr] ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="rounded-ui border border-line bg-[#f7fbff] p-6">
          <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
            {study.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">{study.title}</h2>
          <p className="mt-4 text-base leading-7 text-muted">{study.summary}</p>
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
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/case-studies/${study.slug}`} icon={ArrowRight}>
              Read Case Study
            </ButtonLink>
            <ButtonLink href={study.githubUrl} icon={Github} variant="secondary" target="_blank">
              GitHub
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-ui border border-line bg-white shadow-sm">
            {project ? <ProjectArtwork project={project} compact={compact} /> : null}
          </div>
          {!compact ? (
            <div className="rounded-ui border border-line bg-surface-strong p-4">
              <h3 className="mb-3 font-display text-lg font-bold">Architecture</h3>
              <ArchitectureFlow nodes={study.architecture.slice(0, 5)} />
            </div>
          ) : null}
          {compact ? (
            <Link href={`/case-studies/${study.slug}`} className="text-sm font-extrabold text-electric hover:text-purple">
              Problem, solution, architecture, challenges, and impact
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

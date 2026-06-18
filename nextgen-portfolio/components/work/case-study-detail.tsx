import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";

import { ArchitectureFlow } from "@/components/work/architecture-flow";
import { ProjectArtwork } from "@/components/work/project-artwork";
import { ButtonLink } from "@/components/ui/button-link";
import { projects } from "@/lib/content";
import type { CaseStudy } from "@/types/content";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  const project = projects.find((item) => item.slug === study.slug);

  return (
    <>
      <section className="container py-16 md:py-20" data-gsap>
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-electric">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to case studies
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              {study.eyebrow}
            </p>
            <h1 className="mt-5 text-balance font-display text-5xl font-extrabold leading-tight md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">{study.summary}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="rounded-ui border border-line bg-white p-4 shadow-sm">
                <span className="text-xs font-extrabold uppercase text-muted">{metric.label}</span>
                <strong className="mt-1 block font-display text-xl">{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-8 pb-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-5">
          <div className="overflow-hidden rounded-ui border border-line bg-white shadow-panel" data-gsap>
            {project ? <ProjectArtwork project={project} /> : null}
          </div>
          <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
            <span className="text-xs font-extrabold uppercase text-electric">Abstract</span>
            <p className="mt-3 leading-7 text-muted">{study.research.abstract}</p>
          </section>
          <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
            <span className="text-xs font-extrabold uppercase text-electric">Research Question</span>
            <p className="mt-3 font-display text-2xl font-bold leading-snug">{study.research.researchQuestion}</p>
          </section>
        </div>

        <div className="grid gap-5">
          <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
            <h2 className="font-display text-2xl font-extrabold">Problem</h2>
            <p className="mt-3 leading-7 text-muted">{study.problem}</p>
          </section>
          <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
            <h2 className="font-display text-2xl font-extrabold">Proposed System</h2>
            <p className="mt-3 leading-7 text-muted">{study.solution}</p>
          </section>
          <section className="rounded-ui border border-line bg-surface-strong p-6" data-gsap>
            <h2 className="font-display text-2xl font-extrabold">Architecture</h2>
            <div className="mt-5">
              <ArchitectureFlow nodes={study.architecture} />
            </div>
          </section>
          <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
            <h2 className="font-display text-2xl font-extrabold">Keywords</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.research.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-line bg-surface-strong px-3 py-1 text-xs font-bold text-muted">
                  {keyword}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="container grid gap-6 pb-20 md:grid-cols-2">
        <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
          <h2 className="font-display text-2xl font-extrabold">Methodology</h2>
          <ul className="mt-4 grid gap-3">
            {study.research.methodology.map((item) => (
              <li key={item} className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm font-semibold text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
          <h2 className="font-display text-2xl font-extrabold">Evaluation Plan</h2>
          <ul className="mt-4 grid gap-3">
            {study.research.evaluation.map((item) => (
              <li key={item} className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm font-semibold text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
          <h2 className="font-display text-2xl font-extrabold">Challenges</h2>
          <ul className="mt-4 grid gap-3">
            {study.challenges.map((challenge) => (
              <li key={challenge} className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm font-semibold text-muted">
                {challenge}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
          <h2 className="font-display text-2xl font-extrabold">Impact</h2>
          <ul className="mt-4 grid gap-3">
            {study.impact.map((item) => (
              <li key={item} className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm font-semibold text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
          <h2 className="font-display text-2xl font-extrabold">Limitations And Future Work</h2>
          <div className="mt-4 grid gap-3">
            {[...study.research.limitations, ...study.research.futureWork].map((item) => (
              <p key={item} className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm font-semibold text-muted">
                {item}
              </p>
            ))}
          </div>
        </section>
      </section>

      <section className="container pb-20">
        <div className="animated-border rounded-ui bg-white p-7 shadow-panel md:p-8" data-gsap>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold">Explore the implementation</h2>
              <p className="mt-2 text-muted">Open the GitHub link or continue through the rest of the AI portfolio.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={study.githubUrl} icon={Github} target="_blank">
                GitHub Link
              </ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                All Projects
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

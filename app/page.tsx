import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

import { AiCore } from "@/components/three/ai-core";
import { CaseStudyPanel } from "@/components/work/case-study-panel";
import { ButtonLink } from "@/components/ui/button-link";
import { ArchitecturePreview } from "@/components/work/architecture-preview";
import { caseStudies, homeSignals, portfolioProjects, profile } from "@/lib/content";

export default function HomePage() {
  const featured = caseStudies;

  return (
    <main>
      <section className="hero-section relative overflow-hidden">
        <div className="container relative grid min-w-0 items-center gap-10 py-10 md:gap-12 md:py-16 lg:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 max-w-3xl">
            <p className="mb-5 border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              AI Engineer | Research-backed product systems
            </p>
            <h1 className="hero-title max-w-full text-balance font-display font-extrabold leading-[1.02] tracking-normal text-foreground">
              Building Production AI Systems
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:mt-6 md:text-xl md:leading-8">
              RAG pipelines, agent workflows, FastAPI backends, LLM applications, and automation platforms presented with
              implementation evidence, not empty buzzwords.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/projects" icon={ArrowRight} className="w-full sm:w-auto">
                View Projects
              </ButtonLink>
              <ButtonLink href={profile.resume} icon={FileText} variant="secondary" target="_blank" className="w-full sm:w-auto">
                Download Resume
              </ButtonLink>
              <ButtonLink href="/contact" icon={Mail} variant="ghost" className="w-full sm:w-auto">
                Contact Me
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {homeSignals.slice(0, 3).map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.label} className="min-w-0 rounded-ui border border-line bg-white/78 p-4 shadow-sm backdrop-blur">
                    <Icon className="h-5 w-5 text-electric" aria-hidden="true" />
                    <strong className="mt-3 block font-display text-lg">{signal.label}</strong>
                    <span className="text-sm text-muted">{signal.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative min-w-0 md:min-h-[520px] lg:-mr-8">
            <AiCore />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/62 py-12 backdrop-blur">
        <div className="container grid gap-5 md:grid-cols-5">
          {homeSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.label} className="group flex items-center gap-3 rounded-ui p-3 transition hover:bg-surface">
                <span className="inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-surface text-electric transition group-hover:-translate-y-0.5 group-hover:text-purple">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm">{signal.label}</strong>
                  <small className="text-muted">{signal.value}</small>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="research-notes" className="container py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              Research notes
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Each featured project is written like an engineering paper.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-electric transition hover:text-purple"
          >
            Explore all case studies
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-6">
          {featured.map((study, index) => (
            <CaseStudyPanel key={study.slug} study={study} index={index} compact />
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbff] py-20">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              System thinking
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Built around retrieval, agents, and backend contracts.
            </h2>
          </div>
          <ArchitecturePreview />
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              GitHub corpus
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              {portfolioProjects.length} repositories, curated into a portfolio narrative.
            </h2>
            <p className="mt-5 leading-7 text-muted">
              The Projects page focuses on public work that supports the AI engineer story, with legacy profile-only
              repositories removed from the surface.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Curated repos", value: portfolioProjects.length },
              {
                label: "AI-focused builds",
                value: portfolioProjects.filter((item) => item.category.includes("AI") || item.category.includes("RAG")).length,
              },
              { label: "Live demos", value: portfolioProjects.filter((item) => item.links.live).length },
            ].map((item) => (
              <div key={item.label} className="rounded-ui border border-line bg-white p-5 shadow-sm">
                <strong className="block font-display text-4xl">{item.value}</strong>
                <span className="mt-2 block text-sm font-bold text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="animated-border rounded-ui bg-white p-8 shadow-panel md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
            <div>
              <Sparkles className="h-8 w-8 text-purple" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                AI product mindset with backend reliability.
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted">
              The new portfolio positions Shashank around production-ready AI: grounded answers, orchestrated agents,
              typed FastAPI backends, retrieval strategy, and interfaces that make complex systems feel usable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

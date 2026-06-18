import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

import { AiCore } from "@/components/three/ai-core";
import { CaseStudyPanel } from "@/components/work/case-study-panel";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { ArchitecturePreview } from "@/components/work/architecture-preview";
import { homeSignals, caseStudies, profile } from "@/lib/content";

export default function HomePage() {
  const featured = caseStudies.slice(0, 3);

  return (
    <main>
      <section className="container grid items-center gap-10 py-12 md:py-16 lg:min-h-[760px] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <Badge className="mb-5">AI Engineer | Production AI Systems</Badge>
          <h1 className="text-balance font-display text-5xl font-extrabold leading-[1.02] tracking-normal text-foreground md:text-6xl lg:text-7xl">
            Building Production AI Systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            AI Engineer specializing in Agentic AI, RAG Pipelines, FastAPI, LLM Applications and Intelligent Automation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/projects" icon={ArrowRight}>
              View Projects
            </ButtonLink>
            <ButtonLink href={profile.resume} icon={FileText} variant="secondary" target="_blank">
              Download Resume
            </ButtonLink>
            <ButtonLink href="/contact" icon={Mail} variant="ghost">
              Contact Me
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeSignals.slice(0, 3).map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.label}
                  className="rounded-ui border border-line bg-white/78 p-4 shadow-sm backdrop-blur"
                >
                  <Icon className="h-5 w-5 text-electric" aria-hidden="true" />
                  <strong className="mt-3 block font-display text-lg">{signal.label}</strong>
                  <span className="text-sm text-muted">{signal.value}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative min-h-[520px]">
          <AiCore />
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

      <section className="container py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Badge>Selected AI Builds</Badge>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Case studies that read like product systems, not code snippets.
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
            <Badge>System Thinking</Badge>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Built around retrieval, agents, and backend contracts.
            </h2>
          </div>
          <ArchitecturePreview />
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

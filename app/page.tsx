import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  DatabaseZap,
  FileSearch,
  FileText,
  GitBranch,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import { AiCore } from "@/components/three/ai-core";
import { CaseStudyPanel } from "@/components/work/case-study-panel";
import { GitHubRepositoryMetrics } from "@/components/work/github-repository-metrics";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon3D } from "@/components/ui/icon-3d";
import { ArchitecturePreview } from "@/components/work/architecture-preview";
import { caseStudies, homeSignals, profile } from "@/lib/content";

const heroCapabilities = [
  { label: "RAG Pipelines", value: "Embeddings, retrieval, grounded answers", icon: DatabaseZap },
  { label: "Agent Workflows", value: "Planner, tools, memory, review loops", icon: Workflow },
  { label: "LLM Guardrails", value: "Validation, prompting, safer outputs", icon: ShieldCheck },
  { label: "AI Backends", value: "FastAPI contracts around model systems", icon: Cpu },
];

const buildProcess = [
  {
    label: "Map the input",
    value: "Understand resumes, schemas, documents, or user intent before a model touches it.",
    icon: FileSearch,
    tone: "cyan" as const,
  },
  {
    label: "Design the workflow",
    value: "Split the system into retrieval, planning, validation, and service boundaries.",
    icon: Workflow,
    tone: "blue" as const,
  },
  {
    label: "Ship the interface",
    value: "Turn the backend into a product surface people can read, test, and trust.",
    icon: ServerCog,
    tone: "violet" as const,
  },
];

const toolchain = [
  { label: "Python", icon: Code2, tone: "blue" as const },
  { label: "FastAPI", icon: ServerCog, tone: "cyan" as const },
  { label: "RAG", icon: DatabaseZap, tone: "green" as const },
  { label: "Agents", icon: Bot, tone: "violet" as const },
  { label: "Vector Search", icon: Network, tone: "cyan" as const },
  { label: "GitHub Sync", icon: GitBranch, tone: "slate" as const },
];

const closingHighlights = [
  { label: "Retrieval", value: "grounded context", icon: DatabaseZap, tone: "cyan" as const },
  { label: "Agents", value: "clear tool flow", icon: Bot, tone: "violet" as const },
  { label: "Backend", value: "typed APIs", icon: ServerCog, tone: "blue" as const },
];

export default function HomePage() {
  const featured = caseStudies;

  return (
    <main>
      <section className="hero-section ai-hero-shell relative overflow-hidden">
        <div className="container relative grid min-w-0 gap-10 py-10 md:gap-12 md:py-16 lg:min-h-[760px] lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="min-w-0 max-w-3xl">
            <p className="mb-5 border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              AI Engineer | Retrieval, agents, backend systems
            </p>
            <h1 className="hero-title max-w-full text-balance font-display font-extrabold leading-[1.02] tracking-normal text-foreground">
              Building Practical AI Systems That Hold Up
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:mt-6 md:text-xl md:leading-8">
              I build AI tools around retrieval, agent workflows, FastAPI services, and clean product interfaces. The
              Projects page stays connected to GitHub, so new public repos can appear without rewriting the portfolio by hand.
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
            <div className="mt-8 lg:hidden">
              <AiCore marker="mobile" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroCapabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={capability.label}
                    className="ai-system-chip group min-w-0 rounded-ui border border-line bg-white/78 p-4 shadow-sm backdrop-blur"
                  >
                    <Icon3D icon={Icon} action="build" tone="cyan" size="lg" />
                    <strong className="mt-3 block font-display text-lg">{capability.label}</strong>
                    <span className="text-sm text-muted">{capability.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative hidden min-w-0 md:min-h-[520px] lg:-mr-8 lg:block lg:pt-8 xl:pt-10">
            <AiCore marker="desktop" />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white/62 py-12 backdrop-blur">
        <div className="container grid gap-5 md:grid-cols-5">
          {homeSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.label} className="home-signal group flex items-center gap-3 rounded-ui p-3 transition hover:bg-surface">
                <Icon3D icon={Icon} action="data" tone="blue" size="md" />
                <span>
                  <strong className="block text-sm">{signal.label}</strong>
                  <small className="text-muted">{signal.value}</small>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">
          <div className="home-lab-intro rounded-ui border border-line bg-white/86 p-6 shadow-panel backdrop-blur" data-gsap>
            <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              Build style
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Clear systems before clever demos.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              I like building the parts where models meet real software: the data path, the service boundary, and the
              interface that makes the result easy to inspect.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {buildProcess.map((step, index) => (
              <article key={step.label} className="build-step-card rounded-ui border border-line bg-white/86 p-5 shadow-sm backdrop-blur" data-gsap>
                <div className="flex items-center justify-between gap-4">
                  <Icon3D icon={step.icon} action="build" tone={step.tone} size="lg" />
                  <span className="rounded-full border border-line bg-surface-strong px-3 py-1 text-xs font-extrabold text-muted">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{step.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="toolchain-panel mt-6 rounded-ui border border-line bg-white/76 p-5 shadow-sm backdrop-blur" data-gsap>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase text-electric">Toolchain</p>
              <h3 className="mt-1 font-display text-2xl font-bold">Built with the stack behind the projects.</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {toolchain.map((tool) => (
                <span key={tool.label} className="toolchain-pill inline-flex items-center gap-2 rounded-full border border-line bg-surface-strong px-3 py-2 text-sm font-bold text-muted">
                  <Icon3D icon={tool.icon} action="build" tone={tool.tone} size="sm" />
                  {tool.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="research-notes" className="container py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              Research notes
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Featured builds with the decisions behind them.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-electric transition hover:text-purple"
          >
            Explore all case studies
            <Icon3D icon={ArrowRight} action="navigate" tone="blue" size="sm" />
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
              Architecture first, then model behavior.
            </h2>
          </div>
          <ArchitecturePreview />
        </div>
      </section>

      <section className="container py-20">
        <GitHubRepositoryMetrics />
      </section>

      <section className="container py-20">
        <div className="closing-panel rounded-ui border border-line bg-white/86 p-6 shadow-panel backdrop-blur md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1fr] lg:items-center">
            <div>
              <div className="flex gap-3">
                <Icon3D icon={BrainCircuit} action="build" tone="cyan" size="lg" />
                <Icon3D icon={Activity} action="data" tone="green" size="lg" />
                <Icon3D icon={Sparkles} action="build" tone="violet" size="lg" />
              </div>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight md:text-4xl">
                Open to AI engineering work that needs more than a demo.
              </h2>
              <p className="mt-4 leading-7 text-muted">
                I focus on the practical layer: retrieval that finds the right context, agents with understandable
                steps, APIs with clear contracts, and interfaces that make the work easy to review.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {closingHighlights.map((item) => (
                <div key={item.label} className="closing-chip rounded-ui border border-line bg-surface-strong p-4">
                  <Icon3D icon={item.icon} action="build" tone={item.tone} size="md" />
                  <strong className="mt-4 block font-display text-xl">{item.label}</strong>
                  <span className="mt-1 block text-sm font-semibold text-muted">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

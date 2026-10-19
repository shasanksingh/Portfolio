import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProjectArtwork } from "@/components/work/project-artwork";
import { profile, projects } from "@/lib/content";
import type { Project } from "@/types/content";

type SpotlightProject = { project: Project; index: string; tone: "violet" | "mint" | "coral" };

const bySlug = (slug: string) => projects.find((project) => project.slug === slug) as Project;
const spotlightProjects: SpotlightProject[] = [
  { project: bySlug("ats-resume-ai"), index: "01", tone: "violet" },
  { project: bySlug("sql-copilot"), index: "02", tone: "mint" },
  { project: bySlug("semantic-rag-assessment"), index: "03", tone: "coral" },
];
const principles = [
  ["01", "Make the system legible", "Interfaces should expose the decisions that matter - not hide them behind a chat box."],
  ["02", "Ground the model", "Useful AI starts with strong inputs, retrieval, constraints, and a clear handoff to people."],
  ["03", "Ship the whole surface", "From API contracts to product feedback, I build the layer around the model too."],
];

export function PortfolioCommandCenter() {
  return (
    <main className="portfolio-nextgen">
      <section className="ng-hero">
        <div className="ng-hero-glow ng-hero-glow-one" aria-hidden="true" />
        <div className="ng-hero-glow ng-hero-glow-two" aria-hidden="true" />
        <div className="container relative z-10">
          <div className="ng-hero-grid ng-hero-grid-portrait">
            <div className="ng-hero-copy">
              <div className="ng-status"><span className="ng-status-dot" /> Open to AI/ML opportunities</div>
              <h1><span>AI products</span><span>that</span><em>think clearly.</em></h1>
              <p className="ng-hero-description">I&apos;m Shashank Singh - an AI/ML Engineer working across retrieval, agent workflows, and product interfaces to turn complex systems into useful experiences.</p>
              <div className="ng-hero-actions"><a className="ng-button ng-button-primary" href="#work">Explore selected work <ArrowDownRight aria-hidden="true" /></a><Link className="ng-button ng-button-quiet" href="/contact">Let&apos;s work together <MoveRight aria-hidden="true" /></Link></div>
              <div className="ng-social-proof" aria-label="Professional links"><a href={profile.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a><span>Scroll to inspect</span></div>
            </div>

            <div className="ng-portrait-stage" aria-label="Cartoon miniature of Shashank Singh using six hands to build AI systems">
              <div className="ng-portrait-frame">
                <Image src="/shashank-ai-six-hands-studio.png" alt="Cartoon miniature of Shashank Singh with six hands working across a laptop, retrieval panel, AI chip, and workflow card" width={1254} height={1254} priority sizes="(max-width: 1020px) 92vw, 46vw" className="ng-portrait-image" />
                <div className="ng-miniature-type" aria-hidden="true"><span className="ng-miniature-type-primary">RAG / GenAI / AI Agents</span><span className="ng-miniature-type-secondary">Retrieval · MCP · FastAPI · LLM Evaluation</span><span className="ng-miniature-type-tertiary">Ground · Route · Validate · Ship</span></div>
              </div>
            </div>
          </div>
          <div className="ng-hero-footer"><span>AI Engineering</span><span>RAG Systems</span><span>Agent Workflows</span><span>Product Interfaces</span><span>FastAPI</span></div>
        </div>
      </section>

      <section id="work" className="ng-work-section"><div className="container"><div className="ng-section-heading"><p className="ng-eyebrow"><span /> Selected work</p><div><h2>Built to be<br /><em>understood.</em></h2><p>Every project begins with a real workflow and makes the system&apos;s reasoning easier to inspect.</p></div></div><div className="ng-work-grid">{spotlightProjects.map((item) => <article className={`ng-work-card ng-work-card-${item.tone}`} key={item.project.slug}><div className="ng-work-card-top"><span>System {item.index} / 03</span><a href={item.project.links.github} target="_blank" rel="noreferrer" aria-label={`Open ${item.project.title} on GitHub`}><ArrowUpRight aria-hidden="true" /></a></div><div className="ng-work-art"><ProjectArtwork project={item.project} compact /></div><p className="ng-card-kicker">{item.project.category}</p><h3>{item.project.title}</h3><p className="ng-card-summary">{item.project.summary}</p><div className="ng-stack-list">{item.project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div><div className="ng-card-link-row"><Link href={`/case-studies/${item.project.slug}`}>Read the case study <MoveRight aria-hidden="true" /></Link></div></article>)}</div><div className="ng-work-all"><Link href="/projects">Browse every project <ArrowUpRight aria-hidden="true" /></Link></div></div></section>

      <section className="ng-running-line" aria-label="Core capabilities"><div><span>Retrieval first</span><i>*</i><span>Human review</span><i>*</i><span>Product minded</span><i>*</i><span>Backend ready</span><i>*</i><span>Retrieval first</span><i>*</i><span>Human review</span><i>*</i><span>Product minded</span><i>*</i><span>Backend ready</span><i>*</i></div></section>

      <section className="ng-principles-section"><div className="container"><div className="ng-principles-intro"><p className="ng-eyebrow"><span /> Working philosophy</p><h2>The product is<br />the <em>proof.</em></h2><p>I bring an engineering mindset to the details people actually feel: context, controls, feedback, and the confidence to use what has been built.</p><Link href="/about" className="ng-text-link">More about my approach <MoveRight aria-hidden="true" /></Link></div><div className="ng-principles-list">{principles.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight aria-hidden="true" /></article>)}</div></div></section>

      <section className="ng-availability-section"><div className="container"><div className="ng-availability-card"><div><p className="ng-eyebrow"><span /> Current direction</p><h2>Let&apos;s build the next<br /><em>useful thing.</em></h2></div><div className="ng-availability-side"><p>I&apos;m interested in AI engineering work where the model is only one part of a thoughtful, reliable product.</p><Link className="ng-button ng-button-light" href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" /></Link></div><div className="ng-availability-orb" aria-hidden="true"><span>SS</span></div></div></div></section>
    </main>
  );
}

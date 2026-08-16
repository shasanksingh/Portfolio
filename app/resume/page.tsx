import type { Metadata } from "next";
import { Bot, DatabaseZap, Download, FileText, ServerCog, Workflow } from "lucide-react";

import { PageIntro } from "@/components/layout/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon3D } from "@/components/ui/icon-3d";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume page for Shashank Singh, AI/ML Developer and AI Engineer.",
};

const resumeSections = [
  {
    title: "AI Engineering",
    icon: Bot,
    points: ["RAG pipelines", "LLM applications", "Agentic workflows", "Prompt engineering"],
  },
  {
    title: "Retrieval Systems",
    icon: DatabaseZap,
    points: ["Vector search", "FAISS / ChromaDB", "Semantic search", "Context assembly"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    points: ["FastAPI", "Python", "REST APIs", "PostgreSQL-ready service design"],
  },
  {
    title: "Product Frontend",
    icon: Workflow,
    points: ["Next.js", "React", "TypeScript", "Tailwind and motion systems"],
  },
];

export default function ResumePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Resume"
        title="A short, evidence-first profile for AI engineering roles."
        description="Download the resume first, then scan the capability sections that map directly to the projects and research notes."
      />

      <section className="container pb-10">
        <div className="rounded-ui border border-line bg-white p-6 shadow-panel" data-gsap>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <Icon3D icon={FileText} action="download" tone="cyan" size="lg" />
              <h2 className="mt-4 font-display text-3xl font-extrabold">Shashank Singh Resume</h2>
              <p className="mt-2 max-w-2xl leading-7 text-muted">
                AI/ML Developer focused on production-ready RAG, agents, LLM applications, and FastAPI systems.
              </p>
            </div>
            <ButtonLink href={profile.resume} target="_blank" icon={Download} size="lg">
              Download Resume
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container grid gap-5 pb-20 md:grid-cols-2">
        {resumeSections.map((section) => {
          const Icon = section.icon;
          return (
            <article key={section.title} className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
              <Icon3D icon={Icon} action="build" tone="blue" size="lg" />
              <h3 className="mt-5 font-display text-2xl font-bold">{section.title}</h3>
              <ul className="mt-4 grid gap-2">
                {section.points.map((point) => (
                  <li key={point} className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm font-semibold text-muted">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>
    </main>
  );
}

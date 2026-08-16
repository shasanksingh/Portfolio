import type { Metadata } from "next";
import { Brain, Database, Layers3, ServerCog } from "lucide-react";

import { PageIntro } from "@/components/layout/page-intro";
import { Icon3D } from "@/components/ui/icon-3d";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "About Shashank Singh, AI/ML Developer focused on RAG, AI agents, FastAPI, and LLM applications.",
};

const pillars = [
  {
    title: "AI Engineering",
    body: "Generative AI workflows, model integrations, prompt systems, and assistant experiences grounded in real product needs.",
    icon: Brain,
  },
  {
    title: "Retrieval",
    body: "RAG pipelines, embeddings, FAISS/vector search, semantic matching, and answer grounding patterns.",
    icon: Database,
  },
  {
    title: "Backend Systems",
    body: "FastAPI, Python, REST APIs, validation layers, and deployable service boundaries for AI products.",
    icon: ServerCog,
  },
  {
    title: "Product Interfaces",
    body: "Next.js, React, TypeScript, Tailwind, motion, and interactive systems that make AI workflows easier to trust.",
    icon: Layers3,
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About"
        title="AI/ML Developer with a backend-first product mindset."
        description={profile.positioning}
      />

      <section className="container pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="scan-mask rounded-ui border border-line bg-white p-8 shadow-panel ai-grid" data-gsap>
            <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
              Profile
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight">
              I build intelligent systems that connect models, retrieval, APIs, and clean user workflows.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted">
              <p>
                I am Shashank Singh, an AI Engineer and Backend Developer passionate about building intelligent,
                scalable, real-world AI solutions. I specialize in Generative AI, LLM integrations, RAG pipelines,
                NLP systems, and backend development using Python, FastAPI, and REST APIs.
              </p>
              <p>
                I have hands-on experience with vector databases, semantic search systems, AI automation workflows,
                chatbot applications, and transformer-driven product ideas. I like the work where AI has to become a
                reliable system rather than an impressive demo.
              </p>
              <p>
                My current focus is production AI engineering: retrieval strategy, agent design, prompt quality,
                typed backends, and user interfaces that make complex AI behavior inspectable.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="rounded-ui border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-panel"
                  data-gsap
                >
                  <Icon3D icon={Icon} action="build" tone="cyan" size="lg" />
                  <h3 className="mt-5 font-display text-xl font-bold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

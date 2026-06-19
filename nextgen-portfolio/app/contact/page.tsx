import type { Metadata } from "next";
import { Github, Linkedin, Mail, Send } from "lucide-react";

import { PageIntro } from "@/components/layout/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Shashank Singh for AI engineering, RAG, AI agents, and FastAPI AI systems.",
};

const contactRoutes = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    body: "Best place for professional outreach, AI roles, and project collaboration.",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: profile.github,
    body: "Explore repositories, prototypes, and implementation evidence.",
    icon: Github,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Let's talk about AI systems that need to ship."
        description="Reach out for RAG systems, AI agents, FastAPI backends, LLM applications, and intelligent automation work."
      />
      <section className="container grid gap-6 pb-20 lg:grid-cols-[1fr_0.85fr]">
        <div className="grid gap-4">
          {contactRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <a
                key={route.label}
                href={route.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-ui border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-panel"
                data-gsap
              >
                <Icon className="h-7 w-7 text-electric transition group-hover:text-electric" aria-hidden="true" />
                <h2 className="mt-5 font-display text-2xl font-bold">{route.label}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{route.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-electric">
                  Open {route.label}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
        <div className="animated-border rounded-ui bg-white p-7 shadow-panel" data-gsap>
          <Mail className="h-8 w-8 text-electric" aria-hidden="true" />
          <h2 className="mt-5 font-display text-3xl font-extrabold">Current focus</h2>
          <p className="mt-4 leading-7 text-muted">
            Production-ready RAG, agentic automation, LLM product workflows, FastAPI AI services, and polished
            interfaces that help people inspect and trust AI behavior.
          </p>
          <div className="mt-6">
            <ButtonLink href="/projects" icon={Send}>
              See Project Work
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

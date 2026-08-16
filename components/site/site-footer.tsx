import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Icon3D } from "@/components/ui/icon-3d";
import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-white/76 py-12 backdrop-blur">
      <div className="absolute inset-0 project-texture opacity-35" />
      <div className="container relative grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/logo-mark.svg" alt="" width={46} height={46} />
            <span>
              <strong className="block font-display text-2xl font-extrabold">Shashank Singh</strong>
              <span className="text-sm font-bold text-electric">AI/ML Developer</span>
            </span>
          </Link>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{profile.positioning}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["RAG Systems", "AI Agents", "FastAPI", "LLM Apps"].map((item) => (
              <span key={item} className="rounded-full border border-line bg-white/82 px-3 py-1 text-xs font-extrabold text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-ui border border-line bg-white/82 p-5 shadow-panel backdrop-blur">
          <p className="text-sm font-extrabold uppercase tracking-normal text-electric">Build with me</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight">Production AI, clean interfaces, real systems.</h2>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-ui bg-electric px-5 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              <Icon3D icon={Mail} action="contact" tone="cyan" size="sm" />
              Contact
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-ui border border-line bg-white px-5 text-sm font-extrabold text-foreground transition hover:-translate-y-0.5 hover:border-electric/40"
            >
              GitHub
              <Icon3D icon={ArrowUpRight} action="external" tone="blue" size="sm" />
            </a>
          </div>
          <div className="mt-5 flex items-center gap-3">
            {[
              { label: "GitHub", href: profile.github, Icon: Github },
              { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
              { label: "Instagram", href: profile.instagram, Icon: Instagram },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white transition hover:-translate-y-0.5 hover:border-electric/40"
                aria-label={item.label}
              >
                <Icon3D icon={item.Icon} action={item.label === "GitHub" ? "github" : "external"} tone="blue" size="sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container relative mt-8 border-t border-line pt-6 text-sm font-semibold text-muted">
        Copyright 2026 Shashank Singh. AI engineering portfolio for retrieval, agents, and intelligent automation.
      </div>
    </footer>
  );
}

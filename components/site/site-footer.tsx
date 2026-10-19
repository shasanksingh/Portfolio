import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

import { Icon3D } from "@/components/ui/icon-3d";
import { profile } from "@/lib/content";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/case-studies" },
  { label: "Resume", href: "/resume" },
];

const socialLinks = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Instagram", href: profile.instagram, Icon: Instagram },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#12111d] text-[#f7f4ee]">
      <div className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-cyan-300/10 blur-[100px]" aria-hidden="true" />
      <div className="container relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,.85fr)] lg:gap-16">
          <section>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-cyan-200/80"><Sparkles className="h-4 w-4" aria-hidden="true" /> Available for thoughtful AI work</div>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[.9] tracking-[-0.065em] sm:text-6xl">Useful AI deserves a <em className="font-serif font-normal text-violet-300">human interface.</em></h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">I design the workflow around the model: clear inputs, grounded decisions, practical backends, and interfaces people can trust.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f7f4ee] px-5 text-sm font-extrabold text-[#171420] transition hover:-translate-y-1 hover:bg-white">Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              <a href="mailto:singhshasank50@gmail.com" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-extrabold transition hover:-translate-y-1 hover:border-violet-300 hover:bg-white/5"><Mail className="h-4 w-4" aria-hidden="true" /> Email Shashank</a>
            </div>
          </section>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-white/45">Explore</p>
              <nav className="mt-5 grid gap-1" aria-label="Footer navigation">
                {quickLinks.map((item) => <Link key={item.href} href={item.href} className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-white"><span>{item.label}</span><ArrowUpRight className="h-4 w-4 text-violet-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></Link>)}
              </nav>
            </section>
            <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-white/45">Elsewhere</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {socialLinks.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 text-sm font-bold text-white/75 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-white/10 hover:text-white" aria-label={`Open Shashank's ${item.label}`}><Icon3D icon={item.Icon} action={item.label === "GitHub" ? "github" : "external"} tone="blue" size="sm" />{item.label}</a>)}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 Shashank Singh. Built for clear thinking.</span>
          <span>AI engineering / retrieval / agents / product systems</span>
        </div>
      </div>
    </footer>
  );
}

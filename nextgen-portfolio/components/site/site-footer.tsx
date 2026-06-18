import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

import { navItems, profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white/72 py-10">
      <div className="container grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Link href="/" className="font-display text-xl font-extrabold">
            Shashank Singh
          </Link>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{profile.positioning}</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white transition hover:-translate-y-0.5 hover:border-electric/40"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white transition hover:-translate-y-0.5 hover:border-electric/40"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white transition hover:-translate-y-0.5 hover:border-electric/40"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-bold text-muted transition hover:text-electric">
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

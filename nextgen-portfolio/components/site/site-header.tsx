"use client";

import { BrainCircuit, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { navItems, profile } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/82 backdrop-blur-xl">
      <nav className="container flex min-h-[76px] items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 focus-ring" onClick={() => setIsOpen(false)}>
          <span className="inline-grid h-11 w-11 place-items-center rounded-ui bg-foreground text-white shadow-glow">
            <BrainCircuit className="h-6 w-6 text-cyan" aria-hidden="true" />
          </span>
          <span className="hidden leading-tight sm:block">
            <strong className="block font-display text-base">Shashank Singh</strong>
            <small className="font-bold text-muted">AI/ML Developer</small>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-ui px-3 py-2 text-sm font-bold text-muted transition hover:bg-surface-strong hover:text-foreground",
                  active && "bg-electric/10 text-electric",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white text-foreground transition hover:-translate-y-0.5 hover:border-electric/40"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white text-foreground transition hover:-translate-y-0.5 hover:border-electric/40"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <ButtonLink href="/contact" size="sm">
            Contact
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-grid h-11 w-11 place-items-center rounded-ui border border-line bg-white lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container grid gap-2 py-4">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-ui px-3 py-3 text-sm font-bold text-muted transition hover:bg-surface-strong",
                    active && "bg-electric/10 text-electric",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}

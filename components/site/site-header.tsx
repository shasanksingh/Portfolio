"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { Icon3D } from "@/components/ui/icon-3d";
import { navItems, profile } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefetchRoutes = () => {
      navItems.filter((item) => item.href !== "/").forEach((item) => router.prefetch(item.href));
    };
    const idle = window.requestIdleCallback?.(prefetchRoutes, { timeout: 1800 });
    const timeout = idle ? undefined : window.setTimeout(prefetchRoutes, 900);

    return () => {
      if (idle) {
        window.cancelIdleCallback?.(idle);
      }
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [router]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-line bg-white/82 backdrop-blur-xl">
      <nav className="container flex min-h-[76px] items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center focus-ring" onClick={() => setIsOpen(false)} aria-label="Home">
          <span className="inline-grid h-12 w-12 place-items-center transition hover:-translate-y-0.5">
            <Image src="/logo-mark.svg" alt="Shashank Singh logo" width={48} height={48} priority />
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                onMouseEnter={() => router.prefetch(item.href)}
                onFocus={() => router.prefetch(item.href)}
                className={cn(
                  "nav-link rounded-ui px-3 py-2 text-sm font-bold text-muted transition hover:bg-surface-strong hover:text-foreground",
                  active && "active bg-electric/10 text-electric",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="site-action-button inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white text-foreground transition hover:-translate-y-0.5 hover:border-electric/40"
            aria-label="GitHub"
          >
            <Icon3D icon={Github} action="github" tone="slate" size="sm" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="site-action-button inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white text-foreground transition hover:-translate-y-0.5 hover:border-electric/40"
            aria-label="LinkedIn"
          >
            <Icon3D icon={Linkedin} action="external" tone="blue" size="sm" />
          </a>
          <ButtonLink href="/contact" size="sm">
            Contact
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="site-action-button inline-grid h-11 w-11 place-items-center rounded-ui border border-line bg-white"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <Icon3D icon={X} action="navigate" tone="violet" size="sm" />
            ) : (
              <Icon3D icon={Menu} action="navigate" tone="blue" size="sm" />
            )}
          </button>
        </div>
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
                  prefetch
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

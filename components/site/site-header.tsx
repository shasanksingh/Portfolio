"use client";

import { FileText, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon3D } from "@/components/ui/icon-3d";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { navItems, profile } from "@/lib/content";
import { cn } from "@/lib/utils";

const navigationItems = navItems.filter((item) => item.href !== "/resume");

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const routes = navigationItems.map((item) => item.href).filter((href) => href !== "/");
    const prefetchRoutes = () => routes.forEach((href) => router.prefetch(href));
    const idle = window.requestIdleCallback?.(prefetchRoutes, { timeout: 1800 });
    const timeout = idle ? undefined : window.setTimeout(prefetchRoutes, 900);

    return () => {
      if (idle) window.cancelIdleCallback?.(idle);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [router]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-line bg-background/86 backdrop-blur-xl">
      <nav className="container flex min-h-[76px] items-center justify-between gap-4" aria-label="Main navigation">
        <Link
          href="/"
          className="focus-ring group relative inline-grid h-12 w-12 shrink-0 place-items-center rounded-[18px] transition duration-300 hover:-translate-y-0.5"
          onClick={() => setIsOpen(false)}
          aria-label="Shashank Singh home"
        >
          <svg viewBox="0 0 56 56" className="h-11 w-11 overflow-visible transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-110" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="cutout-s-spectrum" x1="10" y1="10" x2="43" y2="45" gradientUnits="userSpaceOnUse"><stop stopColor="#FF745A" /><stop offset=".43" stopColor="#FFD06A" /><stop offset=".77" stopColor="#B894FF" /><stop offset="1" stopColor="#76D7FF" /></linearGradient>
              <linearGradient id="cutout-s-trace" x1="12" y1="43" x2="43" y2="13" gradientUnits="userSpaceOnUse"><stop stopColor="#FF9D78" /><stop offset=".56" stopColor="#FFD985" /><stop offset="1" stopColor="#8DEBFF" /></linearGradient>
              <filter id="cutout-s-glow" x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="1.3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              <mask id="cutout-s-ribbon-mask">
                <rect width="56" height="56" fill="white" />
                <path d="M41.1 13.1C35.8 9.2 25.9 9.4 19.8 13.1C13.7 16.8 15.2 23.3 22.1 25.7L34 29.9C40.7 32.2 41.2 38.8 35.2 42.3C29.1 45.9 19.2 44.2 13.8 39.4" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              </mask>
            </defs>
            <path d="M41.1 13.1C35.8 9.2 25.9 9.4 19.8 13.1C13.7 16.8 15.2 23.3 22.1 25.7L34 29.9C40.7 32.2 41.2 38.8 35.2 42.3C29.1 45.9 19.2 44.2 13.8 39.4" stroke="url(#cutout-s-spectrum)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" mask="url(#cutout-s-ribbon-mask)" filter="url(#cutout-s-glow)" />
            <path d="M41.1 13.1C35.8 9.2 25.9 9.4 19.8 13.1C13.7 16.8 15.2 23.3 22.1 25.7L34 29.9C40.7 32.2 41.2 38.8 35.2 42.3C29.1 45.9 19.2 44.2 13.8 39.4" stroke="url(#cutout-s-trace)" strokeWidth=".72" strokeLinecap="round" strokeDasharray="2 3" opacity=".9" />
            <path d="M44.2 12.4L47.4 12.4M45.8 10.8V14" stroke="#FF8E6E" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="11.5" cy="39.7" r="1.45" fill="#78DFFF" /><circle cx="33.2" cy="28.9" r="1.35" fill="#FFF2B9" /><circle cx="42" cy="13.2" r="1.25" fill="#FFA17E" />
          </svg>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                onMouseEnter={() => router.prefetch(item.href)}
                onFocus={() => router.prefetch(item.href)}
                className={cn("nav-link rounded-ui px-3 py-2 text-sm font-bold text-muted transition hover:text-foreground", active && "active text-foreground")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          <ThemeToggle />
          <a href={profile.github} target="_blank" rel="noreferrer" className="site-action-button inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-surface text-foreground transition hover:-translate-y-0.5 hover:border-electric/50" aria-label="GitHub">
            <Icon3D icon={Github} action="github" tone="slate" size="sm" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="site-action-button inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-surface text-foreground transition hover:-translate-y-0.5 hover:border-electric/50" aria-label="LinkedIn">
            <Icon3D icon={Linkedin} action="external" tone="blue" size="sm" />
          </a>
          <Link href="/resume" className={cn("site-action-button inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-surface text-foreground transition hover:-translate-y-0.5 hover:border-electric/50", pathname === "/resume" && "border-electric/70 bg-electric/10")} aria-label="Open resume">
            <Icon3D icon={FileText} action="download" tone="violet" size="sm" />
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <Link href="/resume" onClick={() => setIsOpen(false)} className={cn("site-action-button inline-grid h-11 w-11 place-items-center rounded-ui border border-line bg-surface", pathname === "/resume" && "border-electric/70 bg-electric/10")} aria-label="Open resume">
            <Icon3D icon={FileText} action="download" tone="violet" size="sm" />
          </Link>
          <button type="button" className="site-action-button inline-grid h-11 w-11 place-items-center rounded-ui border border-line bg-surface" onClick={() => setIsOpen((current) => !current)} aria-label="Toggle navigation" aria-expanded={isOpen}>
            {isOpen ? <Icon3D icon={X} action="navigate" tone="violet" size="sm" /> : <Icon3D icon={Menu} action="navigate" tone="blue" size="sm" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-line bg-background/96 xl:hidden">
          <div className="container grid gap-2 py-4">
            {navigationItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link key={item.href} href={item.href} prefetch onClick={() => setIsOpen(false)} className={cn("rounded-ui px-3 py-3 text-sm font-bold text-muted transition hover:bg-surface-strong hover:text-foreground", active && "bg-surface-strong text-foreground")}>
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

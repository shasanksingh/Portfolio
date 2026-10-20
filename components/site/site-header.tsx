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
        <Link href="/" className="focus-ring group relative inline-grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[14px] border border-violet-300/45 bg-[#151326] shadow-[0_14px_36px_rgba(0,0,0,.27),inset_0_1px_0_rgba(255,255,255,.18)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/80 hover:shadow-[0_18px_44px_rgba(104,82,232,.28),inset_0_1px_0_rgba(255,255,255,.25)]" onClick={() => setIsOpen(false)} aria-label="Shashank Singh home">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(200,185,255,.42),transparent_26%),linear-gradient(145deg,rgba(125,92,255,.42),rgba(52,211,153,.13))] opacity-90 transition duration-300 group-hover:opacity-100" aria-hidden="true" />
          <span className="absolute inset-[5px] rounded-[10px] border border-white/15 bg-[#131120]/70" aria-hidden="true" />
          <svg viewBox="0 0 48 48" className="relative z-10 h-9 w-9 overflow-visible" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="shashank-mark-gradient" x1="8" y1="7" x2="41" y2="41" gradientUnits="userSpaceOnUse"><stop stopColor="#F4F0FF" /><stop offset=".48" stopColor="#BCA7FF" /><stop offset="1" stopColor="#75F3D4" /></linearGradient>
              <filter id="shashank-mark-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <circle cx="24" cy="24" r="16.5" stroke="url(#shashank-mark-gradient)" strokeOpacity=".3" />
            <path d="M13.5 16.25C16.2 10.8 25.6 10.1 30.5 14.55C35.3 18.9 31.8 23.2 25.15 24.1C18.75 24.95 15.45 28.55 18.7 32.9C21.8 37.05 30.5 37.2 34.55 31.25" stroke="url(#shashank-mark-gradient)" strokeWidth="3.2" strokeLinecap="round" filter="url(#shashank-mark-glow)" />
            <circle cx="13.5" cy="16.25" r="2.45" fill="#C8BAFF" /><circle cx="34.55" cy="31.25" r="2.45" fill="#73F0D4" />
            <path d="M30.4 12.45L35.5 9.8M17.7 35.85L12.75 38.2" stroke="url(#shashank-mark-gradient)" strokeWidth="1.35" strokeLinecap="round" opacity=".85" />
            <circle cx="36.8" cy="9.1" r="1.45" fill="#A98CFF" /><circle cx="11.15" cy="38.9" r="1.45" fill="#73F0D4" />
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

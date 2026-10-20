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
          className="focus-ring group relative inline-grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-[16px] border border-violet-300/45 bg-[#111121] shadow-[0_15px_34px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/75 hover:shadow-[0_18px_44px_rgba(103,86,235,.36)]"
          onClick={() => setIsOpen(false)}
          aria-label="Shashank Singh home"
        >
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(126,97,255,.52),transparent_37%),radial-gradient(circle_at_82%_85%,rgba(73,226,200,.28),transparent_42%),linear-gradient(145deg,#211940,#10121f)] transition duration-500 group-hover:scale-110" aria-hidden="true" />
          <span className="absolute inset-[3px] rounded-[13px] border border-white/10" aria-hidden="true" />
          <svg viewBox="0 0 56 56" className="relative z-10 h-10 w-10 overflow-visible transition duration-500 group-hover:rotate-[7deg] group-hover:scale-105" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="ss-monogram-violet" x1="9" y1="10" x2="33" y2="43" gradientUnits="userSpaceOnUse"><stop stopColor="#FFF9FF" /><stop offset=".44" stopColor="#C0A8FF" /><stop offset="1" stopColor="#8E70FF" /></linearGradient>
              <linearGradient id="ss-monogram-cyan" x1="45" y1="15" x2="23" y2="46" gradientUnits="userSpaceOnUse"><stop stopColor="#ECFFFF" /><stop offset=".45" stopColor="#87F3DF" /><stop offset="1" stopColor="#69BFFF" /></linearGradient>
              <linearGradient id="ss-monogram-orbit" x1="10" y1="46" x2="46" y2="10" gradientUnits="userSpaceOnUse"><stop stopColor="#6CF0D1" stopOpacity=".28" /><stop offset=".5" stopColor="#AD92FF" stopOpacity=".94" /><stop offset="1" stopColor="#F7F2FF" stopOpacity=".36" /></linearGradient>
              <filter id="ss-monogram-glow" x="-45%" y="-45%" width="190%" height="190%"><feGaussianBlur stdDeviation="1.2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <path d="M10.1 15.4C13.7 9.4 23.4 8.7 28.1 13.1C32.7 17.4 29.1 21.7 21.4 23.2C14.3 24.6 12.7 29.2 16.3 33.4C19.6 37.4 26.9 38.3 31.3 34.8" stroke="url(#ss-monogram-orbit)" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="2 3" opacity=".86" />
            <path d="M25.8 11.8C21.9 9.1 13.6 10.2 11.7 15.7C9.8 21.4 15.8 24.1 21.2 25.6C27.2 27.3 28.1 32.2 24 36.5C20 40.8 12.8 40.7 9.8 37.2" stroke="url(#ss-monogram-violet)" strokeWidth="4.45" strokeLinecap="round" strokeLinejoin="round" filter="url(#ss-monogram-glow)" />
            <path d="M46.1 18.5C42.7 14.7 35.2 14.4 31.9 18.8C28.5 23.1 33 26.2 37.6 27.6C42.8 29.2 43.6 33.8 40.1 37.4C36.5 41.2 30.2 40.8 27.4 37.7" stroke="url(#ss-monogram-cyan)" strokeWidth="4.1" strokeLinecap="round" strokeLinejoin="round" filter="url(#ss-monogram-glow)" />
            <path d="M23.6 18.2L32.4 37.7" stroke="#F9F7FF" strokeOpacity=".72" strokeWidth="1.35" strokeLinecap="round" />
            <circle cx="28" cy="27.9" r="3.45" fill="#171429" stroke="#F6F2FF" strokeOpacity=".72" strokeWidth="1.05" />
            <path d="M26.45 27.9H29.55M28 26.35V29.45" stroke="#8DF5DF" strokeWidth="1.15" strokeLinecap="round" />
            <circle cx="10" cy="37.2" r="1.45" fill="#BDA8FF" /><circle cx="46.1" cy="18.5" r="1.35" fill="#8BF3DD" /><circle cx="25.8" cy="11.8" r="1.3" fill="#F4EFFF" />
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

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
        <Link href="/" className="focus-ring group relative inline-grid h-12 w-12 shrink-0 place-items-center overflow-hidden border border-violet-300/35 bg-[#111121] [clip-path:polygon(50%_0%,86%_11%,100%_42%,91%_76%,62%_100%,30%_94%,5%_68%,0%_32%,19%_8%)] shadow-[0_15px_34px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/70 hover:shadow-[0_18px_44px_rgba(103,86,235,.32)]" onClick={() => setIsOpen(false)} aria-label="Shashank Singh home">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(122,99,255,.38),transparent_52%),linear-gradient(145deg,rgba(124,92,255,.27),rgba(52,211,153,.14))] transition duration-500 group-hover:scale-110" aria-hidden="true" />
          <svg viewBox="0 0 56 56" className="relative z-10 h-10 w-10 overflow-visible transition duration-500 group-hover:rotate-[12deg] group-hover:scale-105" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="agent-lattice-flow" x1="10" y1="8" x2="47" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#F4F0FF" /><stop offset=".46" stopColor="#AA91FF" /><stop offset="1" stopColor="#6CF0D1" /></linearGradient>
              <filter id="agent-lattice-glow" x="-45%" y="-45%" width="190%" height="190%"><feGaussianBlur stdDeviation="1.15" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <path d="M28 5.5L40.7 12.8L48.1 27.2L41.2 42.1L28 50.1L14.7 42.1L7.9 27.2L15.3 12.8L28 5.5Z" stroke="url(#agent-lattice-flow)" strokeOpacity=".56" strokeWidth="1.25" />
            <path d="M15.4 18.1L28 11.3L40.6 18.1M12.7 31.7L28 39.9L43.3 31.7M28 11.3V39.9M15.4 18.1L43.3 31.7M40.6 18.1L12.7 31.7" stroke="url(#agent-lattice-flow)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" filter="url(#agent-lattice-glow)" />
            <path d="M20.1 28L25.2 20.2L30.4 28L35.8 20.2" stroke="#FBF9FF" strokeWidth="2.55" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="28" cy="28" r="4.25" fill="#181329" stroke="url(#agent-lattice-flow)" strokeWidth="1.65" />
            <circle cx="15.4" cy="18.1" r="2.35" fill="#B79FFF" /><circle cx="40.6" cy="18.1" r="2.35" fill="#82F0D8" /><circle cx="12.7" cy="31.7" r="2.15" fill="#8E75F5" /><circle cx="43.3" cy="31.7" r="2.15" fill="#6CF0D1" /><circle cx="28" cy="11.3" r="2.05" fill="#EEE9FF" /><circle cx="28" cy="39.9" r="2.05" fill="#A6FAE8" />
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

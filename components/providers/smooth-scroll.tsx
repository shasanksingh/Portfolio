"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 768) {
      return undefined;
    }

    let destroy: (() => void) | undefined;
    let cancelled = false;

    const load = async () => {
      const { default: Lenis } = await import("lenis");

      if (cancelled) return;

      const lenis = new Lenis({
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 0.85,
      });

      let frame = 0;

      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);

      destroy = () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
      };
    };

    void load();

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  return null;
}

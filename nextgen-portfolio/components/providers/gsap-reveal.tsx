"use client";

import { useEffect } from "react";

export function GsapReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const load = async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-gsap]").forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.55,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                once: true,
              },
            },
          );
        });
      });

      cleanup = () => context.revert();
    };

    void load();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return null;
}

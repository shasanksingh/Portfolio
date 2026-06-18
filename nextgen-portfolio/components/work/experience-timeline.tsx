"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import { experience } from "@/lib/content";

export function ExperienceTimeline() {
  return (
    <section className="container pb-20">
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-line md:left-1/2" aria-hidden="true" />
        <div className="grid gap-8">
          {experience.map((item, index) => {
            const alignRight = index % 2 === 0;
            return (
              <motion.article
                key={`${item.company}-${item.role}`}
                className={`relative grid gap-5 md:grid-cols-2 ${alignRight ? "" : "md:[&>*:first-child]:col-start-2"}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <span className="absolute left-0 top-7 z-10 inline-grid h-10 w-10 place-items-center rounded-ui bg-electric text-white shadow-glow md:left-1/2 md:-translate-x-1/2">
                  <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="ml-16 rounded-ui border border-line bg-white p-6 shadow-panel md:ml-0">
                  <span className="text-xs font-extrabold uppercase text-electric">{item.period}</span>
                  <h2 className="mt-3 font-display text-3xl font-extrabold">{item.company}</h2>
                  <p className="mt-1 font-bold text-purple">{item.role}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.summary}</p>
                  <ul className="mt-5 grid gap-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm text-muted">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

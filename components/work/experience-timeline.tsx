"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

import { Icon3D } from "@/components/ui/icon-3d";
import { experience } from "@/lib/content";

export function ExperienceTimeline() {
  return (
    <section className="container pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative grid gap-6 before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:bg-gradient-to-b before:from-electric before:via-cyan before:to-purple md:before:left-[8.5rem]">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              className="relative grid gap-4 pl-16 md:grid-cols-[8rem_1fr] md:gap-8 md:pl-0"
            >
              <div className="pt-2 md:pr-10 md:text-right">
                <span className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-xs font-extrabold text-electric shadow-sm">
                  {item.year}
                </span>
                <span className="mt-2 flex items-center gap-1.5 text-xs font-bold uppercase text-muted md:justify-end">
                  <Icon3D icon={CalendarDays} action="data" tone="blue" size="sm" />
                  {item.period}
                </span>
              </div>

              <span className="absolute left-0 top-2 z-10 inline-grid h-10 w-10 place-items-center md:left-[8.5rem] md:-translate-x-1/2">
                <Icon3D icon={BriefcaseBusiness} action="build" tone="cyan" size="md" />
              </span>

              <motion.div
                className="project-card rounded-ui border border-line bg-white p-5 shadow-panel transition hover:-translate-y-1 md:p-6"
                whileHover={{ rotateX: 1.5, rotateY: -1.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-display text-3xl font-extrabold leading-tight">{item.company}</h2>
                    <p className="mt-1 font-bold text-purple">{item.role}</p>
                  </div>
                  <span className="w-fit rounded-full border border-line bg-surface-strong px-3 py-1 text-xs font-extrabold uppercase text-electric">
                    {index === 0 ? "Current" : "Experience"}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">{item.summary}</p>
                <ul className="mt-5 grid gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm leading-6 text-muted"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

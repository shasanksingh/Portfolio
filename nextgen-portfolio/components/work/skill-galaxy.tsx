"use client";

import { motion } from "framer-motion";
import { BrainCircuit, DatabaseZap, ServerCog, Sparkles } from "lucide-react";
import { useState } from "react";

import { skillClusters } from "@/lib/content";
import { cn } from "@/lib/utils";

const accentClasses = {
  electric: "border-electric/30 bg-electric/10 text-electric",
  cyan: "border-cyan/40 bg-cyan/10 text-[#087e83]",
  purple: "border-purple/30 bg-purple/10 text-purple",
  violet: "border-violet/40 bg-violet/10 text-purple",
};

const icons = [BrainCircuit, DatabaseZap, ServerCog, Sparkles];

export function SkillGalaxy() {
  const [active, setActive] = useState(0);
  const cluster = skillClusters[active];

  return (
    <section className="container grid gap-10 pb-20 lg:grid-cols-[1fr_0.92fr] lg:items-center">
      <div className="relative min-h-[560px] rounded-ui border border-line bg-white p-6 shadow-panel ai-grid" data-gsap>
        <div className="absolute inset-10 rounded-full border border-electric/15" />
        <div className="absolute inset-20 rounded-full border border-purple/15" />
        <div className="absolute inset-32 rounded-full border border-cyan/20" />
        <motion.div
          className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-foreground text-white shadow-glow"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-center font-display text-2xl font-extrabold">
            AI
            <br />
            Galaxy
          </span>
        </motion.div>
        {skillClusters.map((item, index) => {
          const Icon = icons[index] ?? BrainCircuit;
          const positions = [
            "left-[8%] top-[17%]",
            "right-[7%] top-[24%]",
            "bottom-[18%] left-[12%]",
            "bottom-[12%] right-[10%]",
          ];
          return (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "absolute w-40 rounded-ui border bg-white p-4 text-left shadow-sm transition hover:-translate-y-1",
                positions[index],
                active === index ? "border-electric shadow-panel" : "border-line",
              )}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="h-6 w-6 text-electric" aria-hidden="true" />
              <strong className="mt-3 block font-display text-lg">{item.title}</strong>
              <small className="text-muted">{item.skills.length} skills</small>
            </motion.button>
          );
        })}
      </div>

      <div className="rounded-ui border border-line bg-white p-6 shadow-panel" data-gsap>
        <span className={cn("inline-flex min-h-8 items-center rounded-full border px-3 text-xs font-extrabold uppercase", accentClasses[cluster.accent])}>
          {cluster.title}
        </span>
        <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight">Skill graph tuned for AI products.</h2>
        <p className="mt-4 leading-7 text-muted">{cluster.description}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {cluster.skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="rounded-ui border border-line bg-surface-strong px-4 py-3 text-sm font-bold text-foreground"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

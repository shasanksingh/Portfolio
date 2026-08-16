"use client";

import { motion } from "framer-motion";
import { BrainCircuit, DatabaseZap, Layers3, ServerCog } from "lucide-react";
import { useState } from "react";

import { Icon3D } from "@/components/ui/icon-3d";
import { skillClusters } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [BrainCircuit, DatabaseZap, ServerCog, Layers3];

const accentLine = {
  electric: "from-electric to-cyan",
  cyan: "from-cyan to-electric",
  purple: "from-purple to-electric",
  violet: "from-violet to-cyan",
};

export function SkillGalaxy() {
  const [active, setActive] = useState(0);
  const selected = skillClusters[active];

  return (
    <section className="container grid gap-10 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="rounded-ui border border-line bg-white p-6 shadow-panel" data-gsap>
        <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
          Capability map
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight">
          Skills organized by the systems they help ship.
        </h2>
        <p className="mt-4 leading-7 text-muted">
          The pattern is simple to scan: retrieval, agents, backend contracts, and product interfaces that make the
          system easier to use.
        </p>
        <div className="mt-6 grid gap-3">
          {skillClusters.map((cluster, index) => {
            const Icon = icons[index] ?? BrainCircuit;
            return (
              <button
                key={cluster.title}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  "rounded-ui border p-4 text-left transition hover:-translate-y-0.5",
                  active === index ? "border-electric bg-electric/5 shadow-sm" : "border-line bg-surface-strong",
                )}
              >
                <div className="flex items-start gap-4">
                  <Icon3D icon={Icon} action="build" tone={index % 2 === 0 ? "cyan" : "violet"} size="lg" />
                  <span>
                    <strong className="block font-display text-lg">{cluster.title}</strong>
                    <small className="mt-1 block leading-5 text-muted">{cluster.description}</small>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-ui border border-line bg-white p-6 shadow-panel" data-gsap>
        <div className={`h-1.5 rounded-full bg-gradient-to-r ${accentLine[selected.accent]}`} />
        <h3 className="mt-6 font-display text-3xl font-extrabold">{selected.title}</h3>
        <p className="mt-3 leading-7 text-muted">{selected.proof}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {selected.skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="rounded-ui border border-line bg-surface-strong px-4 py-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.035 }}
            >
              <span className="text-xs font-extrabold text-electric">0{index + 1}</span>
              <strong className="mt-2 block font-display text-lg">{skill}</strong>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 rounded-ui border border-line bg-[#f8fbff] p-5">
          <h4 className="font-display text-xl font-bold">How this reads in an interview</h4>
          <p className="mt-2 text-sm leading-6 text-muted">
            The skill is always tied back to architecture: what data enters the system, what decisions happen, what
            guardrails exist, and how the user sees the result.
          </p>
        </div>
      </div>
    </section>
  );
}

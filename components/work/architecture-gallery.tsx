"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Icon3D } from "@/components/ui/icon-3d";
import { architectureDiagrams } from "@/lib/content";

export function ArchitectureGallery() {
  return (
    <section className="container grid gap-7 pb-20">
      {architectureDiagrams.map((diagram, diagramIndex) => {
        const Icon = diagram.icon;
        return (
          <motion.article
            key={diagram.title}
            className="rounded-ui border border-line bg-white p-5 shadow-panel md:p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.55, delay: diagramIndex * 0.08 }}
          >
            <div className="grid gap-7 lg:grid-cols-[0.42fr_1fr] lg:items-start">
              <div className="rounded-ui bg-foreground p-6 text-white">
                <Icon3D icon={Icon} action="build" tone="cyan" size="lg" />
                <h2 className="mt-5 font-display text-3xl font-extrabold">{diagram.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/72">{diagram.description}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-[repeat(7,minmax(0,1fr))] md:items-center">
                {diagram.nodes.map((node, index) => (
                  <motion.div
                    key={node}
                    className="grid gap-3"
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.42, delay: index * 0.08 }}
                  >
                    <div className="min-h-24 rounded-ui border border-line bg-surface-strong p-4 text-center shadow-sm">
                      <span className="text-xs font-extrabold text-electric">0{index + 1}</span>
                      <strong className="mt-2 block font-display text-base">{node}</strong>
                    </div>
                    {index < diagram.nodes.length - 1 ? (
                      <Icon3D icon={ArrowDown} action="navigate" tone="violet" size="sm" className="mx-auto md:hidden" />
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}

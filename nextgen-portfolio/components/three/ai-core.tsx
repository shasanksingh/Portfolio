"use client";

import dynamic from "next/dynamic";
import { BrainCircuit, Code2, Database, Network, Sparkles } from "lucide-react";

const AiCoreScene = dynamic(() => import("@/components/three/ai-core-scene").then((mod) => mod.AiCoreScene), {
  ssr: false,
  loading: () => <div className="h-full min-h-[480px] rounded-ui border border-line bg-white/70" />,
});

const techIcons = [
  { label: "RAG", icon: Database, className: "left-4 top-8" },
  { label: "LLM", icon: Sparkles, className: "right-8 top-20" },
  { label: "Agents", icon: BrainCircuit, className: "bottom-20 left-8" },
  { label: "FastAPI", icon: Code2, className: "bottom-8 right-8" },
  { label: "Vector", icon: Network, className: "left-1/2 top-2 -translate-x-1/2" },
];

export function AiCore() {
  return (
    <div className="relative h-full min-h-[520px] rounded-ui border border-line bg-white shadow-panel ai-grid">
      <AiCoreScene />
      <div className="pointer-events-none absolute inset-0">
        {techIcons.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`absolute ${item.className} inline-flex items-center gap-2 rounded-full border border-line bg-white/86 px-3 py-2 text-xs font-extrabold text-foreground shadow-sm backdrop-blur`}
            >
              <Icon className="h-4 w-4 text-electric" aria-hidden="true" />
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-5 bottom-5 rounded-ui border border-line bg-white/82 p-4 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <span>
            <strong className="block font-display text-lg">Interactive AI Core</strong>
            <small className="text-muted">Mouse-reactive neural particles and model orbit</small>
          </span>
          <span className="h-3 w-3 rounded-full bg-cyan shadow-[0_0_22px_rgba(22,214,217,0.8)]" />
        </div>
      </div>
    </div>
  );
}

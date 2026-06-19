"use client";

import dynamic from "next/dynamic";
import { BrainCircuit, Code2, Database, Network, Sparkles } from "lucide-react";

const AiCoreScene = dynamic(() => import("@/components/three/ai-core-scene").then((mod) => mod.AiCoreScene), {
  ssr: false,
  loading: () => <div className="h-full min-h-[360px] md:min-h-[500px]" />,
});

const techIcons = [
  { label: "RAG", icon: Database, className: "left-2 top-10 md:left-4" },
  { label: "LLM", icon: Sparkles, className: "right-3 top-24 md:right-6" },
  { label: "Agents", icon: BrainCircuit, className: "bottom-24 left-4" },
  { label: "FastAPI", icon: Code2, className: "bottom-14 right-5" },
  { label: "Vector", icon: Network, className: "left-1/2 top-2 -translate-x-1/2" },
];

export function AiCore() {
  return (
    <div className="relative h-full min-h-[380px] overflow-visible bg-transparent md:min-h-[520px]">
      <div className="absolute inset-0 -z-10 ai-core-halo" />
      <AiCoreScene />
      <div className="pointer-events-none absolute inset-0">
        {techIcons.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`absolute ${item.className} inline-flex scale-90 items-center gap-2 rounded-full border border-white/70 bg-white/64 px-3 py-2 text-xs font-extrabold text-foreground shadow-sm backdrop-blur transition sm:scale-100`}
            >
              <Icon className="h-4 w-4 text-electric" aria-hidden="true" />
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { BrainCircuit, Code2, Database, Network, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

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

function MobileCoreVisual() {
  const nodes: Array<[number, number, string]> = [
    [62, 91, "#e94f37"],
    [83, 189, "#167a7f"],
    [238, 85, "#315f9e"],
    [255, 180, "#7ed6d3"],
    [136, 58, "#7b3ff2"],
    [190, 214, "#e94f37"],
  ];

  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[360px] overflow-hidden rounded-ui border border-line bg-white/36 p-4 shadow-[0_24px_70px_rgba(23,32,42,0.08)] backdrop-blur dark:bg-white/0">
      <div className="absolute inset-0 project-texture opacity-60" />
      <svg className="relative z-10 h-full w-full" viewBox="0 0 320 270" aria-hidden="true">
        <defs>
          <linearGradient id="mobile-core" x1="62" y1="42" x2="246" y2="226" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e94f37" />
            <stop offset="0.48" stopColor="#167a7f" />
            <stop offset="1" stopColor="#315f9e" />
          </linearGradient>
          <linearGradient id="mobile-line" x1="35" y1="40" x2="290" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7ed6d3" />
            <stop offset="0.52" stopColor="#315f9e" />
            <stop offset="1" stopColor="#e94f37" />
          </linearGradient>
        </defs>
        <path d="M44 146c54-86 176-88 232-8" fill="none" stroke="url(#mobile-line)" strokeWidth="3" opacity="0.8" />
        <path d="M52 92c70 28 156 30 222 94" fill="none" stroke="#7b3ff2" strokeWidth="2.5" opacity="0.76" />
        <path d="M74 206c34-72 138-116 206-80" fill="none" stroke="#16d6d9" strokeWidth="2.5" opacity="0.74" />
        <circle cx="164" cy="136" r="58" fill="url(#mobile-core)" opacity="0.92" />
        <circle cx="164" cy="136" r="76" fill="none" stroke="#7ed6d3" strokeWidth="2" opacity="0.75" />
        <circle cx="164" cy="136" r="96" fill="none" stroke="#315f9e" strokeWidth="1.5" strokeDasharray="7 12" opacity="0.75" />
        {nodes.map(([cx, cy, color]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill={color} />
        ))}
        <path d="M99 136h130M164 70v132M115 98l98 82M214 97l-102 86" stroke="rgba(255,255,255,0.28)" strokeWidth="1.6" />
      </svg>
      <div className="absolute bottom-4 left-4 right-4 z-20 grid grid-cols-3 gap-2 text-center text-[11px] font-extrabold text-foreground">
        {["RAG", "Agents", "LLM"].map((item) => (
          <span key={item} className="rounded-full border border-line bg-white/76 px-2 py-1.5 backdrop-blur dark:bg-white/10">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AiCore() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="relative h-full min-h-[320px] overflow-visible bg-transparent md:min-h-[520px]">
      <div className="absolute inset-0 -z-10 ai-core-halo" />
      {isDesktop ? (
        <>
          <AiCoreScene />
          <div className="pointer-events-none absolute inset-0">
            {techIcons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`absolute ${item.className} inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/64 px-3 py-2 text-xs font-extrabold text-foreground shadow-sm backdrop-blur transition`}
                >
                  <Icon className="h-4 w-4 text-electric" aria-hidden="true" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <MobileCoreVisual />
      )}
    </div>
  );
}

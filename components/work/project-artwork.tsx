import {
  Bot,
  Code2,
  ContactRound,
  CreditCard,
  Database,
  FileSearch,
  Github,
  Landmark,
  MessageSquareLock,
  QrCode,
  Shirt,
  ShoppingBag,
  Smile,
  Workflow,
} from "lucide-react";

import { Icon3D } from "@/components/ui/icon-3d";
import type { Project } from "@/types/content";

const iconMap = {
  "ats-resume-ai": FileSearch,
  "sql-copilot": Database,
  "paypilot-ai": CreditCard,
  "vectorshift-frontend": Workflow,
  "growify-virtual-tryon": Shirt,
  "semantic-rag-assessment": Database,
  "ge-copilot": Bot,
  portfolio: Code2,
  shasanksingh: Github,
  "saros-sdk": Code2,
  "saros-dlmm-sdk-rs": Code2,
  "qr-code-scanner": QrCode,
  "feedback-page": ContactRound,
  "government-tax-site": Landmark,
  "encrypted-web-chat": MessageSquareLock,
  "sure-to-shop": ShoppingBag,
  "meme-generator": Smile,
  phoneboook: ContactRound,
};

const colorMap = {
  "AI Resume Intelligence": {
    shell: "from-electric via-cyan to-[#0f172a]",
    accent: "#16d6d9",
    hot: "#7b3ff2",
  },
  "AI Copilot": {
    shell: "from-purple via-electric to-cyan",
    accent: "#9d70ff",
    hot: "#16d6d9",
  },
  "AI Automation": {
    shell: "from-cyan via-electric to-purple",
    accent: "#16d6d9",
    hot: "#7b3ff2",
  },
  "Frontend Systems": {
    shell: "from-[#0f172a] via-electric to-cyan",
    accent: "#1c7cff",
    hot: "#16d6d9",
  },
  "AI Commerce": {
    shell: "from-purple via-violet to-cyan",
    accent: "#ff7adf",
    hot: "#16d6d9",
  },
  "RAG Research": {
    shell: "from-electric via-[#0f766e] to-cyan",
    accent: "#16d6d9",
    hot: "#0867e8",
  },
  "Agent Workflow": {
    shell: "from-[#111827] via-purple to-electric",
    accent: "#9d70ff",
    hot: "#16d6d9",
  },
  SDK: {
    shell: "from-[#17213a] via-[#4f46e5] to-[#16d6d9]",
    accent: "#9d70ff",
    hot: "#16d6d9",
  },
  Utility: {
    shell: "from-[#16d6d9] via-[#0867e8] to-[#17213a]",
    accent: "#16d6d9",
    hot: "#ffffff",
  },
  "Web App": {
    shell: "from-[#7b3ff2] via-[#0867e8] to-[#14213d]",
    accent: "#9d70ff",
    hot: "#16d6d9",
  },
  Frontend: {
    shell: "from-[#0867e8] via-[#7b3ff2] to-[#16d6d9]",
    accent: "#16d6d9",
    hot: "#ffffff",
  },
  "Realtime Web": {
    shell: "from-[#17213a] via-[#7b3ff2] to-[#16d6d9]",
    accent: "#16d6d9",
    hot: "#9d70ff",
  },
};

const fallbackPalette = {
  shell: "from-electric via-cyan to-purple",
  accent: "#16d6d9",
  hot: "#7b3ff2",
};

const toolLabels: Record<string, string[]> = {
  "ats-resume-ai": ["Parser", "ATS Rules", "Embeddings", "Feedback"],
  "sql-copilot": ["Planner", "Schema", "SQL Guard", "Explain"],
  "paypilot-ai": ["Intent", "Policy", "Review", "Handoff"],
  "vectorshift-frontend": ["Nodes", "Canvas", "State", "Edges"],
  "growify-virtual-tryon": ["Catalog", "Preview", "Fit", "CTA"],
  "semantic-rag-assessment": ["Chunks", "Vectors", "Top-K", "Context"],
  "ge-copilot": ["Goal", "Context", "Action", "Review"],
  "qr-code-scanner": ["Camera", "Scan", "Decode", "Result"],
  "feedback-page": ["Form", "Validate", "Store", "Review"],
  "government-tax-site": ["Info", "Forms", "Payment", "Status"],
  "encrypted-web-chat": ["Session", "Cipher", "Message", "Thread"],
  "sure-to-shop": ["Catalog", "Cart", "Filter", "Checkout"],
  "meme-generator": ["Image", "Caption", "Canvas", "Export"],
  phoneboook: ["Contact", "Search", "Edit", "List"],
};

type ProjectArtworkProps = {
  project: Pick<Project, "title" | "slug" | "category" | "language" | "stack">;
  compact?: boolean;
};

function UseCaseSvg({
  slug,
  accent,
  hot,
  compact,
}: {
  slug: string;
  accent: string;
  hot: string;
  compact: boolean;
}) {
  const svgClass = `absolute inset-x-5 ${compact ? "top-14 h-32 md:top-16 md:h-36" : "top-20 h-44"} w-[calc(100%-2.5rem)]`;

  if (slug === "sql-copilot") {
    return (
      <svg className={svgClass} viewBox="0 0 520 250" aria-hidden="true">
        <path d="M38 54h146c22 0 38 16 38 38v72c0 22-16 38-38 38H38z" fill="rgba(255,255,255,0.16)" />
        <path d="M294 44h144c24 0 44 20 44 44v78c0 24-20 44-44 44H294z" fill="rgba(255,255,255,0.12)" />
        <ellipse cx="386" cy="76" rx="68" ry="20" fill="rgba(255,255,255,0.28)" />
        <path d="M318 76v88c0 12 30 22 68 22s68-10 68-22V76" fill="none" stroke="rgba(255,255,255,0.54)" strokeWidth="6" />
        <path d="M92 96h78M92 126h106M92 156h62" stroke="white" strokeWidth="9" strokeLinecap="round" opacity="0.86" />
        <path d="M222 128h72" stroke={accent} strokeWidth="8" strokeLinecap="round" />
        <path d="M280 116l18 12-18 12" fill="none" stroke={accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M358 128h56M386 100v56" stroke={hot} strokeWidth="7" strokeLinecap="round" opacity="0.92" />
      </svg>
    );
  }

  if (slug === "ats-resume-ai") {
    return (
      <svg className={svgClass} viewBox="0 0 520 250" aria-hidden="true">
        <path d="M76 28h190l58 58v132H76z" fill="rgba(255,255,255,0.16)" />
        <path d="M266 28v58h58" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="7" />
        <path d="M118 94h118M118 126h164M118 158h92" stroke="white" strokeWidth="9" strokeLinecap="round" opacity="0.86" />
        <path d="M360 72h76M360 110h96M360 148h64" stroke={accent} strokeWidth="8" strokeLinecap="round" />
        <path d="M330 176c28 32 76 32 105-2" fill="none" stroke={hot} strokeWidth="9" strokeLinecap="round" />
        <circle cx="336" cy="70" r="11" fill={hot} />
        <circle cx="336" cy="110" r="11" fill={accent} />
        <circle cx="336" cy="150" r="11" fill="white" opacity="0.82" />
      </svg>
    );
  }

  return (
    <svg className={svgClass} viewBox="0 0 520 250" aria-hidden="true">
      <path d="M78 82h112v92H78zM318 56h124v118H318zM214 38h78v170h-78z" fill="rgba(255,255,255,0.14)" />
      <path d="M134 128h80M292 128h82M252 88v80" stroke="rgba(255,255,255,0.48)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="134" cy="128" r="17" fill={accent} />
      <circle cx="252" cy="88" r="15" fill="white" opacity="0.9" />
      <circle cx="252" cy="168" r="15" fill={hot} />
      <circle cx="374" cy="128" r="17" fill={accent} />
      <path d="M104 190h306" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.42" />
      <path d="M124 210h166" stroke={hot} strokeWidth="8" strokeLinecap="round" opacity="0.82" />
    </svg>
  );
}

function DepthLayerSvg({
  accent,
  hot,
  compact,
}: {
  accent: string;
  hot: string;
  compact: boolean;
}) {
  const className = `pointer-events-none absolute ${
    compact ? "bottom-20 right-1 h-28 w-44 md:bottom-24 md:h-36 md:w-56" : "bottom-20 right-4 h-44 w-64"
  } opacity-95 transition duration-500 group-hover/art:-translate-y-2 group-hover/art:rotate-1`;

  return (
    <svg className={className} viewBox="0 0 360 240" aria-hidden="true">
      <path
        d="M62 160 170 104l126 58-109 58z"
        fill="rgba(255,255,255,0.16)"
        stroke="rgba(255,255,255,0.46)"
        strokeWidth="2"
      />
      <path d="m62 160 125 60v-24L62 136z" fill="rgba(255,255,255,0.08)" />
      <path d="m296 162-109 58v-24l109-58z" fill="rgba(0,0,0,0.15)" />
      <path d="M100 132 174 94l86 40-75 39z" fill="rgba(255,255,255,0.18)" />
      <path d="M100 132v32l85 39v-30z" fill="rgba(255,255,255,0.09)" />
      <path d="M260 134v31l-75 38v-30z" fill="rgba(0,0,0,0.16)" />
      <path d="M134 108 179 84l52 24-46 25z" fill="rgba(255,255,255,0.2)" />
      <path d="M134 108v25l51 24v-24z" fill="rgba(255,255,255,0.1)" />
      <path d="M231 108v24l-46 25v-24z" fill="rgba(0,0,0,0.18)" />
      <path d="M120 166 184 134l70 32" fill="none" stroke={accent} strokeLinecap="round" strokeWidth="3" opacity="0.9" />
      <circle cx="120" cy="166" r="8" fill={hot} />
      <circle cx="184" cy="134" r="9" fill="white" opacity="0.92" />
      <circle cx="254" cy="166" r="8" fill={accent} />
      <path d="M112 193h102M139 207h54" stroke="rgba(255,255,255,0.58)" strokeLinecap="round" strokeWidth="5" />
    </svg>
  );
}

export function ProjectArtwork({ project, compact = false }: ProjectArtworkProps) {
  const Icon = iconMap[project.slug as keyof typeof iconMap] ?? Code2;
  const palette = colorMap[project.category as keyof typeof colorMap] ?? fallbackPalette;
  const labels = toolLabels[project.slug] ?? project.stack.slice(0, 4);

  return (
    <div
      className={`group/art relative isolate overflow-hidden rounded-ui bg-gradient-to-br ${palette.shell} ${
        compact ? "h-[320px] md:h-auto md:min-h-64" : "min-h-[380px]"
      }`}
      role="img"
      aria-label={`${project.title} system visual preview`}
    >
      <div className="absolute inset-0 project-texture" />
      <div className="absolute inset-x-0 top-0 h-20 bg-white/10" />
      <div className="absolute -right-20 top-10 h-36 w-72 rotate-12 border border-white/18 bg-white/8 shadow-[0_28px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-500 group-hover/art:translate-y-2 group-hover/art:rotate-6" />
      <div className="absolute -left-16 bottom-12 h-28 w-64 -rotate-12 border border-white/16 bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.16)] transition duration-500 group-hover/art:-translate-y-2 group-hover/art:-rotate-6" />

      <DepthLayerSvg accent={palette.accent} hot={palette.hot} compact={compact} />
      <UseCaseSvg slug={project.slug} accent={palette.accent} hot={palette.hot} compact={compact} />

      <div className={`relative z-10 flex min-h-[inherit] flex-col justify-between text-white ${compact ? "p-4 md:p-6" : "p-6"}`}>
        <div className="flex items-start justify-between gap-5">
          <Icon3D icon={Icon} action="build" tone="cyan" size="lg" className="project-art-icon" />
          <div className="grid gap-2 text-right">
            <span className="rounded-full border border-white/24 bg-white/16 px-3 py-1 text-xs font-extrabold backdrop-blur">
              {project.language}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-normal text-white/72">System View</span>
          </div>
        </div>

        <div className={`${compact ? "mt-20 gap-2 md:mt-32 md:gap-3" : "mt-36 gap-3 md:mt-40"} grid`}>
          <div className="grid grid-cols-2 gap-2">
            {labels.map((item, index) => (
              <span
                key={item}
                className={`rounded-ui border border-white/18 bg-white/14 px-3 text-xs font-extrabold shadow-[0_14px_30px_rgba(0,0,0,0.12)] backdrop-blur transition duration-300 group-hover/art:-translate-y-1 ${
                  compact ? "py-1.5 md:py-2" : "py-2"
                }`}
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-[1fr_0.6fr] gap-2">
            <span className="h-2 rounded-full bg-white/72" />
            <span className="h-2 rounded-full" style={{ backgroundColor: palette.accent }} />
          </div>
        </div>

        <div className={compact ? "pt-4 md:pt-7" : "pt-7"}>
          <span className="text-xs font-extrabold uppercase text-white/76">{project.category}</span>
          <strong className={`${compact ? "text-2xl md:text-3xl" : "text-3xl"} mt-2 block font-display font-extrabold leading-tight`}>
            {project.title}
          </strong>
        </div>
      </div>
    </div>
  );
}

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
    shell: "from-[#e94f37] via-[#167a7f] to-[#26364a]",
    accent: "#7ed6d3",
    hot: "#7b3ff2",
  },
  "AI Copilot": {
    shell: "from-[#315f9e] via-[#167a7f] to-[#e94f37]",
    accent: "#7ed6d3",
    hot: "#ffffff",
  },
  "AI Automation": {
    shell: "from-[#167a7f] via-[#315f9e] to-[#e94f37]",
    accent: "#7ed6d3",
    hot: "#ffffff",
  },
  "Frontend Systems": {
    shell: "from-[#26364a] via-[#315f9e] to-[#167a7f]",
    accent: "#7ed6d3",
    hot: "#e94f37",
  },
  "AI Commerce": {
    shell: "from-[#e94f37] via-[#315f9e] to-[#167a7f]",
    accent: "#7ed6d3",
    hot: "#ffffff",
  },
  "RAG Research": {
    shell: "from-[#315f9e] via-[#167a7f] to-[#26364a]",
    accent: "#7ed6d3",
    hot: "#e94f37",
  },
  "Agent Workflow": {
    shell: "from-[#111821] via-[#315f9e] to-[#e94f37]",
    accent: "#7ed6d3",
    hot: "#e94f37",
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
  shell: "from-[#e94f37] via-[#167a7f] to-[#315f9e]",
  accent: "#7ed6d3",
  hot: "#ffffff",
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

      <UseCaseSvg slug={project.slug} accent={palette.accent} hot={palette.hot} compact={compact} />

      <div className={`relative z-10 flex min-h-[inherit] flex-col justify-between text-white ${compact ? "p-4 md:p-6" : "p-6"}`}>
        <div className="flex items-start justify-between gap-5">
          <span
            className={`inline-grid place-items-center rounded-ui border border-white/22 bg-white/16 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur ${
              compact ? "h-11 w-11 md:h-14 md:w-14" : "h-14 w-14"
            }`}
          >
            <Icon className={compact ? "h-5 w-5 md:h-7 md:w-7" : "h-7 w-7"} aria-hidden="true" />
          </span>
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

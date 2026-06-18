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
  "AI Resume Intelligence": "from-electric via-cyan to-[#0f172a]",
  "AI Copilot": "from-purple via-electric to-cyan",
  "AI Automation": "from-cyan via-electric to-purple",
  "Frontend Systems": "from-[#0f172a] via-electric to-cyan",
  "AI Commerce": "from-purple via-violet to-cyan",
  "RAG Research": "from-electric via-[#0f766e] to-cyan",
  "Agent Workflow": "from-[#111827] via-purple to-electric",
  Portfolio: "from-electric via-cyan to-purple",
  "Developer Profile": "from-[#0f172a] via-[#334155] to-electric",
  SDK: "from-[#1f2937] via-purple to-cyan",
  Utility: "from-cyan via-electric to-[#0f172a]",
  "Web App": "from-purple via-electric to-[#0f172a]",
  Frontend: "from-electric via-violet to-cyan",
  "Realtime Web": "from-[#0f172a] via-purple to-cyan",
};

type ProjectArtworkProps = {
  project: Pick<Project, "title" | "slug" | "category" | "language" | "stack">;
  compact?: boolean;
};

export function ProjectArtwork({ project, compact = false }: ProjectArtworkProps) {
  const Icon = iconMap[project.slug as keyof typeof iconMap] ?? Code2;
  const gradient = colorMap[project.category as keyof typeof colorMap] ?? "from-electric via-cyan to-purple";

  return (
    <div
      className={`relative overflow-hidden rounded-ui bg-gradient-to-br ${gradient} ${compact ? "min-h-52" : "min-h-[360px]"}`}
      role="img"
      aria-label={`${project.title} visual preview`}
    >
      <div className="absolute inset-0 opacity-25 ai-grid" />
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/40" />
      <div className="absolute -bottom-20 left-8 h-64 w-64 rounded-full border border-white/30" />
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-between p-6 text-white">
        <div className="flex items-start justify-between gap-5">
          <span className="inline-grid h-14 w-14 place-items-center rounded-ui bg-white/16 backdrop-blur">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <span className="rounded-full border border-white/20 bg-white/14 px-3 py-1 text-xs font-extrabold">
            {project.language}
          </span>
        </div>
        <div className="my-8 grid gap-3">
          <div className="h-3 w-3/5 rounded-full bg-white/70" />
          <div className="h-3 w-4/5 rounded-full bg-white/35" />
          <div className="h-3 w-2/5 rounded-full bg-white/25" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <span key={item} className="rounded-ui border border-white/20 bg-white/12 px-3 py-2 text-xs font-bold">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs font-extrabold uppercase text-white/72">{project.category}</span>
          <strong className="mt-2 block font-display text-3xl font-extrabold leading-tight">{project.title}</strong>
        </div>
      </div>
    </div>
  );
}

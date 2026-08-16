"use client";

import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  Braces,
  Code2,
  Cpu,
  DatabaseZap,
  FileSearch,
  Github,
  GitBranch,
  Layers3,
  Network,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Icon3D } from "@/components/ui/icon-3d";
import { useGitHubProjects } from "@/hooks/use-github-projects";
import { isAIFocusedProject } from "@/lib/github-projects";

const pipelineNodes = [
  { label: "Ingest", detail: "docs", icon: FileSearch },
  { label: "Retrieve", detail: "vectors", icon: DatabaseZap },
  { label: "Reason", detail: "planning", icon: BrainCircuit },
  { label: "Guard", detail: "checks", icon: ShieldCheck },
  { label: "Ship", detail: "API", icon: ServerCog },
];

const projectSignals = [
  { label: "ATS Resume AI", stack: "RAG + FastAPI", icon: FileSearch },
  { label: "SQL Copilot", stack: "Text-to-SQL", icon: Braces },
  { label: "Semantic RAG", stack: "Vector Search", icon: Network },
];

const runtimeSignals = [
  { label: "Retrieval", value: "91%", icon: DatabaseZap },
  { label: "Review", value: "Clear", icon: ShieldCheck },
  { label: "API Layer", value: "Typed", icon: Route },
];

type AiCoreProps = {
  marker?: "core" | "mobile" | "desktop";
};

export function AiCore({ marker = "core" }: AiCoreProps) {
  const { projects, source, status } = useGitHubProjects();
  const aiProjects = projects.filter(isAIFocusedProject).length;
  const latestProject = projects[0];

  return (
    <div className="relative min-h-[430px] bg-transparent md:min-h-[540px]" data-ai-core={marker}>
      <div className="absolute inset-0 -z-10 ai-core-halo" />
      <div className="ai-hero-visual">
        <div className="ai-hero-grid" aria-hidden="true" />
        <div className="ai-hero-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="ai-console-topbar">
          <div className="flex min-w-0 items-center gap-3">
            <Icon3D icon={Cpu} action="build" tone="cyan" size="md" />
            <span className="min-w-0">
              <strong className="block truncate font-display text-lg text-white">Shashank Singh</strong>
              <small className="text-xs font-bold uppercase text-white/70">Systems, search, automation</small>
            </span>
          </div>
          <span className="ai-console-status">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            {source === "github" ? "Live GitHub" : status === "loading" ? "Syncing" : "Local data"}
          </span>
        </div>

        <div className="ai-hero-device" aria-hidden="true">
          <div className="ai-device-screen">
            <span />
            <span />
            <span />
          </div>
          <div className="ai-device-base" />
        </div>

        <div className="ai-console-main">
          <div className="ai-console-code scan-mask">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-cyan">
                <Icon3D icon={Sparkles} action="build" tone="cyan" size="sm" />
                build flow
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold text-white/75">
                project map
              </span>
            </div>
            {[
              ["source", "GitHub projects"],
              ["pipeline", "search + ranking"],
              ["service", "FastAPI endpoints"],
              ["interface", "clear product UI"],
            ].map(([key, value]) => (
              <div key={key} className="ai-console-row">
                <span>{key}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="ai-console-metrics">
            <div>
              <Icon3D icon={Github} action="github" tone="slate" size="sm" />
              <strong>{projects.length}</strong>
              <span>public repos</span>
            </div>
            <div>
              <Icon3D icon={Bot} action="build" tone="violet" size="sm" />
              <strong>{aiProjects}</strong>
              <span>AI signals</span>
            </div>
          </div>
        </div>

        <div className="ai-console-insights">
          {runtimeSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.label}>
                <Icon3D icon={Icon} action={signal.label === "Review" ? "shield" : "data"} tone="cyan" size="sm" />
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </div>
            );
          })}
        </div>

        <div className="ai-console-flow" aria-label="AI engineering workflow">
          {pipelineNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div key={node.label} className="contents">
                <div className="ai-console-node">
                  <Icon3D icon={Icon} action={node.label === "Guard" ? "shield" : "build"} tone="cyan" size="sm" />
                  <strong>{node.label}</strong>
                  <small>{node.detail}</small>
                </div>
                {index < pipelineNodes.length - 1 ? <ArrowRight className="ai-console-arrow" aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>

        <div className="ai-console-projects">
          {projectSignals.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.label} className="ai-console-project">
                <Icon3D icon={Icon} action="build" tone="blue" size="sm" />
                <span>
                  <strong>{project.label}</strong>
                  <small>{project.stack}</small>
                </span>
              </div>
            );
          })}
        </div>

        <div className="ai-console-bottom">
          <div className="min-w-0">
            <span className="text-[11px] font-extrabold uppercase text-cyan">recent build</span>
            <strong className="mt-1 block truncate font-display text-xl text-white">
              {latestProject?.title ?? "Syncing GitHub corpus"}
            </strong>
          </div>
          <span className="ai-console-branch">
            <Icon3D icon={Activity} action="data" tone="cyan" size="sm" />
            Live sync
          </span>
        </div>

        <div className="ai-console-stack" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="ai-console-watermark" aria-hidden="true">
          <Layers3 />
          <Code2 />
          <GitBranch />
        </div>
      </div>
    </div>
  );
}

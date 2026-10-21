import {
  Bot,
  BrainCircuit,
  Boxes,
  DatabaseZap,
  FileSearch,
  LayoutDashboard,
  MessageSquareText,
  MonitorSmartphone,
  ScanLine,
  SearchCheck,
  ShoppingBag,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Icon3D, type Icon3DAction, type Icon3DTone } from "@/components/ui/icon-3d";
import type { Project } from "@/types/content";

type ProjectIdentity = {
  action: Icon3DAction;
  icon: LucideIcon;
  label: string;
  tone: Icon3DTone;
};

type ProjectLike = Pick<Project, "category" | "language" | "slug" | "stack" | "title">;

function identityFor(project: ProjectLike): ProjectIdentity {
  const signal = [project.title, project.slug, project.category, project.language, ...project.stack]
    .join(" ")
    .toLowerCase();

  if (/(resume|ats|candidate)/.test(signal)) {
    return { action: "data", icon: FileSearch, label: "Resume intelligence", tone: "violet" };
  }
  if (/(sql|database|query)/.test(signal)) {
    return { action: "data", icon: DatabaseZap, label: "Data copilot", tone: "cyan" };
  }
  if (/(memor|memory|knowledge)/.test(signal)) {
    return { action: "build", icon: BrainCircuit, label: "AI memory system", tone: "violet" };
  }
  if (/(rag|retrieval|semantic|search)/.test(signal)) {
    return { action: "data", icon: SearchCheck, label: "Retrieval system", tone: "cyan" };
  }
  if (/(agent|workflow|automation|mcp)/.test(signal)) {
    return { action: "build", icon: Bot, label: "Agent workflow", tone: "green" };
  }
  if (/(commerce|shop|cart|store)/.test(signal)) {
    return { action: "navigate", icon: ShoppingBag, label: "Commerce experience", tone: "blue" };
  }
  if (/(realtime|chat|socket|message)/.test(signal)) {
    return { action: "external", icon: MessageSquareText, label: "Realtime experience", tone: "cyan" };
  }
  if (/(sdk|package|library)/.test(signal)) {
    return { action: "build", icon: Boxes, label: "Developer toolkit", tone: "slate" };
  }
  if (/(scan|ocr|utility|tool)/.test(signal)) {
    return { action: "data", icon: ScanLine, label: "Utility workflow", tone: "green" };
  }
  if (/(frontend|web app|dashboard|interface|ui)/.test(signal)) {
    return { action: "navigate", icon: MonitorSmartphone, label: "Product interface", tone: "blue" };
  }
  if (/(system|platform)/.test(signal)) {
    return { action: "navigate", icon: LayoutDashboard, label: "Digital system", tone: "blue" };
  }

  return { action: "build", icon: Workflow, label: "Product workflow", tone: "violet" };
}

export function ProjectUsecaseIcon({
  project,
  size = "sm",
  className,
}: {
  project: ProjectLike;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const identity = identityFor(project);

  return (
    <span title={identity.label} aria-label={identity.label} className={className}>
      <Icon3D icon={identity.icon} tone={identity.tone} action={identity.action} size={size} />
    </span>
  );
}

export function ProjectUsecaseLabel({ project }: { project: ProjectLike }) {
  return identityFor(project).label;
}

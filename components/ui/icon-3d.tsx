import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type Icon3DTone = "blue" | "cyan" | "violet" | "green" | "slate";
export type Icon3DAction = "navigate" | "download" | "contact" | "github" | "external" | "data" | "shield" | "build";

type Icon3DProps = {
  icon: LucideIcon;
  action?: Icon3DAction;
  tone?: Icon3DTone;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Icon3D({ icon: Icon, action = "build", tone = "blue", size = "md", className }: Icon3DProps) {
  return (
    <span className={cn("icon-3d", `icon-3d-${tone}`, `icon-action-${action}`, `icon-3d-${size}`, className)}>
      <Icon className="icon-3d-svg" aria-hidden="true" />
    </span>
  );
}

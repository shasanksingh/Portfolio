import { ArrowDown, ArrowRight } from "lucide-react";

import { Icon3D } from "@/components/ui/icon-3d";

type ArchitectureFlowProps = {
  nodes: string[];
};

export function ArchitectureFlow({ nodes }: ArchitectureFlowProps) {
  return (
    <div className="grid gap-3">
      {nodes.map((node, index) => (
        <div key={`${node}-${index}`} className="grid gap-3">
          <div className="rounded-ui border border-line bg-white px-4 py-3 shadow-sm">
            <span className="text-sm font-extrabold text-foreground">{node}</span>
          </div>
          {index < nodes.length - 1 ? (
            <>
              <Icon3D icon={ArrowDown} action="navigate" tone="cyan" size="sm" className="mx-auto md:hidden" />
              <Icon3D icon={ArrowRight} action="navigate" tone="cyan" size="sm" className="mx-auto hidden md:inline-grid icon-flow-down" />
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

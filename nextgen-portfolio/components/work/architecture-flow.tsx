import { ArrowDown, ArrowRight } from "lucide-react";

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
              <ArrowDown className="mx-auto h-4 w-4 text-electric md:hidden" aria-hidden="true" />
              <ArrowRight className="mx-auto hidden h-4 w-4 rotate-90 text-electric md:block" aria-hidden="true" />
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

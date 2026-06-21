import { architectureDiagrams } from "@/lib/content";

export function ArchitecturePreview() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {architectureDiagrams.map((diagram) => {
        const Icon = diagram.icon;
        return (
          <article key={diagram.title} className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
            <Icon className="h-7 w-7 text-electric" aria-hidden="true" />
            <h3 className="mt-5 font-display text-2xl font-bold">{diagram.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{diagram.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {diagram.nodes.slice(0, 4).map((node) => (
                <span key={node} className="rounded-full border border-line bg-surface-strong px-3 py-1 text-xs font-bold text-muted">
                  {node}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

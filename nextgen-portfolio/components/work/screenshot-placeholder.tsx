import { Badge } from "@/components/ui/badge";

type ScreenshotPlaceholderProps = {
  title: string;
};

export function ScreenshotPlaceholder({ title }: ScreenshotPlaceholderProps) {
  return (
    <div className="scan-mask min-h-[260px] rounded-ui border border-line bg-surface ai-grid">
      <div className="flex items-center justify-between border-b border-line bg-white/76 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-electric" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
          <span className="h-2.5 w-2.5 rounded-full bg-purple" />
        </div>
        <Badge className="min-h-6 px-2 text-[10px]">Screenshot Placeholder</Badge>
      </div>
      <div className="grid min-h-[210px] place-items-center p-6 text-center">
        <div>
          <strong className="font-display text-2xl">{title}</strong>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted">
            Product screenshots can be dropped here without changing the case-study layout.
          </p>
        </div>
      </div>
    </div>
  );
}

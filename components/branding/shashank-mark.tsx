import { useId } from "react";

import { cn } from "@/lib/utils";

type ShashankMarkProps = {
  className?: string;
};

/** A single-ribbon S mark: a cutout rather than a letter in a box. */
export function ShashankMark({ className }: ShashankMarkProps) {
  const gradientId = useId().replace(/:/g, "");
  const glowId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn("overflow-visible", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="15" y1="11" x2="49" y2="53" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EF0D0" />
          <stop offset="0.3" stopColor="#75BFFF" />
          <stop offset="0.64" stopColor="#A982FF" />
          <stop offset="1" stopColor="#FF9C73" />
        </linearGradient>
        <filter id={glowId} x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="2" stdDeviation="2.4" floodColor="#8E78FF" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="0" stdDeviation="1.1" floodColor="#70F1D2" floodOpacity="0.7" />
        </filter>
      </defs>
      <g filter={`url(#${glowId})`}>
        <path
          d="M46.8 16.5C42.7 12.7 36.2 11.2 29.7 12.6C21.6 14.3 16.9 19.2 18.1 24.6C19.4 30.2 26.2 30.8 34.2 32.1C42.5 33.5 46.9 36.5 46.1 42.1C45.1 48.4 37.9 52 30.3 51.6C23.9 51.3 18.3 48.6 14.5 44.6"
          stroke={`url(#${gradientId})`}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46.8 16.5C42.7 12.7 36.2 11.2 29.7 12.6C21.6 14.3 16.9 19.2 18.1 24.6C19.4 30.2 26.2 30.8 34.2 32.1C42.5 33.5 46.9 36.5 46.1 42.1C45.1 48.4 37.9 52 30.3 51.6C23.9 51.3 18.3 48.6 14.5 44.6"
          stroke="#FFF6D5"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeDasharray="1.2 3.4"
          opacity="0.92"
        />
        <path d="M48.5 16.1h4.2M50.6 14v4.2" stroke="#6EF0D0" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="13.7" cy="44.8" r="2.05" fill="#FF9C73" />
        <circle cx="34.1" cy="32.1" r="1.55" fill="#FFF6D5" />
      </g>
    </svg>
  );
}

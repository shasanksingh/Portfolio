"use client";

import Image from "next/image";
import { useCallback, useRef, type PointerEvent } from "react";

const concepts = ["RAG", "NLP", "LLM", "MCP", "EVAL", "AGENTS"];

export function HeroMiniature() {
  const stageRef = useRef<HTMLDivElement>(null);

  const setTilt = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.setProperty("--hero-tilt-x", `${(-y * 5).toFixed(2)}deg`);
    stage.style.setProperty("--hero-tilt-y", `${(x * 7).toFixed(2)}deg`);
  }, []);

  const resetTilt = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--hero-tilt-x", "0deg");
    stage.style.setProperty("--hero-tilt-y", "0deg");
  }, []);

  return (
    <div ref={stageRef} className="ng-cutout-stage" role="img" aria-label="Cartoon miniature of Shashank Singh with six hands using a laptop, AI chip, code panel, research document, and workflow graph" onPointerMove={setTilt} onPointerLeave={resetTilt}>
      <div className="ng-cutout-taxonomy" aria-hidden="true">{concepts.map((concept) => <span key={concept}>{concept}</span>)}</div>
      <div className="ng-cutout-grid" aria-hidden="true" />
      <div className="ng-cutout-shell">
        <Image src="/shashank-ai-cutout.png" alt="" width={1536} height={1024} priority sizes="(max-width: 640px) 55vw, (max-width: 1020px) 48vw, 52vw" className="ng-cutout-image" />
        <span className="ng-cutout-light" aria-hidden="true" />
      </div>
      <p className="ng-cutout-hint">Move to inspect <span>AI in motion</span></p>
    </div>
  );
}

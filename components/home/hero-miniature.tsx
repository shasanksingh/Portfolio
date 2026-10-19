"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

const concepts = ["RAG", "NLP", "LLM", "MCP", "EVAL", "AGENTS"];

export function HeroMiniature() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const setTilt = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;

    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    stage.style.setProperty("--hero-tilt-x", `${(-y * 7).toFixed(2)}deg`);
    stage.style.setProperty("--hero-tilt-y", `${(x * 9).toFixed(2)}deg`);
    stage.style.setProperty("--hero-light-x", `${((x + 0.5) * 100).toFixed(1)}%`);
    stage.style.setProperty("--hero-light-y", `${((y + 0.5) * 100).toFixed(1)}%`);
  }, []);

  const resetTilt = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;

    stage.style.setProperty("--hero-tilt-x", "0deg");
    stage.style.setProperty("--hero-tilt-y", "0deg");
    stage.style.setProperty("--hero-light-x", "50%");
    stage.style.setProperty("--hero-light-y", "50%");
  }, []);

  const toggle = useCallback(() => setFlipped((value) => !value), []);
  const onKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  }, [toggle]);

  return (
    <div
      ref={stageRef}
      className={`ng-portrait-stage ${flipped ? "is-flipped" : ""}`}
      aria-label="Interactive cartoon miniature of Shashank Singh using six hands to build AI systems"
      onPointerMove={setTilt}
      onPointerLeave={resetTilt}
    >
      <div className="ng-portrait-taxonomy" aria-hidden="true">
        {concepts.map((concept) => <span key={concept}>{concept}</span>)}
      </div>
      <div className="ng-portrait-axis ng-portrait-axis-one" aria-hidden="true" />
      <div className="ng-portrait-axis ng-portrait-axis-two" aria-hidden="true" />

      <div
        className="ng-portrait-card"
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={flipped ? "Show miniature illustration" : "Flip miniature to inspect AI workflow"}
        onClick={toggle}
        onKeyDown={onKeyDown}
      >
        <div className="ng-portrait-card-inner">
          <div className="ng-portrait-face ng-portrait-face-front">
            <Image
              src="/shashank-ai-studio-textfree.png"
              alt="Cartoon miniature of Shashank Singh with six hands working across a laptop, research document, AI chip, code panel, and workflow card"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 1020px) 92vw, 46vw"
              className="ng-portrait-image"
            />
            <span className="ng-portrait-glint" aria-hidden="true" />
          </div>
          <div className="ng-portrait-face ng-portrait-face-back" aria-hidden={!flipped}>
            <span className="ng-back-kicker">AI workflow field note</span>
            <strong>Build systems<br />people can inspect.</strong>
            <div className="ng-back-grid">
              <span>RAG <i /></span><span>NLP <i /></span><span>AGENTS <i /></span><span>EVALUATE <i /></span>
            </div>
            <p>Ground inputs. Route tasks. Validate outputs. Ship the useful surface.</p>
          </div>
        </div>
      </div>

      <div className="ng-portrait-control" aria-hidden="true"><span>{flipped ? "miniature view" : "system view"}</span><i /></div>
      <p className="ng-portrait-hint">Hover to tilt <span>/</span> Click to flip</p>
    </div>
  );
}

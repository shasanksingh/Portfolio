"use client";

import Image from "next/image";
import {
  BrainCircuit,
  DatabaseZap,
  RotateCcw,
  Sparkles,
  ThumbsUp,
  Workflow,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

const concepts = ["RAG", "NLP", "LLM", "MCP", "EVAL", "AGENTS"];

const focusAreas = [
  ["RAG", "Grounded retrieval"],
  ["AGENTS", "Useful workflows"],
  ["EVAL", "Measured quality"],
  ["MCP", "Connected tools"],
] as const;

export function HeroMiniature() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMobileHint, setShowMobileHint] = useState(false);

  const setTilt = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.setProperty("--hero-tilt-x", `${(-y * 4).toFixed(2)}deg`);
    stage.style.setProperty("--hero-tilt-y", `${(x * 6).toFixed(2)}deg`);
  }, []);

  const resetTilt = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty("--hero-tilt-x", "0deg");
    stage.style.setProperty("--hero-tilt-y", "0deg");
  }, []);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 640px)");
    const revealHint = () => {
      if (mobile.matches && window.scrollY > 12) setShowMobileHint(true);
    };

    revealHint();
    window.addEventListener("scroll", revealHint, { passive: true });
    return () => window.removeEventListener("scroll", revealHint);
  }, []);

  const flip = useCallback(() => setIsFlipped((current) => !current), []);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      flip();
    },
    [flip],
  );

  return (
    <div
      ref={stageRef}
      className={`ng-cutout-stage${isFlipped ? " is-flipped" : ""}${showMobileHint ? " show-mobile-hint" : ""}`}
      onPointerMove={setTilt}
      onPointerLeave={resetTilt}
    >
      <div className="ng-cutout-taxonomy" aria-hidden="true">
        {concepts.map((concept) => (
          <span key={concept}>{concept}</span>
        ))}
      </div>
      <div className="ng-cutout-grid" aria-hidden="true" />

      <div
        className="ng-cutout-card"
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        aria-label={
          isFlipped
            ? "Flip the AI portfolio miniature to return to the illustration"
            : "Flip the AI portfolio miniature to see Shashank's AI engineering focus areas"
        }
        onClick={flip}
        onKeyDown={onKeyDown}
      >
        <div className="ng-cutout-card-inner">
          <div className="ng-cutout-face ng-cutout-face-front">
            <div className="ng-cutout-shell">
              <Image
                src="/shashank-ai-cutout.png"
                alt=""
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 640px) 55vw, (max-width: 1020px) 48vw, 52vw"
                className="ng-cutout-image"
              />
              <span className="ng-cutout-light" aria-hidden="true" />
              <div className="ng-cutout-floaters" aria-hidden="true">
                <span className="ng-cutout-floater ng-cutout-floater-brain"><BrainCircuit /></span>
                <span className="ng-cutout-floater ng-cutout-floater-flow"><Workflow /></span>
                <span className="ng-cutout-floater ng-cutout-floater-data"><DatabaseZap /></span>
                <span className="ng-cutout-floater ng-cutout-floater-spark"><Sparkles /></span>
              </div>
              <div className="ng-cutout-connect" aria-hidden="true">
                <ThumbsUp />
                <span>Let&apos;s connect</span>
              </div>
            </div>
          </div>

          <div className="ng-cutout-face ng-cutout-face-back" aria-hidden={!isFlipped}>
            <p className="ng-cutout-back-kicker">AI ENGINEERING, UNPACKED</p>
            <strong>Systems that remember, reason, and ship.</strong>
            <div className="ng-cutout-focus-grid">
              {focusAreas.map(([label, detail]) => (
                <div key={label}>
                  <span>{label}</span>
                  <small>{detail}</small>
                </div>
              ))}
            </div>
            <p className="ng-cutout-back-note"><RotateCcw aria-hidden="true" /> Click to return</p>
          </div>
        </div>
      </div>

      <p className="ng-cutout-hint"><span>Click to flip</span></p>
    </div>
  );
}

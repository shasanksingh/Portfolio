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
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

const concepts = ["RAG", "NLP", "LLM", "MCP", "EVAL", "AGENTS"];

const topicBeats = [
  { label: "RAG", description: "Ground answers in evidence", position: "rag" },
  { label: "NLP", description: "Make language useful", position: "nlp" },
  { label: "AGENTS", description: "Orchestrate real work", position: "agents" },
  { label: "EVAL", description: "Measure what matters", position: "eval" },
] as const;

export function HeroMiniature() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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

  const playReel = useCallback(() => {
    setIsPlaying(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsPlaying(true));
    });
  }, []);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      playReel();
    },
    [playReel],
  );

  return (
    <div
      ref={stageRef}
      className={`ng-cutout-stage${isPlaying ? " is-playing" : ""}${showMobileHint ? " show-mobile-hint" : ""}`}
      onPointerMove={setTilt}
      onPointerLeave={resetTilt}
    >
      <div className="ng-cutout-taxonomy" aria-hidden="true">
        {concepts.map((concept) => <span key={concept}>{concept}</span>)}
      </div>
      <div className="ng-cutout-grid" aria-hidden="true" />

      <div
        className="ng-cutout-reel"
        role="button"
        tabIndex={0}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Replay the AI ideas cutout sequence" : "Play the AI ideas cutout sequence"}
        onClick={playReel}
        onKeyDown={onKeyDown}
      >
        <div className="ng-cutout-shell">
          <Image
            src="/shashank-ai-cutout.png"
            alt=""
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 640px) 55vw, (max-width: 1020px) 48vw, 52vw"
            className="ng-cutout-image ng-cutout-base-image"
          />
          <Image
            src="/shashank-ai-thumbs-up.png"
            alt=""
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 640px) 55vw, (max-width: 1020px) 48vw, 52vw"
            className="ng-cutout-thumbs"
          />
          <span className="ng-cutout-light" aria-hidden="true" />
          <div className="ng-cutout-floaters" aria-hidden="true">
            <span className="ng-cutout-floater ng-cutout-floater-brain"><BrainCircuit /></span>
            <span className="ng-cutout-floater ng-cutout-floater-flow"><Workflow /></span>
            <span className="ng-cutout-floater ng-cutout-floater-data"><DatabaseZap /></span>
            <span className="ng-cutout-floater ng-cutout-floater-spark"><Sparkles /></span>
          </div>
          <div className="ng-cutout-topic-trail" aria-hidden="true">
            {topicBeats.map((topic) => (
              <span className={`ng-cutout-topic ng-cutout-topic-${topic.position}`} key={topic.label}>
                <b>{topic.label}</b>
                <small>{topic.description}</small>
              </span>
            ))}
          </div>
          <div className="ng-cutout-connect" aria-hidden="true">
            <ThumbsUp />
            <span>Let&apos;s connect <i>for AI ideas</i></span>
          </div>
          <div className="ng-cutout-replay" aria-hidden="true">
            <RotateCcw />
            <span>Play AI ideas</span>
          </div>
        </div>
      </div>
      <p className="ng-cutout-hint"><span>{isPlaying ? "Click to replay" : "Click to play"}</span></p>
    </div>
  );
}

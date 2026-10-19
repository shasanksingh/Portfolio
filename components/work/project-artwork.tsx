import type { CSSProperties } from "react";

import type { Project } from "@/types/content";

import styles from "./project-artwork.module.css";

type ProjectArtworkProps = {
  project: Pick<Project, "title" | "slug" | "category" | "language" | "stack">;
  compact?: boolean;
};

type ArtDirection = {
  index: string;
  label: string;
  accent: string;
  ink: string;
};

const directions: Record<string, ArtDirection> = {
  "ats-resume-ai": {
    index: "01",
    label: "Candidate intelligence",
    accent: "#c45478",
    ink: "#3c1931",
  },
  "sql-copilot": {
    index: "02",
    label: "Query reasoning",
    accent: "#20745f",
    ink: "#0f382f",
  },
  "semantic-rag-assessment": {
    index: "03",
    label: "Evidence retrieval",
    accent: "#a64d2d",
    ink: "#4d211b",
  },
};

function ResumeArtifact() {
  return (
    <div className={styles.resumeArtifact}>
      <div className={styles.resumePaper}>
        <div className={styles.paperMeta}><span>Profile scan</span><span>v.04</span></div>
        <h3>Candidate<br />signal</h3>
        <div className={styles.paperLines}><i /><i /><i /><i /></div>
        <div className={styles.checkRows}><span><b>✓</b> Experience grounded</span><span><b>✓</b> Skills verified</span></div>
      </div>
      <div className={styles.scoreStamp}><strong>92%</strong><span>match<br />confidence</span></div>
      <span className={styles.marginNote}>evidence<br />over guesswork</span>
    </div>
  );
}

function SqlArtifact() {
  return (
    <div className={styles.sqlArtifact}>
      <div className={styles.querySheet}>
        <div className={styles.sheetCode}><span>01 / intent</span><strong>SELECT revenue</strong><b>FROM sales</b><strong>WHERE region = ?</strong></div>
        <div className={styles.queryUnderline} />
      </div>
      <div className={styles.schemaStrip}><span>orders</span><i /><span>users</span><i /><span>metrics</span></div>
      <div className={styles.planSlip}><span>planner path</span><strong>schema → join → validate</strong></div>
    </div>
  );
}

function RagArtifact() {
  return (
    <div className={styles.ragArtifact}>
      <div className={styles.queryMarker}><span>Question</span><strong>retrieve the evidence</strong></div>
      <div className={styles.evidenceTrail} aria-hidden="true"><i /><i /><i /></div>
      <div className={styles.evidenceStack}>
        <article><span>01</span><strong>Source passage</strong><p>semantic match</p></article>
        <article><span>02</span><strong>Relevant context</strong><p>retrieval ranked</p></article>
        <article><span>03</span><strong>Grounded answer</strong><p>citations retained</p></article>
      </div>
    </div>
  );
}

function GenericArtifact() {
  return (
    <div className={styles.genericArtifact}>
      <div className={styles.ideaCard}><span>01 / Input</span><strong>Real workflow</strong><i /></div>
      <div className={styles.ideaCard}><span>02 / Method</span><strong>Clear reasoning</strong><i /></div>
      <div className={styles.ideaCard}><span>03 / Outcome</span><strong>Useful system</strong><i /></div>
      <div className={styles.pinLine} />
    </div>
  );
}

export function ProjectArtwork({ project, compact = false }: ProjectArtworkProps) {
  const direction = directions[project.slug] ?? {
    index: "00",
    label: "Engineering note",
    accent: "#7756b8",
    ink: "#2f1e52",
  };
  const style = {
    "--art-accent": direction.accent,
    "--art-ink": direction.ink,
  } as CSSProperties;
  const visual = project.slug === "ats-resume-ai"
    ? <ResumeArtifact />
    : project.slug === "sql-copilot"
      ? <SqlArtifact />
      : project.slug === "semantic-rag-assessment"
        ? <RagArtifact />
        : <GenericArtifact />;

  return (
    <div
      className={`${styles.art} ${compact ? styles.compact : ""}`}
      style={style}
      role="img"
      aria-label={`${project.title} editorial project artifact`}
    >
      <header className={styles.header}>
        <span>Project file / {direction.index}</span>
        <strong>{direction.label}</strong>
      </header>
      <div className={styles.canvas}>{visual}</div>
      <footer className={styles.footer}>
        <span className={styles.projectIndex}>{direction.index}</span>
        <strong>{project.title}</strong>
        <span className={styles.stack}>{project.language} · {project.stack.slice(0, 2).join(" / ")}</span>
      </footer>
    </div>
  );
}

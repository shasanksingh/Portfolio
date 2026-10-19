import type { CSSProperties } from "react";

import type { Project } from "@/types/content";

import styles from "./project-artwork.module.css";

type ProjectArtworkProps = { project: Pick<Project, "title" | "slug" | "category" | "language" | "stack">; compact?: boolean };
const palettes: Record<string, { accent: string; soft: string }> = { "ats-resume-ai": { accent: "#a78bfa", soft: "#71e9d0" }, "sql-copilot": { accent: "#61d7ff", soft: "#83f0c8" }, "semantic-rag-assessment": { accent: "#f38a79", soft: "#f6d371" } };

function ResumeVisual() { return <div className={styles.resumeLayout}><div className={styles.resumeSheet}><div className={styles.resumeSheetHeader}><strong>Candidate signal</strong><span>Grounded</span></div><div className={styles.resumeLines}><i /><i /><i /><i /></div><div className={styles.resumeChecks}><span><b /> Evidence mapped</span><span><b /> Skills matched</span></div></div><div className={styles.scoreCard}><strong>92</strong><span>fit signal</span></div></div>; }
function SqlVisual() { return <div className={styles.sqlLayout}><div className={styles.terminal}><div className={styles.terminalTop}><i /><i /><i /></div><div className={styles.query}><span>SELECT revenue</span><b>FROM orders</b><span>WHERE region = ?</span><i /></div></div><div className={styles.schema}><div className={styles.schemaCard}><strong>Orders</strong><span>id · region · revenue</span></div><div className={styles.schemaLink} /><div className={styles.schemaCard}><strong>Users</strong><span>id · cohort · status</span></div></div></div>; }
function RagVisual() { return <div className={styles.ragLayout}><div className={styles.searchBar}><span>How does retrieval stay grounded?</span><b>Query</b></div><div className={styles.retrievalGrid}><div className={styles.vectorField} /><div className={styles.contextStack}><div className={styles.contextCard}><strong>01 / Relevant context</strong><span /></div><div className={styles.contextCard}><strong>02 / Vector match</strong><span /></div><div className={styles.contextCard}><strong>03 / Answer evidence</strong><span /></div></div></div></div>; }
function GenericVisual() { return <div className={styles.genericLayout}>{["Input", "Logic", "Review"].map((label) => <div className={styles.systemNode} key={label}><b /><strong>{label}</strong><span /></div>)}<div className={styles.systemRail} /></div>; }

export function ProjectArtwork({ project, compact = false }: ProjectArtworkProps) {
  const palette = palettes[project.slug] ?? { accent: "#9d70ff", soft: "#65e6cf" };
  const style = { "--art-accent": palette.accent, "--art-accent-soft": palette.soft } as CSSProperties;
  const visual = project.slug === "ats-resume-ai" ? <ResumeVisual /> : project.slug === "sql-copilot" ? <SqlVisual /> : project.slug === "semantic-rag-assessment" ? <RagVisual /> : <GenericVisual />;
  return <div className={`group/art ${styles.art} ${compact ? styles.compact : ""}`} style={style} role="img" aria-label={`${project.title} product-system visual`}><div className={styles.topbar}><span className={styles.eyebrow}>{project.category}</span><span className={styles.state}>Live signal</span></div>{visual}<div className={styles.liveTrace} aria-hidden="true"><i /><i /><i /></div><div className={styles.footer}><strong>{project.title}</strong><span>{project.language}<br />{project.stack.slice(0, 2).join(" / ")}</span></div></div>;
}

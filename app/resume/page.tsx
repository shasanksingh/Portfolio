import type { Metadata } from "next";
import { ArrowUpRight, Download, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { profile } from "@/lib/content";

import "./resume.css";
import "./resume-polish.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Shashank Singh, AI/ML Engineer building RAG, agentic AI, and enterprise AI systems.",
};

const skillGroups = [
  ["GenAI and agents", "LLMs, RAG, Prompt Engineering, LangChain, LangGraph, MCP, Tool Calling, Multi-Agent Systems, Structured Output, LLM Evaluation"],
  ["Retrieval and vector", "Embeddings, Semantic Search, Hybrid Retrieval, BM25, FAISS, Qdrant, Pinecone, Reranking, GraphRAG, Vector Indexing"],
  ["ML and NLP", "PyTorch, Hugging Face Transformers, BERT, Scikit-Learn, Classification, Regression, Model Training, Model Evaluation"],
  ["Backend and data", "Python, Java, SQL, FastAPI, Flask, Pydantic, REST APIs, Microservices, MySQL, MongoDB, Redis, AWS, Docker"],
];

const experience = [
  {
    company: "Tata Consultancy Services Ltd.", role: "AI/ML Developer", period: "Oct 2024 - Present", place: "Gurugram, Delhi NCR",
    highlights: [
      "Engineered production RAG pipelines for enterprise knowledge workflows using structure-aware chunking, embeddings, semantic search, vector indexing, validation, and grounded generation.",
      "Architected LangGraph multi-agent workflows with MCP for stateful routing, tool calling, retrieval, validation, conditional transitions, and enterprise AI-service integration.",
      "Built a hybrid-retrieval Known Error Database using BM25, FAISS, and Redis caching across 100K+ historical bug reports; reduced duplicate defects by 27% and saved 120+ engineering hours each month in triage effort.",
      "Engineered and deployed an AI-powered application log analysis platform that turned logs into structured error summaries, root-cause analysis, and recommended solutions using Qwen3.5 and LLaMA 3.",
      "Trained a domain-specific BERT-based SLM on 1,000+ FSD documents using masked language modeling with PyTorch and Hugging Face Transformers.",
    ],
  },
  {
    company: "Soven Developer", role: "Software Developer", period: "Jun 2024 - Sept 2024", place: "Remote",
    highlights: [
      "Delivered frontend and backend features using JavaScript and Python, integrating REST APIs, backend services, data-processing workflows, and AI-enabled functionality.",
      "Implemented reusable components and API-driven workflows while supporting debugging, integration, and maintainable feature delivery.",
    ],
  },
];

const projects = [
  {
    title: "Enterprise AI SQL Copilot", stack: "Python, FastAPI, Agentic AI, RAG, GraphRAG, FAISS, Qdrant", github: "https://github.com/shasanksingh/sql-copilot", githubLabel: "View GitHub repository",
    highlights: [
      "Architected a planner-first, read-only Text-to-SQL Copilot with controlled intent resolution, schema linking, join discovery, query planning, and validated SQL.",
      "Improved SQL-generation accuracy from approximately 50-60% to 90-95% through schema-aware retrieval, deterministic planning, validation, error correction, and confidence controls.",
    ],
  },
  {
    title: "Enterprise FSD and Capital-Markets Conversational Platform", stack: "Rasa, FastAPI, Python SDKs, MCP, AWS", github: profile.github, githubLabel: "Explore GitHub profile",
    highlights: [
      "Architected a controlled conversational workflow spanning intent detection, action mapping, API discovery, tool invocation, and enterprise data summaries.",
      "Converted Java microservices into reusable Python SDKs and connected them to Rasa action flows and an MCP Streamable HTTP workflow for dynamic tool discovery and direct API access.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <section className="container resume-shell">
        <div className="resume-toolbar"><span>Resume / 2026</span><a href={profile.resume} download className="resume-download"><Download aria-hidden="true" /> Download PDF</a></div>

        <article className="resume-document" aria-label="Shashank Singh resume">
          <header className="resume-document-header">
            <div><p className="resume-kicker">AI/ML Engineer</p><h1>Shashank Singh</h1><p className="resume-summary">AI/ML Engineer with 2+ years of software-development experience building Generative AI, Agentic AI, RAG, and applied ML systems for enterprise workflows.</p></div>
            <div className="resume-contact-list">
              <a href="tel:+917077421913"><Phone aria-hidden="true" /> +91 7077421913</a>
              <a href="mailto:singhshasank50@gmail.com"><Mail aria-hidden="true" /> singhshasank50@gmail.com</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn <ArrowUpRight aria-hidden="true" /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </header>

          <section className="resume-section resume-profile"><h2>Profile</h2><p>Architected a multi-agent Text-to-SQL Copilot improving SQL accuracy from 50-60% to 90-95%, engineered Python, FastAPI, and MCP workflows, built enterprise AI assistants, and trained a domain-specific BERT-based SLM on 1,000+ FSD documents.</p></section>

          <section className="resume-section"><h2>Technical skills</h2><div className="resume-skills-grid">{skillGroups.map(([label, skills]) => <div key={label}><h3>{label}</h3><p>{skills}</p></div>)}</div></section>

          <section className="resume-section">
            <h2>Experience</h2>
            <div className="resume-timeline">{experience.map((item) => (
              <article key={item.company}>
                <div className="resume-role-heading"><div><h3>{item.company}</h3><p>{item.role}</p></div><div className="resume-role-meta"><span>{item.period}</span><span>{item.place === "Remote" ? null : <MapPin aria-hidden="true" />}{item.place}</span></div></div>
                <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </article>
            ))}</div>
          </section>

          <section className="resume-section">
            <h2>Selected enterprise projects</h2>
            <div className="resume-project-grid">{projects.map((project) => <article key={project.title}>
              <header className="resume-project-heading"><div><h3>{project.title}</h3><p className="resume-project-stack">{project.stack}</p></div><a href={project.github} target="_blank" rel="noreferrer" className="resume-project-github"><Github aria-hidden="true" /> {project.githubLabel} <ArrowUpRight aria-hidden="true" /></a></header>
              <ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </article>)}</div>
          </section>

          <section className="resume-bottom-grid">
            <div className="resume-section"><h2>Certifications</h2><p className="resume-inline-copy">Agentic AI Certified Foundations Associate - Oracle<br />Claude Certified Architect - Professional - Anthropic<br />Build with Gemini - Google<br />AWS Certified AI Practitioner - Amazon Web Services</p></div>
            <div className="resume-section"><h2>Education</h2><div className="resume-education"><GraduationCap aria-hidden="true" /><p><strong>{"Siksha 'O' Anusandhan University"}</strong><br />B.Tech in Computer Science and Engineering<br /><span>Aug 2020 - Jul 2024 · CGPA: 8.50/10 · Bhubaneswar, Odisha</span></p></div></div>
          </section>
        </article>
      </section>
    </main>
  );
}

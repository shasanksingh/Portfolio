import {
  Bot,
  BrainCircuit,
  DatabaseZap,
  FileSearch,
  GitBranch,
  Network,
  ServerCog,
  Sparkles,
} from "lucide-react";

import type {
  ArchitectureDiagram,
  CaseStudy,
  ExperienceItem,
  NavItem,
  Project,
  SkillCluster,
} from "@/types/content";

export const profile = {
  name: "Shashank Singh",
  role: "AI/ML Developer",
  positioning:
    "AI Engineer building production-ready RAG systems, AI agents, LLM applications, FastAPI backends, and intelligent automation platforms.",
  github: "https://github.com/shasanksingh",
  linkedin: "https://www.linkedin.com/in/shashank-singh2003/",
  instagram: "https://www.instagram.com/singh.shasank.1/",
  resume: "/ShashankSingh_CV_TCS.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "AI Systems", href: "/ai-systems" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const skillClusters: SkillCluster[] = [
  {
    title: "AI Engineering",
    description: "LLM applications, RAG pipelines, agentic workflows, prompt systems, and evaluation loops.",
    skills: [
      "AI Engineering",
      "RAG Pipelines",
      "LangChain",
      "LangGraph",
      "Agentic AI",
      "Prompt Engineering",
      "NLP",
    ],
    accent: "electric",
  },
  {
    title: "Retrieval Systems",
    description: "Vector search systems that ground model outputs in useful, inspectable context.",
    skills: ["FAISS", "Vector Search", "Hybrid Search", "Embeddings", "Re-ranking", "Semantic Search"],
    accent: "cyan",
  },
  {
    title: "Backend AI",
    description: "FastAPI services, Python backends, REST APIs, and database-backed product workflows.",
    skills: ["FastAPI", "Python", "PostgreSQL", "REST APIs", "Async Workflows", "System Design"],
    accent: "purple",
  },
  {
    title: "Product Frontend",
    description: "Polished interfaces for AI tools with modern React architecture and responsive systems.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Three.js"],
    accent: "violet",
  },
];

export const projects: Project[] = [
  {
    title: "ATS Resume Studio",
    slug: "ats-resume-studio",
    subtitle: "Resume intelligence platform",
    summary:
      "A production-style resume analysis and rebuilding workflow with ATS scoring, rule checks, AI recommendations, and export-ready resume outputs.",
    stack: ["FastAPI", "Python", "RAG", "LLM", "Next.js", "Tailwind"],
    links: {
      github: "https://github.com/shasanksingh",
    },
  },
  {
    title: "SQL Copilot",
    slug: "sql-copilot",
    subtitle: "Natural language database assistant",
    summary:
      "An AI assistant for translating business questions into guarded SQL workflows with validation, schema context, and explainable results.",
    stack: ["Python", "LLM", "SQL", "Agents", "FastAPI"],
    links: {
      github: "https://github.com/shasanksingh/sql-copilot",
    },
  },
  {
    title: "AI Resume Optimizer",
    slug: "ai-resume-optimizer",
    subtitle: "LLM rewrite and scoring workflow",
    summary:
      "An AI-powered optimization pipeline that turns resume/job-description gaps into stronger bullet points, keyword coverage, and targeted suggestions.",
    stack: ["LLM", "Prompt Engineering", "Python", "FastAPI", "NLP"],
    links: {
      github: "https://github.com/shasanksingh",
    },
  },
  {
    title: "RAG Applications",
    slug: "rag-applications",
    subtitle: "Grounded answer systems",
    summary:
      "Retrieval-first applications built around embeddings, FAISS/vector search, query expansion, and answer grounding for dependable LLM responses.",
    stack: ["LangChain", "FAISS", "Vector Search", "Python", "RAG"],
    links: {
      github: "https://github.com/shasanksingh/semantic-rag-assessment",
    },
  },
  {
    title: "Agent Workflows",
    slug: "agent-workflows",
    subtitle: "Planner-tool-memory systems",
    summary:
      "Agentic AI workflows that decompose goals, call tools, retrieve memory, and return structured answers with traceable reasoning paths.",
    stack: ["LangGraph", "Agents", "Tools", "Memory", "Python"],
    links: {
      github: "https://github.com/shasanksingh/GE-COPILOT",
    },
  },
  {
    title: "FastAPI AI Systems",
    slug: "fastapi-ai-systems",
    subtitle: "API layer for AI products",
    summary:
      "Backend systems for AI products: async endpoints, model orchestration, validation, persistence, and product-ready integration surfaces.",
    stack: ["FastAPI", "Python", "PostgreSQL", "REST APIs", "Deployment"],
    links: {
      github: "https://github.com/shasanksingh",
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "ATS Resume Studio",
    slug: "ats-resume-studio",
    eyebrow: "Resume Intelligence Platform",
    summary:
      "A complete AI resume studio that scores resumes, identifies ATS gaps, generates targeted improvements, and rebuilds structured outputs.",
    problem:
      "Job seekers need more than a generic resume checker. They need job-aware feedback, ATS rule coverage, and a repeatable way to turn vague suggestions into a stronger resume.",
    solution:
      "Designed a multi-step AI workflow that parses resumes, runs deterministic ATS checks, retrieves role-specific guidance, and uses LLM rewrites only where they improve clarity and keyword alignment.",
    architecture: ["Upload", "Parser", "ATS Rule Engine", "RAG Guidance", "LLM Rewrite", "Resume Rebuilder"],
    stack: ["FastAPI", "Python", "RAG", "LLM", "Next.js", "Tailwind", "PDF Parsing"],
    challenges: [
      "Balancing deterministic ATS rules with generative recommendations.",
      "Keeping resume edits specific without inventing experience.",
      "Designing a workflow that feels like a product, not a raw model wrapper.",
    ],
    impact: [
      "Turns analysis into actionable edits.",
      "Creates a repeatable resume optimization loop.",
      "Positions AI as a careful assistant rather than a black box.",
    ],
    metrics: [
      { label: "Core Flow", value: "Parse > Score > Rewrite" },
      { label: "System Type", value: "RAG + Rules" },
      { label: "Primary User", value: "Job Seekers" },
    ],
    githubUrl: "https://github.com/shasanksingh",
  },
  {
    title: "SQL Copilot",
    slug: "sql-copilot",
    eyebrow: "Database Copilot",
    summary:
      "A natural-language SQL assistant with schema context, query planning, validation, and explainable result generation.",
    problem:
      "Business users ask analytical questions in natural language, but production databases require schema awareness, safe query generation, and understandable output.",
    solution:
      "Built a copilot flow that plans the request, retrieves schema context, generates SQL, validates intent and risk, then explains the answer in business language.",
    architecture: ["User Question", "Intent Planner", "Schema Context", "SQL Generator", "Validator", "Answer"],
    stack: ["Python", "LLM", "SQL", "FastAPI", "Agentic AI", "Prompt Engineering"],
    challenges: [
      "Preventing unsafe or malformed SQL before execution.",
      "Mapping ambiguous questions to schema-aware plans.",
      "Explaining results without hiding query assumptions.",
    ],
    impact: [
      "Speeds up database exploration.",
      "Makes SQL workflows more accessible.",
      "Creates a foundation for governed enterprise copilots.",
    ],
    metrics: [
      { label: "Mode", value: "Planner + Validator" },
      { label: "Interface", value: "Natural Language" },
      { label: "Focus", value: "Guarded SQL" },
    ],
    githubUrl: "https://github.com/shasanksingh/sql-copilot",
  },
  {
    title: "AI Resume Optimizer",
    slug: "ai-resume-optimizer",
    eyebrow: "LLM Optimization Workflow",
    summary:
      "An AI writing and scoring workflow that improves resume bullets against job requirements with grounded, role-specific suggestions.",
    problem:
      "Most resume tools give generic advice. The useful work is matching a candidate profile to a specific role while preserving truth and clarity.",
    solution:
      "Created a prompt-driven optimization flow that compares resume content to job descriptions, identifies missing signals, and suggests concise rewritten bullets.",
    architecture: ["Resume", "Job Description", "Gap Analysis", "Keyword Map", "LLM Suggestions", "Review"],
    stack: ["LLM", "Prompt Engineering", "Python", "FastAPI", "NLP", "Scoring Rules"],
    challenges: [
      "Avoiding inflated or fabricated claims.",
      "Separating keyword coverage from actual relevance.",
      "Making suggestions reviewable by the user.",
    ],
    impact: [
      "Improves resume targeting speed.",
      "Creates clearer bullet-point writing.",
      "Keeps the user in control of final edits.",
    ],
    metrics: [
      { label: "Workflow", value: "JD-Aware" },
      { label: "Output", value: "Rewrite Suggestions" },
      { label: "Guardrail", value: "Truthful Edits" },
    ],
    githubUrl: "https://github.com/shasanksingh",
  },
  {
    title: "RAG Applications",
    slug: "rag-applications",
    eyebrow: "Grounded LLM Systems",
    summary:
      "Retrieval-augmented applications using query expansion, vector search, re-ranking, and context assembly for reliable model outputs.",
    problem:
      "LLMs are powerful, but product answers need source context, topical recall, and reduced hallucination risk.",
    solution:
      "Implemented RAG architecture with embedding search, FAISS retrieval, hybrid ranking concepts, and structured prompt assembly around retrieved evidence.",
    architecture: ["User Query", "Query Expansion", "Hybrid Search", "FAISS", "Re-ranking", "LLM Response"],
    stack: ["LangChain", "FAISS", "Vector Search", "Python", "Embeddings", "RAG"],
    challenges: [
      "Retrieving enough context without flooding the model.",
      "Making relevance visible and inspectable.",
      "Handling broad user queries that need expansion.",
    ],
    impact: [
      "Grounds answers in retrieved knowledge.",
      "Improves answer consistency.",
      "Creates reusable retrieval patterns for multiple apps.",
    ],
    metrics: [
      { label: "Retrieval", value: "FAISS" },
      { label: "Pattern", value: "RAG Pipeline" },
      { label: "Goal", value: "Grounded Answers" },
    ],
    githubUrl: "https://github.com/shasanksingh/semantic-rag-assessment",
  },
  {
    title: "Agent Workflows",
    slug: "agent-workflows",
    eyebrow: "Planner + Tool AI",
    summary:
      "Agentic workflows that break goals into steps, call tools, consult memory, retrieve context, and compose final answers.",
    problem:
      "Single prompt flows struggle with multi-step tasks that need planning, tool use, and stateful context.",
    solution:
      "Designed agent workflows with explicit planner, tool, retrieval, and memory stages so each run can be inspected and improved.",
    architecture: ["User", "Planner", "Tools", "Retriever", "Memory", "Final Answer"],
    stack: ["LangGraph", "LangChain", "Python", "Tools", "Memory", "Agents"],
    challenges: [
      "Keeping agent paths understandable.",
      "Preventing unnecessary tool calls.",
      "Designing useful memory without leaking irrelevant context.",
    ],
    impact: [
      "Supports complex automation flows.",
      "Improves traceability for AI decisions.",
      "Creates reusable agent architecture primitives.",
    ],
    metrics: [
      { label: "Architecture", value: "Planner Graph" },
      { label: "Capability", value: "Tool Use" },
      { label: "Output", value: "Structured Answer" },
    ],
    githubUrl: "https://github.com/shasanksingh/GE-COPILOT",
  },
  {
    title: "FastAPI AI Systems",
    slug: "fastapi-ai-systems",
    eyebrow: "Backend AI Infrastructure",
    summary:
      "Production-oriented FastAPI backends that expose AI workflows through typed endpoints, validations, and integration-ready APIs.",
    problem:
      "AI demos often stop at notebooks or scripts. Product teams need APIs, validation, error handling, observability hooks, and clean interfaces.",
    solution:
      "Built backend patterns that wrap AI workflows in FastAPI routes, typed schemas, service boundaries, and database-ready integration layers.",
    architecture: ["Client", "FastAPI Route", "Schema Validation", "AI Service", "Database", "Response"],
    stack: ["FastAPI", "Python", "PostgreSQL", "REST APIs", "Pydantic", "Deployment"],
    challenges: [
      "Separating model logic from API boundaries.",
      "Handling slow model calls without poor UX.",
      "Preparing AI workflows for product integration.",
    ],
    impact: [
      "Moves AI workflows toward production use.",
      "Improves maintainability and testing surface.",
      "Makes frontend and automation integrations straightforward.",
    ],
    metrics: [
      { label: "Layer", value: "Backend API" },
      { label: "Runtime", value: "Python" },
      { label: "Contract", value: "Typed REST" },
    ],
    githubUrl: "https://github.com/shasanksingh",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "TCS",
    role: "AI/ML Developer",
    period: "Current",
    summary:
      "Building AI and automation workflows with a backend-first engineering mindset across model integration, APIs, and practical delivery.",
    highlights: [
      "Developing AI/ML workflows for intelligent automation use cases.",
      "Designing Python and API layers that make model features usable by products.",
      "Applying prompt engineering, retrieval patterns, and evaluation thinking to production workflows.",
    ],
  },
  {
    company: "Persistent Systems",
    role: "Frontend Internship",
    period: "Internship",
    summary:
      "Built frontend foundations across responsive UI, component thinking, and product polish before moving deeper into AI systems.",
    highlights: [
      "Created responsive interfaces with modern web fundamentals.",
      "Strengthened React, JavaScript, and frontend debugging practices.",
      "Built the product taste that now shapes AI tool interfaces.",
    ],
  },
];

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    title: "RAG Architecture",
    description: "Grounded answer flow for retrieval-first LLM applications.",
    nodes: ["User Query", "Query Expansion", "Hybrid Search", "FAISS", "Re-ranking", "LLM", "Response"],
    icon: DatabaseZap,
  },
  {
    title: "Agent Architecture",
    description: "Planner-tool-memory loop for multi-step intelligent automation.",
    nodes: ["User", "Planner", "Tools", "Retriever", "Memory", "Final Answer"],
    icon: GitBranch,
  },
  {
    title: "FastAPI AI Backend",
    description: "Typed API surface around model orchestration and persistence.",
    nodes: ["Client", "Route", "Schema", "AI Service", "Database", "Response"],
    icon: ServerCog,
  },
];

export const homeSignals = [
  { label: "RAG", value: "Retrieval pipelines", icon: FileSearch },
  { label: "Agents", value: "Planner and tool flows", icon: Bot },
  { label: "LLMs", value: "Prompted applications", icon: Sparkles },
  { label: "APIs", value: "FastAPI systems", icon: Network },
  { label: "AI Core", value: "Production mindset", icon: BrainCircuit },
];

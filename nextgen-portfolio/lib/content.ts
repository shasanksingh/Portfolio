import {
  Bot,
  BrainCircuit,
  CircuitBoard,
  DatabaseZap,
  FileSearch,
  GitBranch,
  Network,
  SearchCheck,
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

const ogImage = (repo: string) => `https://opengraph.githubassets.com/nextgen-portfolio-${repo}/shasanksingh/${repo}`;

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
  { label: "Research", href: "/case-studies" },
  { label: "Projects", href: "/projects" },
  { label: "Systems", href: "/ai-systems" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const skillClusters: SkillCluster[] = [
  {
    title: "Production AI Engineering",
    description:
      "Designing LLM features as systems: ingestion, retrieval, orchestration, validation, observability, and UX feedback loops.",
    skills: ["RAG Pipelines", "LLM Integrations", "Agentic AI", "Prompt Systems", "Evaluation", "NLP"],
    proof: "Visible in ATS Resume AI, SQL Copilot, semantic RAG, and agent workflow case studies.",
    accent: "electric",
  },
  {
    title: "Retrieval And Search",
    description:
      "Building grounded answer layers with embeddings, vector stores, query rewriting, re-ranking, and context packaging.",
    skills: ["FAISS", "ChromaDB", "Vector Search", "Hybrid Search", "Embeddings", "Semantic Search"],
    proof: "Retrieval decisions are explained in each research note instead of hidden behind buzzwords.",
    accent: "cyan",
  },
  {
    title: "Backend Systems",
    description:
      "Turning AI workflows into typed APIs with FastAPI, Python services, database-ready boundaries, and deployment surfaces.",
    skills: ["FastAPI", "Python", "PostgreSQL", "REST APIs", "Pydantic", "Service Design"],
    proof: "Project pages emphasize backend contracts, validation points, and failure modes.",
    accent: "purple",
  },
  {
    title: "Product Frontend",
    description:
      "Making complex AI systems feel usable through Next.js, React, motion, interaction design, and clear visual hierarchy.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Three.js"],
    proof: "The portfolio itself is built as a routed product surface, not a one-page scroll demo.",
    accent: "violet",
  },
];

export const projects: Project[] = [
  {
    title: "ATS Resume AI",
    slug: "ats-resume-ai",
    subtitle: "AI-powered ATS resume analyzer",
    summary:
      "FastAPI, RAG, ChromaDB, Sentence Transformers, and local open-source models for resume analysis and job-fit feedback.",
    category: "AI Resume Intelligence",
    language: "Python",
    updatedAt: "2026-06-18",
    imageUrl: ogImage("ats-resume-ai"),
    sizeKb: 311,
    stars: 1,
    forks: 0,
    stack: ["Python", "FastAPI", "RAG", "ChromaDB", "Sentence Transformers"],
    links: {
      github: "https://github.com/shasanksingh/ats-resume-ai",
      live: "https://ats-resume-ai-alpha.vercel.app",
    },
  },
  {
    title: "SQL Copilot",
    slug: "sql-copilot",
    subtitle: "Natural language database copilot",
    summary:
      "A Python copilot for translating analytical questions into safer SQL workflows with schema context and result explanation.",
    category: "AI Copilot",
    language: "Python",
    updatedAt: "2026-06-17",
    imageUrl: ogImage("sql-copilot"),
    sizeKb: 1187,
    stars: 0,
    forks: 0,
    stack: ["Python", "SQL", "LLM", "Validation", "Vercel"],
    links: {
      github: "https://github.com/shasanksingh/sql-copilot",
      live: "https://sql-copilot-puce.vercel.app",
    },
  },
  {
    title: "PayPilot AI",
    slug: "paypilot-ai",
    subtitle: "Python AI payment workflow prototype",
    summary:
      "A Python repository for experimenting with AI-assisted payment and financial workflow automation patterns.",
    category: "AI Automation",
    language: "Python",
    updatedAt: "2026-06-07",
    imageUrl: ogImage("paypilot-ai"),
    sizeKb: 131,
    stars: 0,
    forks: 0,
    stack: ["Python", "Automation", "AI Workflow", "Backend"],
    links: {
      github: "https://github.com/shasanksingh/paypilot-ai",
    },
  },
  {
    title: "VectorShift Frontend",
    slug: "vectorshift-frontend",
    subtitle: "Workflow-builder frontend",
    summary:
      "A JavaScript frontend focused on node-based workflow composition and product UI implementation.",
    category: "Frontend Systems",
    language: "JavaScript",
    updatedAt: "2026-05-29",
    imageUrl: ogImage("vectorshift-frontend"),
    sizeKb: 239,
    stars: 0,
    forks: 0,
    stack: ["JavaScript", "Workflow UI", "Frontend", "State"],
    links: {
      github: "https://github.com/shasanksingh/vectorshift-frontend",
    },
  },
  {
    title: "Growify Virtual Try-On",
    slug: "growify-virtual-tryon",
    subtitle: "AI commerce experience",
    summary:
      "A TypeScript product experiment for virtual try-on commerce flows, visual shopping, and polished frontend delivery.",
    category: "AI Commerce",
    language: "TypeScript",
    updatedAt: "2026-05-27",
    imageUrl: ogImage("growify-virtual-tryon"),
    sizeKb: 156,
    stars: 0,
    forks: 0,
    stack: ["TypeScript", "Next.js", "Product UI", "Vercel"],
    links: {
      github: "https://github.com/shasanksingh/growify-virtual-tryon",
      live: "https://growify-virtual-tryon.vercel.app",
    },
  },
  {
    title: "Semantic RAG Assessment",
    slug: "semantic-rag-assessment",
    subtitle: "Semantic RAG vector search",
    summary:
      "A compact Python implementation of semantic retrieval and vector-search patterns for grounded answer workflows.",
    category: "RAG Research",
    language: "Python",
    updatedAt: "2026-05-13",
    imageUrl: ogImage("semantic-rag-assessment"),
    sizeKb: 26,
    stars: 0,
    forks: 0,
    stack: ["Python", "RAG", "Vector Search", "Embeddings"],
    links: {
      github: "https://github.com/shasanksingh/semantic-rag-assessment",
    },
  },
  {
    title: "GE Copilot",
    slug: "ge-copilot",
    subtitle: "JavaScript copilot prototype",
    summary:
      "A JavaScript copilot project exploring conversational product workflows and assisted user actions.",
    category: "Agent Workflow",
    language: "JavaScript",
    updatedAt: "2024-06-09",
    imageUrl: ogImage("GE-COPILOT"),
    sizeKb: 268,
    stars: 0,
    forks: 0,
    stack: ["JavaScript", "Copilot UI", "Assistant Flow"],
    links: {
      github: "https://github.com/shasanksingh/GE-COPILOT",
    },
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    subtitle: "Legacy HTML portfolio",
    summary:
      "The earlier static HTML/CSS/JavaScript portfolio that established the visual identity now carried into the new build.",
    category: "Portfolio",
    language: "HTML",
    updatedAt: "2026-05-27",
    imageUrl: ogImage("Portfolio"),
    sizeKb: 889,
    stars: 0,
    forks: 0,
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/shasanksingh/Portfolio",
    },
  },
  {
    title: "Profile Repository",
    slug: "shasanksingh",
    subtitle: "Developer identity repository",
    summary: "GitHub profile repository used for developer identity, profile README, and public profile content.",
    category: "Developer Profile",
    language: "Markdown",
    updatedAt: "2026-06-17",
    imageUrl: ogImage("shasanksingh"),
    sizeKb: 7,
    stars: 0,
    forks: 0,
    stack: ["Markdown", "GitHub Profile"],
    links: {
      github: "https://github.com/shasanksingh/shasanksingh",
    },
  },
  {
    title: "Saros SDK",
    slug: "saros-sdk",
    subtitle: "SDK exploration",
    summary: "A public SDK repository kept as part of the broader engineering and protocol exploration history.",
    category: "SDK",
    language: "Repository",
    updatedAt: "2025-09-08",
    imageUrl: ogImage("saros-sdk"),
    sizeKb: 47,
    stars: 0,
    forks: 0,
    stack: ["SDK", "Open Source"],
    links: {
      github: "https://github.com/shasanksingh/saros-sdk",
    },
  },
  {
    title: "Saros DLMM SDK RS",
    slug: "saros-dlmm-sdk-rs",
    subtitle: "Rust SDK exploration",
    summary: "A public DLMM SDK repository from the broader systems and SDK exploration set.",
    category: "SDK",
    language: "Repository",
    updatedAt: "2025-09-08",
    imageUrl: ogImage("saros-dlmm-sdk-rs"),
    sizeKb: 321,
    stars: 0,
    forks: 0,
    stack: ["SDK", "Rust", "Open Source"],
    links: {
      github: "https://github.com/shasanksingh/saros-dlmm-sdk-rs",
    },
  },
  {
    title: "QR Code Scanner",
    slug: "qr-code-scanner",
    subtitle: "Browser utility",
    summary: "A JavaScript scanner utility focused on camera interaction, browser APIs, and lightweight UX.",
    category: "Utility",
    language: "JavaScript",
    updatedAt: "2024-05-16",
    imageUrl: ogImage("Qr-code-Scanner"),
    sizeKb: 357,
    stars: 0,
    forks: 0,
    stack: ["JavaScript", "Browser APIs", "Utility"],
    links: {
      github: "https://github.com/shasanksingh/Qr-code-Scanner",
    },
  },
  {
    title: "Feedback Page",
    slug: "feedback-page",
    subtitle: "PHP feedback workflow",
    summary: "A small PHP feedback interface for collecting and storing user responses.",
    category: "Web App",
    language: "PHP",
    updatedAt: "2024-05-16",
    imageUrl: ogImage("Feedback-page"),
    sizeKb: 3,
    stars: 0,
    forks: 0,
    stack: ["PHP", "Forms", "Backend"],
    links: {
      github: "https://github.com/shasanksingh/Feedback-page",
    },
  },
  {
    title: "Government Tax Site",
    slug: "government-tax-site",
    subtitle: "Public-service UI concept",
    summary: "An HTML public-service style interface for tax information and payment-oriented browsing.",
    category: "Frontend",
    language: "HTML",
    updatedAt: "2024-05-13",
    imageUrl: ogImage("Govenment-Tax-Site"),
    sizeKb: 97,
    stars: 0,
    forks: 0,
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/shasanksingh/Govenment-Tax-Site",
    },
  },
  {
    title: "Encrypted Web Chat",
    slug: "encrypted-web-chat",
    subtitle: "Realtime communication prototype",
    summary: "A JavaScript chat project centered on encrypted communication and interactive message flows.",
    category: "Realtime Web",
    language: "JavaScript",
    updatedAt: "2024-05-10",
    imageUrl: ogImage("Encrypted-Web-Chat"),
    sizeKb: 211,
    stars: 0,
    forks: 0,
    stack: ["JavaScript", "Security", "Realtime UI"],
    links: {
      github: "https://github.com/shasanksingh/Encrypted-Web-Chat",
    },
  },
  {
    title: "Sure To Shop",
    slug: "sure-to-shop",
    subtitle: "Shopping website",
    summary: "An HTML shopping site for everyday needs, kept as a legacy frontend project.",
    category: "Frontend",
    language: "HTML",
    updatedAt: "2024-05-10",
    imageUrl: ogImage("Sure-To-Shop"),
    sizeKb: 275,
    stars: 0,
    forks: 0,
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/shasanksingh/Sure-To-Shop",
    },
  },
  {
    title: "Meme Generator",
    slug: "meme-generator",
    subtitle: "Creative browser utility",
    summary: "A simple meme generator using HTML, CSS, and JavaScript.",
    category: "Utility",
    language: "JavaScript",
    updatedAt: "2023-03-29",
    imageUrl: ogImage("Meme-Generator"),
    sizeKb: 5,
    stars: 0,
    forks: 0,
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/shasanksingh/Meme-Generator",
    },
  },
  {
    title: "Phoneboook",
    slug: "phoneboook",
    subtitle: "Contact-management app",
    summary: "A phonebook application made with Node.js, React, JavaScript, and EJS.",
    category: "Web App",
    language: "EJS",
    updatedAt: "2023-03-29",
    imageUrl: ogImage("Phoneboook"),
    sizeKb: 74,
    stars: 0,
    forks: 0,
    stack: ["Node.js", "React", "JavaScript", "EJS"],
    links: {
      github: "https://github.com/shasanksingh/Phoneboook",
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "ATS Resume AI",
    slug: "ats-resume-ai",
    eyebrow: "Research Note 01",
    summary:
      "An applied RAG system for resume analysis, ATS scoring, and job-fit feedback using local model components and retrieval.",
    repositoryUrl: "https://github.com/shasanksingh/ats-resume-ai",
    liveUrl: "https://ats-resume-ai-alpha.vercel.app",
    imageUrl: ogImage("ats-resume-ai"),
    problem:
      "Resume tools often produce shallow keyword advice. The product question is whether a resume can be parsed, scored, and improved with evidence from role-aware retrieval without inventing candidate experience.",
    solution:
      "The system combines deterministic ATS checks with retrieval-backed guidance and model-assisted recommendations so the output stays specific, inspectable, and suitable for a job-seeker workflow.",
    architecture: ["Resume Upload", "Parser", "Rule Checks", "Embedding Index", "Retrieved Guidance", "Model Feedback"],
    stack: ["Python", "FastAPI", "RAG", "ChromaDB", "Sentence Transformers", "Local Models"],
    challenges: [
      "Separating deterministic resume problems from model-generated writing suggestions.",
      "Keeping recommendations useful without fabricating achievements.",
      "Designing feedback that a user can act on section by section.",
    ],
    impact: [
      "Turns resume analysis into a structured optimization workflow.",
      "Demonstrates production-minded RAG beyond chatbot interfaces.",
      "Shows backend-first AI engineering with practical user outcomes.",
    ],
    metrics: [
      { label: "Repository", value: "ats-resume-ai" },
      { label: "Live App", value: "Vercel" },
      { label: "Primary Stack", value: "FastAPI + RAG" },
    ],
    githubUrl: "https://github.com/shasanksingh/ats-resume-ai",
    research: {
      abstract:
        "This project studies a resume-intelligence workflow where retrieval, deterministic checks, and model feedback operate together. The goal is not to replace human editing, but to create a repeatable decision aid for ATS readiness and role alignment.",
      researchQuestion:
        "How can an AI resume analyzer provide useful ATS feedback while keeping recommendations grounded in the user's actual resume and target role?",
      methodology: [
        "Parse resume content into section-level units before scoring.",
        "Run ATS-style checks for structure, keywords, readability, and missing signals.",
        "Retrieve role guidance using embeddings before generating suggestions.",
        "Present recommendations as reviewable edits rather than automatic truth claims.",
      ],
      systemModel: ["Input document", "Section parser", "ATS rule layer", "Vector retrieval", "Feedback generator", "User review"],
      evaluation: [
        "Check whether feedback maps to explicit resume sections.",
        "Review suggestion specificity against target job language.",
        "Track whether generated bullets preserve factual claims.",
      ],
      limitations: [
        "Resume quality is partly subjective and depends on the role.",
        "A model can still overgeneralize if retrieval context is weak.",
      ],
      futureWork: [
        "Add side-by-side diff review.",
        "Add evidence citations for each recommendation.",
        "Introduce role-family benchmark resumes for evaluation.",
      ],
      keywords: ["ATS", "RAG", "resume parsing", "FastAPI", "grounded feedback"],
    },
  },
  {
    title: "SQL Copilot",
    slug: "sql-copilot",
    eyebrow: "Research Note 02",
    summary:
      "A database copilot that frames natural-language analytics as a guarded planning, SQL generation, validation, and explanation loop.",
    repositoryUrl: "https://github.com/shasanksingh/sql-copilot",
    liveUrl: "https://sql-copilot-puce.vercel.app",
    imageUrl: ogImage("sql-copilot"),
    problem:
      "Natural-language database tools can be risky when they generate SQL without schema awareness, validation, or a clear explanation of assumptions.",
    solution:
      "The project models the assistant as a copilot: interpret the request, reason over schema context, generate candidate SQL, validate the query, then explain the result in business language.",
    architecture: ["User Question", "Intent Planner", "Schema Context", "SQL Draft", "Validation", "Result Explanation"],
    stack: ["Python", "SQL", "LLM", "Prompt Engineering", "Validation", "Vercel"],
    challenges: [
      "Handling ambiguous analytical questions.",
      "Preventing malformed or risky SQL from becoming the final answer.",
      "Explaining query assumptions clearly enough for non-SQL users.",
    ],
    impact: [
      "Makes database exploration more accessible.",
      "Frames AI assistance around guardrails instead of raw generation.",
      "Demonstrates a practical enterprise copilot architecture.",
    ],
    metrics: [
      { label: "Repository", value: "sql-copilot" },
      { label: "Live App", value: "Vercel" },
      { label: "Primary Stack", value: "Python + SQL" },
    ],
    githubUrl: "https://github.com/shasanksingh/sql-copilot",
    research: {
      abstract:
        "This study treats text-to-SQL as a controlled copilot problem rather than a single prompt. The system emphasizes intent planning, schema grounding, query validation, and readable explanations.",
      researchQuestion:
        "How can a natural-language SQL assistant reduce friction for analytics while making generated queries safer and more explainable?",
      methodology: [
        "Classify the analytical intent before SQL generation.",
        "Use schema context to constrain possible query structures.",
        "Validate generated SQL before treating it as an answer.",
        "Translate the result and assumptions back into user language.",
      ],
      systemModel: ["Question", "Planner", "Schema memory", "SQL generator", "Validator", "Narrative response"],
      evaluation: [
        "Measure generated SQL against expected schema fields.",
        "Review validation failures for recoverable ambiguity.",
        "Compare explanations against the actual query semantics.",
      ],
      limitations: [
        "Accuracy depends on schema metadata quality.",
        "Ambiguous business vocabulary needs domain examples.",
      ],
      futureWork: [
        "Add query preview and approval before execution.",
        "Add schema lineage visualizations.",
        "Introduce test suites for common analytical intents.",
      ],
      keywords: ["text-to-SQL", "copilot", "schema grounding", "validation", "explainability"],
    },
  },
  {
    title: "Semantic RAG Assessment",
    slug: "semantic-rag-assessment",
    eyebrow: "Research Note 03",
    summary:
      "A focused retrieval experiment for embedding search, semantic matching, and grounded response preparation.",
    repositoryUrl: "https://github.com/shasanksingh/semantic-rag-assessment",
    imageUrl: ogImage("semantic-rag-assessment"),
    problem:
      "RAG quality depends on retrieval quality. A model cannot answer reliably if the system retrieves weak, noisy, or incomplete context.",
    solution:
      "The repository isolates semantic retrieval as its own engineering problem so query representation, nearest-neighbor search, and context selection can be reasoned about before generation.",
    architecture: ["Corpus", "Chunking", "Embeddings", "Vector Search", "Context Selection", "Answer Prep"],
    stack: ["Python", "RAG", "Vector Search", "Embeddings", "Semantic Retrieval"],
    challenges: [
      "Representing user intent in a compact embedding query.",
      "Selecting enough context without increasing noise.",
      "Keeping retrieval evaluation separate from answer style.",
    ],
    impact: [
      "Shows retrieval depth as a core AI engineering skill.",
      "Creates reusable patterns for larger RAG applications.",
      "Supports more trustworthy LLM outputs through better context.",
    ],
    metrics: [
      { label: "Repository", value: "semantic-rag-assessment" },
      { label: "Focus", value: "Vector Search" },
      { label: "Primary Stack", value: "Python" },
    ],
    githubUrl: "https://github.com/shasanksingh/semantic-rag-assessment",
    research: {
      abstract:
        "This project studies the retrieval layer of RAG independently from generation. It focuses on how documents become searchable vectors and how retrieved context can support grounded model responses.",
      researchQuestion:
        "What retrieval pipeline decisions most directly affect answer grounding in a compact semantic RAG application?",
      methodology: [
        "Prepare text into retrievable semantic units.",
        "Generate embeddings for query and corpus content.",
        "Run vector similarity search to identify candidate context.",
        "Inspect retrieved passages before response generation.",
      ],
      systemModel: ["Documents", "Chunks", "Embeddings", "Vector index", "Top-k context", "Prompt context"],
      evaluation: [
        "Check semantic relevance of top-k passages.",
        "Review failure cases where lexical and semantic intent diverge.",
        "Compare context density before and after chunking changes.",
      ],
      limitations: [
        "Small corpora may hide scaling problems.",
        "Embedding quality varies by domain and vocabulary.",
      ],
      futureWork: [
        "Add hybrid lexical plus vector retrieval.",
        "Add re-ranking and citation display.",
        "Create a small benchmark set of queries and expected passages.",
      ],
      keywords: ["RAG", "embeddings", "vector search", "semantic retrieval", "grounding"],
    },
  },
  {
    title: "PayPilot AI",
    slug: "paypilot-ai",
    eyebrow: "Research Note 04",
    summary:
      "A Python AI automation prototype for payment-oriented workflows and decision-support patterns.",
    repositoryUrl: "https://github.com/shasanksingh/paypilot-ai",
    imageUrl: ogImage("paypilot-ai"),
    problem:
      "Financial workflow automation needs careful handling of user intent, action boundaries, and confidence because mistakes directly affect trust.",
    solution:
      "The project frames payment automation as an assistant workflow where the system should classify intent, prepare safe actions, and keep user control at the decision boundary.",
    architecture: ["User Intent", "Workflow Classifier", "Policy Check", "Action Draft", "Review", "Execution Handoff"],
    stack: ["Python", "AI Workflow", "Automation", "Backend"],
    challenges: [
      "Separating recommendation from execution.",
      "Designing guardrails around sensitive payment actions.",
      "Making automation understandable to users.",
    ],
    impact: [
      "Shows AI automation thinking beyond document/chat workflows.",
      "Highlights policy and review as core system components.",
      "Connects backend logic with user trust.",
    ],
    metrics: [
      { label: "Repository", value: "paypilot-ai" },
      { label: "Focus", value: "Automation" },
      { label: "Primary Stack", value: "Python" },
    ],
    githubUrl: "https://github.com/shasanksingh/paypilot-ai",
    research: {
      abstract:
        "This research note explores AI assistance in a payment workflow context. The emphasis is on intent handling, controlled action generation, and user review rather than autonomous execution.",
      researchQuestion:
        "How should an AI payment assistant structure automation so it helps users without silently crossing sensitive action boundaries?",
      methodology: [
        "Model payment requests as intents and constraints.",
        "Insert policy checks before action construction.",
        "Generate action drafts that require user review.",
        "Treat execution as a separate handoff step.",
      ],
      systemModel: ["Intent", "Constraint extraction", "Policy gate", "Action draft", "Human approval", "Handoff"],
      evaluation: [
        "Review whether sensitive actions are gated.",
        "Check intent classification clarity.",
        "Test how ambiguous instructions are escalated.",
      ],
      limitations: [
        "Repository metadata does not expose a full production compliance model.",
        "Payment integrations require stronger audit, auth, and error handling.",
      ],
      futureWork: [
        "Add explicit audit trails.",
        "Add role-based authorization.",
        "Add simulation tests for risky payment intents.",
      ],
      keywords: ["AI automation", "payments", "guardrails", "human approval", "Python"],
    },
  },
  {
    title: "Growify Virtual Try-On",
    slug: "growify-virtual-tryon",
    eyebrow: "Research Note 05",
    summary:
      "A TypeScript commerce interface exploring virtual try-on, product confidence, and high-polish visual shopping flows.",
    repositoryUrl: "https://github.com/shasanksingh/growify-virtual-tryon",
    liveUrl: "https://growify-virtual-tryon.vercel.app",
    imageUrl: ogImage("growify-virtual-tryon"),
    problem:
      "Online shopping loses confidence when users cannot visualize fit, scale, or style. AI commerce needs interaction design as much as model capability.",
    solution:
      "The project uses a polished frontend product surface to make try-on exploration feel direct, visual, and decision-oriented.",
    architecture: ["Product Input", "User Visual Context", "Try-On Preview", "Fit Review", "Decision CTA"],
    stack: ["TypeScript", "Next.js", "Product UI", "Vercel", "Commerce UX"],
    challenges: [
      "Making a visual AI feature feel credible without overwhelming the shopper.",
      "Balancing product presentation with interaction speed.",
      "Designing an experience that feels like a product, not a demo.",
    ],
    impact: [
      "Demonstrates product thinking around AI visual workflows.",
      "Shows frontend polish and interaction design range.",
      "Connects AI experimentation with commerce outcomes.",
    ],
    metrics: [
      { label: "Repository", value: "growify-virtual-tryon" },
      { label: "Live App", value: "Vercel" },
      { label: "Primary Stack", value: "TypeScript" },
    ],
    githubUrl: "https://github.com/shasanksingh/growify-virtual-tryon",
    research: {
      abstract:
        "This project studies the product layer of visual AI commerce. The important question is how an interface can create user confidence around an AI-assisted try-on experience.",
      researchQuestion:
        "What interface structure helps a virtual try-on product feel trustworthy, fast, and useful for purchase decisions?",
      methodology: [
        "Present the product and visual task clearly.",
        "Keep the interaction path short between input and preview.",
        "Use product UI hierarchy to guide evaluation and action.",
        "Treat the visual output as decision support, not final truth.",
      ],
      systemModel: ["Catalog", "Visual input", "Preview surface", "Review state", "Commerce action"],
      evaluation: [
        "Check first-screen clarity of the product task.",
        "Review whether the preview guides a purchase decision.",
        "Inspect responsive behavior for mobile shopping contexts.",
      ],
      limitations: [
        "Visual try-on quality depends on model and asset pipeline depth.",
        "Trust requires clear expectation setting and failure states.",
      ],
      futureWork: [
        "Add before/after comparison states.",
        "Add fit-confidence annotations.",
        "Add product recommendation loops from try-on outcomes.",
      ],
      keywords: ["AI commerce", "virtual try-on", "TypeScript", "product design", "visual AI"],
    },
  },
  {
    title: "GE Copilot",
    slug: "ge-copilot",
    eyebrow: "Research Note 06",
    summary:
      "A JavaScript copilot prototype for assisted workflows, conversational UI, and guided task completion.",
    repositoryUrl: "https://github.com/shasanksingh/GE-COPILOT",
    imageUrl: ogImage("GE-COPILOT"),
    problem:
      "Copilot interfaces can become generic chat boxes unless they connect conversation to task state, actions, and product context.",
    solution:
      "The project explores a copilot-style interface where assistant responses support guided workflows rather than open-ended conversation alone.",
    architecture: ["User Goal", "Conversation State", "Task Context", "Suggested Action", "Review", "Completion"],
    stack: ["JavaScript", "Copilot UI", "Assistant Flow", "Frontend"],
    challenges: [
      "Keeping the assistant tied to product tasks.",
      "Making suggested actions understandable.",
      "Avoiding a generic chat experience.",
    ],
    impact: [
      "Shows early agentic/product assistant thinking.",
      "Creates a foundation for planner-tool workflows.",
      "Demonstrates conversational UI implementation experience.",
    ],
    metrics: [
      { label: "Repository", value: "GE-COPILOT" },
      { label: "Focus", value: "Assistant UI" },
      { label: "Primary Stack", value: "JavaScript" },
    ],
    githubUrl: "https://github.com/shasanksingh/GE-COPILOT",
    research: {
      abstract:
        "This note treats copilot design as a workflow problem. The system should know what the user is trying to accomplish and convert conversation into useful steps.",
      researchQuestion:
        "How can a copilot interface stay grounded in task context rather than becoming a generic assistant panel?",
      methodology: [
        "Represent the user goal explicitly.",
        "Track conversation state as task context.",
        "Generate suggested next actions rather than only text.",
        "Leave final completion under user control.",
      ],
      systemModel: ["Goal", "Context", "Assistant response", "Suggested action", "User review", "Task completion"],
      evaluation: [
        "Review whether assistant output maps to visible product tasks.",
        "Check whether next actions are concrete.",
        "Inspect failure cases where the assistant becomes too broad.",
      ],
      limitations: [
        "A frontend prototype needs tool integrations for deeper agency.",
        "Action safety requires backend validation.",
      ],
      futureWork: [
        "Add tool calling.",
        "Add memory for repeated workflow context.",
        "Add observable traces for assistant actions.",
      ],
      keywords: ["copilot", "agent workflow", "JavaScript", "assistant UI", "task state"],
    },
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
    nodes: ["User Query", "Query Expansion", "Hybrid Search", "Vector Index", "Re-ranking", "LLM", "Response"],
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
  { label: "Research", value: "Case-study notes", icon: SearchCheck },
  { label: "RAG", value: "Retrieval pipelines", icon: FileSearch },
  { label: "Agents", value: "Planner and tool flows", icon: Bot },
  { label: "Systems", value: "FastAPI contracts", icon: CircuitBoard },
  { label: "AI Core", value: "Production mindset", icon: BrainCircuit },
  { label: "APIs", value: "Backend integration", icon: Network },
  { label: "LLMs", value: "Prompted applications", icon: Sparkles },
];

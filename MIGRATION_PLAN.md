# Migration Plan

## Source Portfolio Analysis

The existing portfolio is a static HTML/CSS/JavaScript site at the repository root. It includes separate pages for home, skills, projects, about, and AI work, plus custom SVG assets, a dark-mode toggle, reveal animations, hover effects, and a cursor bot.

Reusable content:

- Name and identity: Shashank Singh, AI/ML Developer.
- Positioning: AI Engineer and Backend Developer focused on LLM integrations, RAG, NLP, FastAPI, and scalable backend APIs.
- Links: GitHub, LinkedIn, Instagram, deployed project links, and repository links.
- Visual identity: bright AI palette, white surfaces, blue/cyan/purple highlights, grid effects, animated borders, and product-like AI motifs.
- Projects to preserve and upgrade: SQL Copilot, Semantic RAG Assessment, GE Copilot, and earlier frontend/product experiments.

## Migration Strategy

1. Preserve the existing root portfolio exactly as-is.
2. Create a standalone Next.js 15 application in `nextgen-portfolio/`.
3. Move reusable profile, project, skill, case-study, and experience content into typed data modules.
4. Build independent routes for Home, About, Experience, Skills, Projects, AI Systems, Case Studies, Resume, and Contact.
5. Use React Three Fiber for the interactive AI Core and lazy-load it from the home route.
6. Use Framer Motion, GSAP, and Lenis for polished route-level and scroll-triggered interactions.
7. Implement Shadcn-style UI primitives locally so the project has reusable components without affecting the old site.
8. Add README instructions for install, development, production build, and deployment.

## Guardrails

- No existing root files should be modified or deleted.
- All generated code and assets live inside `nextgen-portfolio/`.
- Existing uncommitted root resume changes are left untouched.
- Commits should stage only `nextgen-portfolio/` files.

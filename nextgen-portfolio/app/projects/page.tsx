import type { Metadata } from "next";

import { PageIntro } from "@/components/layout/page-intro";
import { ProjectShowcase } from "@/components/work/project-showcase";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI engineering projects by Shashank Singh presented as product-grade systems and case studies.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Projects"
        title="AI systems presented as products."
        description="A focused portfolio of RAG pipelines, AI agents, resume intelligence, SQL copilots, and FastAPI AI systems."
      />
      <ProjectShowcase />
    </main>
  );
}

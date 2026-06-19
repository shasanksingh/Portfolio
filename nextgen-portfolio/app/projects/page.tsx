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
        title="A curated GitHub-backed project index."
        description="AI systems, product prototypes, and selected engineering projects presented with visuals, stack context, and implementation links."
      />
      <ProjectShowcase />
    </main>
  );
}

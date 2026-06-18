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
        title="A complete GitHub-backed project index."
        description="All public repositories are represented, with newer AI systems elevated into research notes and older frontend work kept as progression evidence."
      />
      <ProjectShowcase />
    </main>
  );
}

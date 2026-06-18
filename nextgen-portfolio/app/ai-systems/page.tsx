import type { Metadata } from "next";

import { ArchitectureGallery } from "@/components/work/architecture-gallery";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "AI Systems",
  description: "Animated RAG, agent, and FastAPI AI backend architecture diagrams by Shashank Singh.",
};

export default function AiSystemsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="AI Systems"
        title="Architecture diagrams for production AI workflows."
        description="Animated visual maps for RAG pipelines, agent architectures, and FastAPI AI systems."
      />
      <ArchitectureGallery />
    </main>
  );
}

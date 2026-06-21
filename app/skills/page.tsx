import type { Metadata } from "next";

import { PageIntro } from "@/components/layout/page-intro";
import { SkillGalaxy } from "@/components/work/skill-galaxy";

export const metadata: Metadata = {
  title: "Skills",
  description: "Interactive AI galaxy of Shashank Singh's AI engineering, RAG, FastAPI, backend, and frontend skills.",
};

export default function SkillsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Skills"
        title="A skill map that reads like hiring evidence."
        description="Capabilities are grouped by the systems they help ship: retrieval, agents, backend AI services, and product interfaces."
      />
      <SkillGalaxy />
    </main>
  );
}

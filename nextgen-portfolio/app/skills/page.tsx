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
        title="Technology orbit for modern AI systems."
        description="An interactive map of the skills behind RAG applications, agents, FastAPI AI backends, and polished product frontends."
      />
      <SkillGalaxy />
    </main>
  );
}

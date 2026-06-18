import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/work/experience-timeline";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience timeline for Shashank Singh across AI/ML development and frontend internship work.",
};

export default function ExperiencePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Experience"
        title="A timeline from product UI foundations to AI/ML systems."
        description="The experience story is intentionally focused: frontend product craft, then backend-first AI/ML delivery."
      />
      <ExperienceTimeline />
    </main>
  );
}

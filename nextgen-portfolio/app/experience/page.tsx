import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/work/experience-timeline";
import { PageIntro } from "@/components/layout/page-intro";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience timeline for Shashank Singh across AI/ML development, development work, and frontend internship experience.",
};

export default function ExperiencePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Experience"
        title="A timeline from product UI foundations to AI/ML systems."
        description="A year-based view of practical development work, frontend product craft, and backend-first AI/ML delivery."
      />
      <ExperienceTimeline />
    </main>
  );
}

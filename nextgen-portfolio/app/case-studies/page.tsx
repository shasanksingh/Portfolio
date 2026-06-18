import type { Metadata } from "next";

import { PageIntro } from "@/components/layout/page-intro";
import { CaseStudyPanel } from "@/components/work/case-study-panel";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Premium AI engineering case studies for Shashank Singh's portfolio.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Research Notes"
        title="Project research written like applied engineering papers."
        description="Each note includes an abstract, research question, methodology, architecture, evaluation plan, limitations, future work, and GitHub evidence."
      />
      <section className="container grid gap-6 pb-20">
        {caseStudies.map((study, index) => (
          <CaseStudyPanel key={study.slug} study={study} index={index} />
        ))}
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { ArrowRight, Download, FileText } from "lucide-react";

import { PageIntro } from "@/components/layout/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { skillClusters, profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume page for Shashank Singh, AI/ML Developer and AI Engineer.",
};

export default function ResumePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Resume"
        title="AI/ML Developer focused on production AI systems."
        description="A concise capability snapshot with a downloadable resume and links into project evidence."
      />
      <section className="container grid gap-8 pb-20 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="h-fit rounded-ui border border-line bg-white p-7 shadow-panel" data-gsap>
          <FileText className="h-9 w-9 text-electric" aria-hidden="true" />
          <h2 className="mt-5 font-display text-2xl font-extrabold">Resume PDF</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Download the latest resume bundled with this standalone portfolio build.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <ButtonLink href={profile.resume} target="_blank" icon={Download}>
              Download Resume
            </ButtonLink>
            <ButtonLink href="/case-studies" variant="secondary" icon={ArrowRight}>
              View Evidence
            </ButtonLink>
          </div>
        </aside>
        <div className="grid gap-4">
          {skillClusters.map((cluster) => (
            <section key={cluster.title} className="rounded-ui border border-line bg-white p-6 shadow-sm" data-gsap>
              <h3 className="font-display text-xl font-bold">{cluster.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{cluster.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cluster.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line bg-surface-strong px-3 py-1 text-xs font-bold text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

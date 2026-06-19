type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="container py-16 md:py-20" data-gsap>
      <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.45rem,10vw,3.75rem)] font-extrabold leading-tight">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:mt-6 md:text-lg md:leading-8">{description}</p>
    </section>
  );
}

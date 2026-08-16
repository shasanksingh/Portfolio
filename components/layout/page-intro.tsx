type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro container py-16 md:py-20" data-gsap>
      <p className="border-l-2 border-electric pl-3 text-xs font-extrabold uppercase tracking-normal text-electric">
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:mt-6 md:text-lg md:leading-8">{description}</p>
    </section>
  );
}

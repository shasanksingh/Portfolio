export default function CaseStudiesLoading() {
  return (
    <main>
      <section className="container py-16 md:py-20">
        <div className="h-3 w-32 rounded-full bg-electric/20" />
        <div className="mt-6 h-12 max-w-3xl rounded-ui bg-surface-strong" />
        <div className="mt-4 h-12 max-w-2xl rounded-ui bg-surface-strong" />
        <div className="mt-6 h-5 max-w-xl rounded-full bg-surface-strong" />
      </section>
      <section className="container grid gap-6 pb-20">
        {[0, 1].map((item) => (
          <div key={item} className="grid gap-6 rounded-ui border border-line bg-white/72 p-4 shadow-sm lg:grid-cols-2">
            <div className="h-72 rounded-ui bg-surface-strong" />
            <div className="h-72 rounded-ui bg-surface-strong" />
          </div>
        ))}
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col items-center">
      <section className="w-full max-w-4xl px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          AI With Teeth. Insight With Purpose.
        </h1>
        <p className="mt-6 text-lg max-w-prose mx-auto">
          I build and deploy psychological‑grade language systems that cut
          decision time in half and surface hidden leverage.
        </p>
        <a
          href="#services"
          className="mt-10 inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold"
        >
          See Services
        </a>
      </section>

      <section id="proof" className="w-full max-w-4xl px-6 py-12 grid gap-8">
        <div className="text-center italic text-neutral-400">
          Trusted by founders, therapists, and alignment researchers.
        </div>
      </section>

      <section
        id="services"
        className="w-full max-w-5xl px-6 py-20 grid md:grid-cols-3 gap-10"
      >
        <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">
            LLM Question‑Design Audit
          </h3>
          <p className="text-sm mb-4">
            48‑hour deep dive into your prompts, logs, and outcomes.
          </p>
          <p className="font-semibold mb-4">$1 200 flat</p>
          <a
            href="mailto:skylar@example.com"
            className="underline text-indigo-400"
          >
            Book now →
          </a>
        </div>
      </section>
    </main>
  );
}

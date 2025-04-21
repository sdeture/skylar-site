export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col items-center">
      {/* HERO */}
      <section className="w-full max-w-5xl px-6 py-24 flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight">
            AI solutions, minus the overwhelm.
          </h1>
          <p className="mt-6 text-lg max-w-prose mx-auto md:mx-0">
            I help non‑technical businesses spot high‑ROI automation,
            choose the right tools, and know when to call a specialist.
          </p>
          <a
            href="mailto:skylar@example.com"
            className="mt-10 inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold"
          >
            Book a 30‑min call
          </a>
        </div>

        {/* PORTRAIT */}
        <div className="flex-shrink-0">
          <img
            src="/img/portrait.webp"
            alt="Professional portrait of Skylar Deture"
            className="w-64 rounded-2xl shadow-lg grayscale hover:grayscale-0 transition"
            width={256}
            height={256}
          />
        </div>
      </section>

      {/* …the rest of your sections remain unchanged … */}
    </main>
  );
}

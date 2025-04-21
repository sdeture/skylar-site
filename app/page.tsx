export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-neutral-50 flex flex-col items-center">
      <section className="w-full max-w-4xl px-6 py-20 text-center">
        <img
          src="/img/headshot.png"
          alt="Skylar Deture portrait"
          className="w-48 h-48 rounded-full mx-auto mb-8 border-2 border-neutral-800 object-cover"
        />
        <h1 className="text-5xl font-extrabold tracking-tight">
          AI solutions, minus the overwhelm.
        </h1>
        <p className="mt-6 text-lg max-w-prose mx-auto">
          I help non‑technical businesses spot high‑ROI automation,
          choose the right tools, and know when to call a specialist.
        </p>
        <a
          href="mailto:skylar@example.com"
          className="mt-10 inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold"
        >
          Book a 30‑min call
        </a>
      </section>
      {/* Positioning, Work‑in‑Progress, and Services sections remain unchanged */}
    </main>
  );
}

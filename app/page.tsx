import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col items-center">
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {/* ===== START HERO (polished) ===== */}
<section className="relative w-full max-w-7xl px-6 py-28 flex flex-col md:flex-row items-center gap-14 md:gap-24 overflow-hidden bg-gradient-to-r from-neutral-950 via-neutral-900/90 to-neutral-950">
  {/* radial glow behind portrait */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-[radial-gradient(circle_at_center,rgba(43,137,182,0.35)_0%,rgba(16,16,16,0)_75%)] pointer-events-none" />

  {/* portrait — ≈38 % column */}
  <Image
    src="/img/portrait.webp"
    alt="Skylar Deture"
    width={320}
    height={320}
    className="relative z-10 w-80 rounded-2xl shadow-lg"
    priority
  />

  {/* copy — ≈62 % column */}
  <div className="flex-1 text-center md:text-left z-10">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
      AI solutions, minus&nbsp;the overwhelm.
    </h1>
    <p className="mt-6 text-lg md:text-xl max-w-prose mx-auto md:mx-0">
      I help non‑technical businesses spot high‑ROI automation,
      choose the right tools, and know when to call a&nbsp;specialist.
    </p>
    <a
      href="https://calendly.com/sdeture/30min"
      className="mt-10 inline-block px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold"
    >
      Book a 30‑min call
    </a>
  </div>

  {/* mascot */}
  <Image
    src="/mascot.png"
    alt="Pylo the pyramid mascot"
    width={64}
    height={64}
    className="absolute bottom-6 right-6 md:right-16 w-16 drop-shadow-[0_2px_4px_rgba(75,93,255,0.45)]"
  />
</section>
{/* ===== END HERO ===== */}


      {/* ── POSITIONING ──────────────────────────────────────────────────────── */}
      <section className="w-full max-w-4xl px-6 py-12 space-y-4 text-left">
        <h2 className="text-2xl font-bold">Why work with me?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>General‑practitioner model – diagnose, prescribe, refer.</li>
          <li>Tool‑agnostic recommendations – vendor‑neutral.</li>
          <li>ROI first – clear cost, complexity, payback window.</li>
        </ul>
      </section>

      {/* ── WORK‑IN‑PROGRESS LOG ────────────────────────────────────────────── */}
      <section className="w-full max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Work in Progress</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-neutral-700">
              <tr>
                <th className="py-2 pr-4">Project</th>
                <th className="py-2 pr-4">Current milestone</th>
                <th className="py-2">Next artifact (ETA)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-800">
                <td className="py-2 pr-4">Generative‑AI for Aphasia</td>
                <td className="py-2 pr-4">Survey draft complete</td>
                <td className="py-2">Exec summary – 2 wks</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-2 pr-4">AI‑Coding‑Tools guide</td>
                <td className="py-2 pr-4">Outline ready</td>
                <td className="py-2">Article – 10 d</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-2 pr-4">Karen‑Horney chatbot</td>
                <td className="py-2 pr-4">Spec written</td>
                <td className="py-2">Demo – 3 wks</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Eupsychic‑LLM framework</td>
                <td className="py-2 pr-4">Concept drafted</td>
                <td className="py-2">Notebook – 1 mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────────── */}
      <section
        id="services"
        className="w-full max-w-5xl px-6 py-20 grid md:grid-cols-3 gap-10"
      >
        <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">AI Opportunity Audit</h3>
          <p className="text-sm mb-4">
            48‑hour diagnosis + ranked quick‑wins.
          </p>
          <p className="font-semibold mb-4">$1 200</p>
          <a
            href="mailto:skylar@example.com"
            className="underline text-indigo-400"
          >
            Schedule →
          </a>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">Vendor Vetting Sprint</h3>
          <p className="text-sm mb-4">
            1‑week deep dive on two platforms.
          </p>
          <p className="font-semibold mb-4">$4 500</p>
          <a
            href="mailto:skylar@example.com"
            className="underline text-indigo-400"
          >
            Schedule →
          </a>
        </div>

        <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">Prompt & Process Tune‑Up</h3>
          <p className="text-sm mb-4">
            90‑minute live workshop with cheat‑sheet.
          </p>
          <p className="font-semibold mb-4">$900</p>
          <a
            href="mailto:skylar@example.com"
            className="underline text-indigo-400"
          >
            Book →
          </a>
        </div>
      </section>
    </main>
  );
}

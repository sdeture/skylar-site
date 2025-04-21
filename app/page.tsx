export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col items-center">
      {/* HERO */}
      <section className="w-full max-w-4xl px-6 py-24 text-center">
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

      {/* POSITIONING */}
      <section className="w-full max-w-4xl px-6 py-12 space-y-4 text-left">
        <h2 className="text-2xl font-bold">Why work with me?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>General‑practitioner model – diagnose, prescribe, refer.</li>
          <li>Tool‑agnostic recommendations – vendor‑neutral.</li>
          <li>ROI first – clear cost, complexity, payback window.</li>
        </ul>
      </section>

      {/* WORK‑IN‑PROGRESS LOG */}
      <section className="w-full max-w-5xl px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Work in Progress</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-neutral-700">
              <tr>
                <th className="py-2 pr-4">Project</th>
                <th className="py-2 pr-4">Current milestone</th>
                <th className="py-2">Next artifact (ETA)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-800">
                <td className="py-2 pr-4">
                  Generative‑AI for Aphasia (draft complete)
                </td>
                <td className="py-2 pr-4">
                  30‑page vendor & idea survey finished
                </td>
                <td className="py-2">
                  Executive‑summary PDF – 2 weeks
                </td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-2 pr-4">
                  AI‑Coding‑Tools guide (outline ready)
                </td>
                <td className="py-2 pr-4">
                  Drafts on Manus, Replit AI, Lovable
                </td>
                <td className="py-2">Medium article – 10 days</td>
              </tr>
              <tr className="border-b border-neutral-800">
                <td className="py-2 pr-4">
                  Karen‑Horney chatbot (spec)
                </td>
                <td className="py-2 pr-4">
                  Retrieval pipeline & prompt set defined
                </td>
                <td className="py-2">Clickable demo – 3 weeks</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">
                  Eupsychic‑LLM framework (concept)
                </td>
                <td className="py-2 pr-4">
                  Tagging schema & analytics outline
                </td>
                <td className="py-2">Notebook – 1 month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="w-full max-w-5xl px-6 py-20 grid md:grid-cols-3 gap-10"
      >
        {/* Service 1 */}
        <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">AI Opportunity Audit</h3>
          <p className="text-sm mb-4">
            48‑hour diagnosis + ranked quick‑wins.
          </p>
          <p className="font-semibold mb-4">$1 200</p>
          <a href="mailto:skylar@example.com" className="underline text-indigo-400">
            Schedule →
          </a>
        </div>
        {/* Service 2 */}
        <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">Vendor Vetting Sprint</h3>
          <p className="text-sm mb-4">
            1‑week deep dive on two platforms.
          </p>
          <p className="font-semibold mb-4">$4 500</p>
          <a href="mailto:skylar@example.com" className="underline text-indigo-400">
            Schedule →
          </a>
        </div>
        {/* Service 3 */}
        <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">Prompt & Process Tune‑Up</h3>
          <p className="text-sm mb-4">
            90‑minute live workshop, custom cheat‑sheet.
          </p>
          <p className="font-semibold mb-4">$900</p>
          <a href="mailto:skylar@example.com" className="underline text-indigo-400">
            Book →
          </a>
        </div>
      </section>
    </main>
  );
}

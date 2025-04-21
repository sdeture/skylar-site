export default function About() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 px-6 py-24">
      <article className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold">About Skylar</h1>
        <p>
          I’m Skylar Deture — your AI general practitioner. I translate
          business symptoms into the minimum‑viable automation and call in
          specialists only when needed.
        </p>
        <p>
          Background: University of Chicago mathematics, UT Austin research
          accounting, and years of language‑model experimentation.
        </p>
        <p>
          This site is a live workshop: expect fresh prototypes and honest
          timelines, not marketing varnish. If you value straight answers over
          hype, let’s talk.
        </p>
        <a
          href="/resume.pdf"
          className="underline text-indigo-400 font-semibold"
        >
          Download résumé →
        </a>
      </article>
    </main>
  );
}

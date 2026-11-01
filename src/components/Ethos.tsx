import { Reveal } from "./Reveal";

const principles = [
  {
    title: "Free, and meant to stay that way",
    body: "No ads, no paywalls, no upsells. Access shouldn't depend on what you can pay.",
  },
  {
    title: "Open, all the way down",
    body: "Every app here is open source — Civitas included, which spent its early life closed. If a tool asks for your trust, you should be able to read how it works.",
  },
  {
    title: "Your data is yours",
    body: "No tracking for tracking's sake. Where it makes sense, the AI runs locally — on a Raspberry Pi, not someone else's cloud.",
  },
  {
    title: "One thing done properly",
    body: "Civitas gets most of my time. The rest are small tools that each solve one real problem and then get out of the way.",
  },
];

export function Ethos() {
  return (
    <section id="ethos" className="border-line scroll-mt-16 border-t">
      <div className="wrap py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="label text-ink-soft">How I work</p>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-light">
                How I try to work.
              </h2>
              <p className="text-ink-soft mt-5 max-w-md text-lg leading-relaxed">
                Good software shapes how people work, learn, organize, and play.
                That power shouldn&apos;t sit behind a paywall or a privacy
                trade. This is my small, stubborn argument that it doesn&apos;t
                have to.
              </p>
            </div>
          </Reveal>

          <ol className="divide-line border-line divide-y border-y">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="grid gap-x-6 gap-y-2 py-7 sm:grid-cols-[2.5rem_1fr]"
              >
                <span className="label text-muted pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium">
                    {p.title}
                  </h3>
                  <p className="text-ink-soft mt-2 max-w-xl leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

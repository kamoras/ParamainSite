import { Reveal } from "./Reveal";

const principles = [
  {
    title: "Free, and meant to stay that way",
    body: "No ads, no paywalls, no upsells. The tools cost nothing because access shouldn't depend on what you can pay.",
    icon: "gift",
  },
  {
    title: "Open by default",
    body: "Code in the open, so anyone can read it, learn from it, or improve it. Where it can't be open, it stays free and yours.",
    icon: "code",
  },
  {
    title: "Your data is yours",
    body: "No tracking for tracking's sake. Where it makes sense, the AI runs locally — on a Raspberry Pi, not someone else's cloud.",
    icon: "shield",
  },
  {
    title: "Built to be useful",
    body: "Every app earns its place by solving a real, specific problem — and doing that one thing genuinely well.",
    icon: "wrench",
  },
];

export function Ethos() {
  return (
    <section id="ethos" className="scroll-mt-24">
      <div className="wrap py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="text-sage inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.16em] uppercase">
                <span className="bg-sage h-px w-8" />
                The ethos
              </span>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em]">
                A quiet belief, held firmly.
              </h2>
              <p className="text-ink-soft mt-5 text-lg leading-relaxed">
                Good software shapes how people work, learn, organize, and play.
                That power shouldn&apos;t sit behind a paywall or a privacy
                trade. Paramain is a small, stubborn argument that it
                doesn&apos;t have to.
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="rounded-card border-line bg-surface shadow-soft h-full border p-7">
                  <div className="bg-canvas text-terracotta flex h-11 w-11 items-center justify-center rounded-xl">
                    <Icon name={p.icon} />
                  </div>
                  <h3 className="font-display mt-5 text-xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-ink-soft mt-2.5 text-[0.95rem] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className: "h-5 w-5",
  };
  switch (name) {
    case "gift":
      return (
        <svg {...common}>
          <path d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.8-2.8z" />
        </svg>
      );
    default:
      return null;
  }
}

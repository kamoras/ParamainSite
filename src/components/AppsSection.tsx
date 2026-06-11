import { apps } from "@/data/apps";
import { AppCard } from "./AppCard";
import { Reveal } from "./Reveal";

export function AppsSection() {
  return (
    <section id="apps" className="scroll-mt-24">
      <div className="wrap py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>The portfolio</SectionLabel>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em]">
              Small tools, built with care.
            </h2>
            <p className="text-ink-soft mt-5 text-lg leading-relaxed">
              Each one solves a real problem and gives it away free. Most are
              open source; all of them put you first.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {apps.map((app, i) => (
            <Reveal as="div" key={app.slug} delay={i * 90}>
              <AppCard app={app} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-terracotta inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.16em] uppercase">
      <span className="bg-terracotta h-px w-8" />
      {children}
    </span>
  );
}

import { featuredApp, otherApps } from "@/data/apps";
import { AppCard } from "./AppCard";
import { FeaturedApp } from "./FeaturedApp";
import { Reveal } from "./Reveal";

export function AppsSection() {
  return (
    <section id="apps" className="scroll-mt-24">
      <div className="wrap py-20 sm:py-28">
        {featuredApp ? (
          <>
            <div className="max-w-2xl">
              <SectionLabel>The main event</SectionLabel>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em]">
                One project at the center of it all.
              </h2>
              <p className="text-ink-soft mt-5 text-lg leading-relaxed">
                {featuredApp.name} is the reason this workshop exists — the
                thing most of the time, care, and stubbornness goes into. It is
                free, local-first, and now entirely open source.
              </p>
            </div>

            <Reveal className="mt-12">
              <FeaturedApp app={featuredApp} />
            </Reveal>
          </>
        ) : null}

        <div className="mt-24 max-w-2xl sm:mt-32">
          <SectionLabel>Also on the shelf</SectionLabel>
          <h2 className="font-display mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] font-light tracking-[-0.02em]">
            Smaller things, built along the way.
          </h2>
          <p className="text-ink-soft mt-5 text-lg leading-relaxed">
            Side projects and weekend tools. Each one scratches a specific itch,
            and each one is free and open source — but they&apos;re the extras,
            not the main course.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {otherApps.map((app, i) => (
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

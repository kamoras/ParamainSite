"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";

const KINDS = [
  "A brand-new app",
  "A feature for an existing app",
  "Something else",
];

export function Suggest() {
  const [kind, setKind] = useState(KINDS[0]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const issueUrl = useMemo(() => {
    const body = [
      `**What kind of idea:** ${kind}`,
      "",
      "**The idea**",
      details || "_Describe the problem it solves and who it helps._",
      "",
      "---",
      "_Submitted from paramain.com_",
    ].join("\n");

    const params = new URLSearchParams({
      title: title ? `Idea: ${title}` : "Idea: ",
      body,
      labels: "idea",
    });
    return `${site.ideasRepo}/issues/new?${params.toString()}`;
  }, [kind, title, details]);

  const mailtoUrl = useMemo(() => {
    const body = `What kind of idea: ${kind}\n\n${details}`;
    const params = new URLSearchParams({
      subject: title ? `Paramain idea: ${title}` : "Paramain idea",
      body,
    });
    return `mailto:${site.email}?${params.toString()}`;
  }, [kind, title, details]);

  return (
    <section id="suggest" className="scroll-mt-24">
      <div className="wrap py-20 sm:py-28">
        <div className="border-line bg-ink text-surface relative overflow-hidden rounded-[2rem] border px-6 py-14 sm:px-14 sm:py-20">
          <Glow />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-amber inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.16em] uppercase">
                <span className="bg-amber h-px w-8" />
                Always building
              </span>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em]">
                Got an idea worth building?
              </h2>
              <p className="text-surface/70 mt-5 max-w-md text-lg leading-relaxed">
                The best tools start as someone&apos;s small frustration. Tell
                us what should exist — it opens a public issue you can track,
                discuss, and watch get built.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(issueUrl, "_blank", "noopener,noreferrer");
              }}
              className="rounded-card border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
            >
              <fieldset>
                <legend className="text-surface/70 text-sm font-medium">
                  What is it?
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {KINDS.map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setKind(k)}
                      aria-pressed={kind === k}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        kind === k
                          ? "border-amber bg-amber text-ink"
                          : "text-surface/80 border-white/15 hover:border-white/40"
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6">
                <label
                  htmlFor="idea-title"
                  className="text-surface/70 text-sm font-medium"
                >
                  Give it a name
                </label>
                <input
                  id="idea-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. A privacy-first habit tracker"
                  className="bg-ink/40 text-surface placeholder:text-surface/35 focus:border-amber mt-2 w-full rounded-xl border border-white/15 px-4 py-3 focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="idea-details"
                  className="text-surface/70 text-sm font-medium"
                >
                  What problem does it solve?
                </label>
                <textarea
                  id="idea-details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={4}
                  placeholder="Who's it for, and what should it do?"
                  className="bg-ink/40 text-surface placeholder:text-surface/35 focus:border-amber mt-2 w-full resize-y rounded-xl border border-white/15 px-4 py-3 focus:outline-none"
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <button
                  type="submit"
                  className="bg-amber text-ink inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-transform hover:-translate-y-0.5"
                >
                  Open an idea on GitHub
                </button>
                <a
                  href={mailtoUrl}
                  className="text-surface/70 hover:text-surface text-sm font-medium underline-offset-4 transition-colors hover:underline"
                >
                  Prefer email? Send it here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Glow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(40rem 24rem at 12% 0%, #cf8a1f33, transparent 60%), radial-gradient(34rem 24rem at 100% 100%, #c2552d33, transparent 60%)",
      }}
    />
  );
}

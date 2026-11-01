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

  const field =
    "bg-transparent text-ink placeholder:text-muted focus:border-ink mt-2 w-full border-0 border-b border-ink/40 px-0 py-2.5 text-lg focus:outline-none";

  return (
    <section id="suggest" className="border-line scroll-mt-16 border-t">
      <div className="wrap py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="label text-ink-soft">Ideas</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-light">
              Got an idea? <span className="marker">Tell me.</span>
            </h2>
            <p className="text-ink-soft mt-5 max-w-md text-lg leading-relaxed">
              The best tools start as someone&apos;s small frustration. Tell me
              what should exist. It opens a public issue on GitHub, so you can
              follow along if it gets built.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(issueUrl, "_blank", "noopener,noreferrer");
            }}
            className="border-line-strong bg-surface rounded-card border p-6 sm:p-9"
          >
            <fieldset>
              <legend className="label text-ink-soft">What is it?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {KINDS.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setKind(k)}
                    aria-pressed={kind === k}
                    className={`rounded-sm border px-3.5 py-2 text-[0.95rem] transition-colors ${
                      kind === k
                        ? "border-ink bg-ink text-surface"
                        : "border-ink/30 hover:border-ink"
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8">
              <label htmlFor="idea-title" className="label text-ink-soft">
                Give it a name
              </label>
              <input
                id="idea-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. A privacy-first habit tracker"
                className={field}
              />
            </div>

            <div className="mt-7">
              <label htmlFor="idea-details" className="label text-ink-soft">
                What problem does it solve?
              </label>
              <textarea
                id="idea-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                placeholder="Who's it for, and what should it do?"
                className={`${field} resize-y`}
              />
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="submit"
                className="bg-ink text-surface hover:bg-terracotta rounded-sm px-5 py-3 text-base font-medium transition-colors"
              >
                Open an idea on GitHub →
              </button>
              <a
                href={mailtoUrl}
                className="text-ink-soft hover:text-ink text-[0.95rem] underline underline-offset-4"
              >
                or email it to me
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

import type { Metadata, Viewport } from "next";
import {
  Archivo,
  IBM_Plex_Mono,
  Inter,
  Source_Serif_4,
} from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif-loaded",
  display: "swap",
  // Source Serif 4: its f and t stay evenly spaced with plain strokes at
  // display sizes. Fraunces (wavy f) and Newsreader (hairline f/t that
  // collide when tightly tracked) were both tried and rejected.
  axes: ["opsz"],
});

// Archivo 800 is the Civitas Research wordmark's face, used for that and
// nothing else (it mirrors civitas-research.org).
const wordmark = Archivo({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-wordmark-loaded",
  display: "swap",
});

// Inter is Hopline's typeface; it is used only inside Hopline's own card.
const hoplineSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter-loaded",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "open source",
    "free software",
    "accessible software",
    "Paramain",
    "Civitas",
    "civitas-research.org",
    "Civitas Research",
    "political transparency",
    "U.S. government",
    "civic tech",
    "Linkertree",
    "Spliced",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${wordmark.variable} ${hoplineSans.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

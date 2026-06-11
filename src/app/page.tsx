import { AppsSection } from "@/components/AppsSection";
import { Ethos } from "@/components/Ethos";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Suggest } from "@/components/Suggest";
import { apps } from "@/data/apps";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <AppsSection />
        <Ethos />
        <Suggest />
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}

/** JSON-LD so the portfolio is legible to search engines and crawlers. */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    sameAs: [site.github],
    makesOffer: apps.map((app) => ({
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: app.name,
        description: app.tagline,
        url: app.url,
        applicationCategory: app.category,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

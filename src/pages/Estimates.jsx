import React from "react";
import { Helmet } from "react-helmet";
import EstimateCalculator from "../components/EstimateCalculator";
import { assetUrl } from "@/utils/assetUrl";

export default function Estimates() {
  const SITE = "https://www.bksconcrete.com";
  const HERO = assetUrl("/images/galleryhero4.jpeg");

  const title = "Concrete Estimate Calculator | BKS Concrete";
  const description =
    "Get a fast ballpark estimate for concrete projects using real pricing ranges. Choose a finish, enter your square footage, and see an estimated range. Not an official quote.";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Estimates", item: `${SITE}/estimates` },
    ],
  };

  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Concrete Estimate Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE}/estimates`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "BKS Concrete", url: SITE },
    description,
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE}/estimates`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/estimates`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />

        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(calculatorJsonLd)}</script>
      </Helmet>

      <section className="relative h-[34vh] min-h-[260px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="Concrete estimate calculator by BKS Concrete"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-10">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Concrete Estimate Calculator
          </h1>
        </div>
      </section>

      <EstimateCalculator />
    </div>
  );
}

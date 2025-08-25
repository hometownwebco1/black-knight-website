import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import DrivewayCalculator from "../components/DrivewayCalculator";
import SlabCalculator from "../components/SlabCalculator";

const TABS = [
  { id: "driveway", label: "Driveway Calculator" },
  { id: "slab", label: "Patio/Walkway Calculator" },
];

export default function Estimates() {
  const [tab, setTab] = useState("driveway");
  const tabRefs = useRef({});

  // Basic keyboard support for tabs (Left/Right)
  useEffect(() => {
    const handler = (e) => {
      if (e.target.getAttribute("role") !== "tab") return;
      const idx = TABS.findIndex((t) => t.id === tab);
      if (e.key === "ArrowRight") {
        const next = TABS[(idx + 1) % TABS.length];
        setTab(next.id);
        tabRefs.current[next.id]?.focus();
      } else if (e.key === "ArrowLeft") {
        const prev = TABS[(idx - 1 + TABS.length) % TABS.length];
        setTab(prev.id);
        tabRefs.current[prev.id]?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [tab]);

  const title = "Concrete Cost Calculators | Free Estimates | Black Knight Solutions";
  const description =
    "Use our free concrete calculators to estimate costs for driveways, patios, and walkways in the Concord & Charlotte area. Fast, accurate estimates by Black Knight Solutions.";

  // JSON-LD: Breadcrumbs
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.blackknightsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Estimates", item: "https://www.blackknightsolutions.com/estimates" },
    ],
  };

  // JSON-LD: Two calculators as SoftwareApplication (free web tools)
  const calculatorsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Concrete Driveway Cost Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://www.blackknightsolutions.com/estimates#driveway",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: {
          "@type": "Organization",
          name: "Black Knight Solutions",
          url: "https://www.blackknightsolutions.com",
        },
        description:
          "Estimate the cost of a new or replacement concrete driveway based on size, thickness, and finish options.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Concrete Slab / Patio & Walkway Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://www.blackknightsolutions.com/estimates#slab",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: {
          "@type": "Organization",
          name: "Black Knight Solutions",
          url: "https://www.blackknightsolutions.com",
        },
        description:
          "Estimate costs for patios and walkways, including broomed vs. stamped concrete and reinforcement choices.",
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.blackknightsolutions.com/estimates" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://www.blackknightsolutions.com/estimates" />
        <meta property="og:image" content="https://www.blackknightsolutions.com/favicon.ico" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.blackknightsolutions.com/favicon.ico" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(calculatorsJsonLd)}</script>
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-2">Concrete Project Estimates</h1>
      <p className="text-gray-600 mb-8">
        Get a quick ballpark for your project. For an exact quote,{" "}
        <a className="underline" href="/contact">contact us</a>.
      </p>

      <div
        className="flex space-x-3 mb-8"
        role="tablist"
        aria-label="Concrete calculators"
      >
        {TABS.map((t) => {
          const selected = tab === t.id;
          return (
            <button
              key={t.id}
              ref={(el) => (tabRefs.current[t.id] = el)}
              role="tab"
              aria-selected={selected}
              aria-controls={`${t.id}-panel`}
              id={`${t.id}-tab`}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded border ${
                selected ? "bg-black text-white border-black" : "bg-gray-200 text-gray-900 border-gray-300"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="driveway-panel"
        aria-labelledby="driveway-tab"
        hidden={tab !== "driveway"}
      >
        {tab === "driveway" && <DrivewayCalculator />}
      </div>

      <div
        role="tabpanel"
        id="slab-panel"
        aria-labelledby="slab-tab"
        hidden={tab !== "slab"}
      >
        {tab === "slab" && <SlabCalculator />}
      </div>
    </div>
  );
}

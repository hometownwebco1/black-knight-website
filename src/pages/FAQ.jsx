import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How long does a new concrete driveway or patio take from quote to completion?",
    a: "Most standard residential projects take 1–2 weeks from signed quote to completion, depending on permitting, weather, and site access. The on-site work is typically 1–3 days for demo, prep, pour, and finish, plus curing time."
  },
  {
    q: "What thickness and reinforcement do you use?",
    a: "Driveways are typically 4\" thick 3000–4000 PSI concrete with fiber reinforcement and/or #3–#4 rebar grid depending on load and soils. Patios and walkways are usually 4\" with appropriate control joints every 8–12 feet."
  },
  {
    q: "How long before I can drive or park on a new slab?",
    a: "Foot traffic is ok after 24–48 hours. Light vehicles after 7 days. Full strength is reached near 28 days; avoid heavy loads and tight turns until then."
  },
  {
    q: "What affects the price of a concrete project?",
    a: "Site access and grading, demolition and haul-away, slab thickness, reinforcement, mix design, finish (broom vs. stamped), curves/edges, color, sealants, and drainage all impact price."
  },
  {
    q: "What is the difference between broomed and stamped finishes?",
    a: "Broomed finish is a classic, slip-resistant texture created by brushing the surface. Stamped concrete uses molds to create patterns like stone or wood with color and sealer. Stamped costs more due to materials and labor."
  },
  {
    q: "Do you pull permits and call for inspections?",
    a: "Yes. When required by the municipality or scope, we handle permits and coordinate inspections. We’ll let you know up front if your project requires a permit."
  },
  {
    q: "How do you handle drainage and cracking?",
    a: "We grade for positive drainage away from the home, add control joints to manage shrinkage cracking, and recommend sealers and proper maintenance. Some hairline cracking is normal and expected in concrete."
  },
  {
    q: "What warranty do you provide?",
    a: "We include a workmanship warranty (typically 12 months). Materials carry manufacturer warranties. Excessive settlement due to underlying soils or utilities is excluded, but we’ll always give fair options if an issue arises."
  },
  {
    q: "How should I maintain my concrete?",
    a: "Avoid de-icing salts the first winter, keep it clean of fertilizers/chemicals, reseal stamped or colored concrete every 2–3 years, and avoid heavy point loads near edges."
  },
  {
    q: "Do you service Concord, Charlotte, and Kannapolis?",
    a: "Yes — we serve Concord, Charlotte, Kannapolis, and surrounding areas. Call or request a quote to confirm your address."
  }
];

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };
}

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.blackknightsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "FAQ",  "item": "https://www.blackknightsolutions.com/faq" }
    ]
  };
}

export default function FAQ() {
  const containerRef = useRef(null);

  // Simple accessible accordion behavior (no deps)
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll("[data-faq-item]"));

    function closeOthers(current) {
      items.forEach((it) => {
        if (it !== current) {
          const btn = it.querySelector("[data-faq-btn]");
          const ans = it.querySelector("[data-faq-answer]");
          const icon = it.querySelector("[data-faq-icon]");
          btn.setAttribute("aria-expanded", "false");
          ans.style.maxHeight = null;
          ans.classList.remove("open");
          icon && icon.classList.remove("rotate-180");
        }
      });
    }

    items.forEach((it, idx) => {
      const btn = it.querySelector("[data-faq-btn]");
      const ans = it.querySelector("[data-faq-answer]");
      const icon = it.querySelector("[data-faq-icon]");

      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        if (!expanded) {
          closeOthers(it);
          btn.setAttribute("aria-expanded", "true");
          ans.classList.add("open");
          ans.style.maxHeight = ans.scrollHeight + "px";
          icon && icon.classList.add("rotate-180");
        } else {
          btn.setAttribute("aria-expanded", "false");
          ans.classList.remove("open");
          ans.style.maxHeight = null;
          icon && icon.classList.remove("rotate-180");
        }
      });

      // Open first item by default
      if (idx === 0) btn.click();
    });

    return () => {
      items.forEach((it) => {
        const btn = it.querySelector("[data-faq-btn]");
        const handlers = btn?.cloneNode(true);
        if (btn && handlers) btn.replaceWith(handlers);
      });
    };
  }, []);

  const title = "Concrete FAQs | Black Knight Solutions (Concord, NC)";
  const description =
    "Answers to common questions about concrete driveways, patios, slabs, stamped finishes, curing time, pricing, timelines, warranties, and maintenance in Concord, NC.";

  return (
    <div className="min-h-screen bg-site-gradient text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.blackknightsolutions.com/faq" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://www.blackknightsolutions.com/faq" />
        <meta property="og:image" content="https://www.blackknightsolutions.com/favicon.ico" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.blackknightsolutions.com/favicon.ico" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(buildFaqJsonLd())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(buildBreadcrumbJsonLd())}
        </script>
      </Helmet>

      <div className="mx-auto max-w-5xl px-4 py-10" ref={containerRef} itemScope itemType="https://schema.org/FAQPage">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-300 mb-2" aria-label="Breadcrumb">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span>FAQ</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Concrete FAQs</h1>
          <p className="mt-2 text-gray-300 max-w-2xl">
            Straight answers about timelines, costs, finishes, curing, and care for your driveway, patio, or slab.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 rounded-2xl bg-primary px-5 py-2 font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            Request a Quote
          </Link>
        </header>

        {/* FAQ List */}
        <section className="divide-y divide-white/10 rounded-2xl bg-white/5 backdrop-blur-sm" id="faq-list">
          {faqs.map((item, i) => (
            <article
              key={i}
              className="p-4 md:p-5"
              data-faq-item
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="flex w-full items-center justify-between text-left text-base md:text-lg font-semibold"
                data-faq-btn
                aria-expanded="false"
              >
                <span itemProp="name">{item.q}</span>
                <svg
                  className="ml-3 h-5 w-5 transition-transform duration-200"
                  data-faq-icon
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div
                className="max-h-0 overflow-hidden transition-[max-height] duration-200"
                data-faq-answer
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="mt-3 text-gray-300" itemProp="text">
                  {item.a}
                </p>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-8 text-gray-300">
          Have a question we didn’t cover?{" "}
          <Link to="/contact" className="underline hover:no-underline">
            Contact us
          </Link>{" "}
          for a fast answer.
        </footer>
      </div>
    </div>
  );
}

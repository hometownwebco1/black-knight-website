import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/utils/assetUrl';

const SITE = 'https://www.bksconcrete.com';
const HERO = assetUrl('/images/patioservicepagehero.jpeg');

export default function PatiosAndPorches() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Patios & Porches in Concord, Harrisburg & Kannapolis | BKS Concrete</title>
        <meta
          name="description"
          content="Custom concrete patios and porches across Concord, Harrisburg, Kannapolis & Cabarrus County. Stamped, broom, and colored finishes with proper drainage, edges, and joints."
        />
        <link rel="canonical" href={`${SITE}/services/patios-and-porches`} />
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/services/patios-and-porches`} />
        <meta property="og:title" content="Concrete Patios & Porches | BKS Concrete" />
        <meta
          property="og:description"
          content="Stamped, broom, and colored patio finishes built for North Carolina weather."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="Concrete patios and porches in Concord NC"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">
            Concrete Patios &amp; Porches
          </h1>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
        {/* Intro + Quote card */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Beautiful, low-maintenance outdoor space</h2>
            <p className="text-gray-700">
              We build patios and porches that drain correctly, look great, and hold up to North Carolina weather.
              Serving <strong>Concord</strong>, <strong>Harrisburg</strong>, <strong>Kannapolis</strong>, and the rest
              of <strong>Cabarrus County</strong>, we handle everything from a simple broom-finish slab to decorative
              stamped patios with borders, steps, and sitting walls.
            </p>
          </div>
          <aside className="rounded-2xl border border-[var(--border)] p-5 bg-gray-50">
            <div className="font-semibold mb-1">What to include for pricing</div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Overall size (length × width) and shape</li>
              <li>Finish (broom, stamped, colored)</li>
              <li>Any steps, landings, or borders</li>
              <li>Site access & desired timeline</li>
            </ul>
            <Link to="/estimates" className="mt-4 block">
              <Button className="w-full">Get Free Estimate</Button>
            </Link>
          </aside>
        </section>

        {/* Popular options */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Popular patio & porch options</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Finishes</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li><strong>Broom</strong> — clean, grippy, budget-friendly</li>
                <li><strong>Stamped</strong> — stone/wood patterns with release accents</li>
                <li><strong>Colored</strong> — integral or antiquing to match the home</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Details</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Borders, bands, and picture-frame edges</li>
                <li>Steps, seat walls, and grill or fire-pit pads</li>
                <li>Control joints aligned to layout for a clean look</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specs / How we build */}
        <section className="rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-2xl font-semibold mb-3">How we build patios that last</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="font-semibold">Base & subgrade</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Excavate soft soils; compact stone base for support</li>
                <li>Account for landscape and door thresholds</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Thickness & reinforcement</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Typical patio slab: <strong>4"</strong> (thicker at steps/edges)</li>
                <li>Fiber mesh or rebar where appropriate</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Drainage & slope</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Positive slope away from the house</li>
                <li>Surface drains or channel drains when needed</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Finishing & curing</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Clean edges, consistent texture, and tight joints</li>
                <li>Proper cure time before furniture or vehicles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design tips */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Design tips that pay off</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Size for how you’ll use it — dining set, grill, and walkway room</li>
            <li>Use borders to frame stamped patterns and hide joints</li>
            <li>Plan lighting/outlets and hose bibs before the pour</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Patio & porch FAQ (Concord NC)</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <div className="font-semibold">How soon can I use the patio?</div>
              <p>Light foot traffic after 24–48 hours; furniture after ~5–7 days. Avoid grills or heavy planters until it has cured.</p>
            </div>
            <div>
              <div className="font-semibold">Do stamped patios need sealing?</div>
              <p>Yes. A quality acrylic sealer keeps color sharp and makes cleanup easier. We’ll recommend a reseal schedule based on sun and traffic.</p>
            </div>
            <div>
              <div className="font-semibold">Can you match an existing porch?</div>
              <p>We align finish, color, and joint spacing so additions tie into what you already have.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[var(--border)] p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Ready to plan your patio or porch?</h2>
          <p className="text-gray-700">
            We serve Concord, Harrisburg, Kannapolis, and nearby communities with clean job sites and dependable schedules.
          </p>
          <div className="mt-4 flex gap-3">
            <Link to="/estimates"><Button className="px-4 py-2">Request Estimate</Button></Link>
            <Link to="/contact" className="rounded-lg border px-4 py-2">Contact Us</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

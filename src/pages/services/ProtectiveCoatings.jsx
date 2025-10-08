import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/utils/assetUrl';

const SITE = 'https://www.bksconcrete.com';
// ✅ keep your current hero filename
const HERO = assetUrl('/images/protectivecoatingsheroimage.jpeg');

export default function ProtectiveCoatings() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Sealers & Protective Coatings in Concord, Harrisburg & Kannapolis | BKS Concrete</title>
        <meta
          name="description"
          content="Penetrating sealers, acrylic sealers, and high-traffic coatings to protect driveways, patios, garage floors and interiors across Concord, Harrisburg, Kannapolis & Cabarrus County."
        />
        <link rel="canonical" href={`${SITE}/services/protective-coatings`} />
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/services/protective-coatings`} />
        <meta property="og:title" content="Protective Coatings & Sealers | BKS Concrete" />
        <meta
          property="og:description"
          content="Seal and protect your concrete with the right product and prep. Serving the Concord NC area."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="Applying protective coating to a concrete floor"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">
            Protective Coatings & Sealers
          </h1>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
        {/* Intro + CTA card */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Make your concrete last — and stay clean</h2>
            <p className="text-gray-700">
              We install the right sealer or coating for your use case across
              <strong> Concord, Harrisburg, Kannapolis</strong> and the rest of
              <strong> Cabarrus County</strong>. Proper surface prep and product selection are the two
              things that determine whether a coating fails or performs — we handle both.
            </p>
          </div>
          <aside className="rounded-2xl border border-[var(--border)] p-5 bg-gray-50">
            <div className="font-semibold mb-1">Tell us about your slab</div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Location (driveway, patio, garage, interior)</li>
              <li>Age/condition & previous coatings</li>
              <li>Finish you want (natural, wet-look, color)</li>
            </ul>
            <Link to="/estimates" className="mt-4 block">
              <Button className="w-full">Get Free Recommendation</Button>
            </Link>
          </aside>
        </section>

        {/* Options */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Coating & sealer options we install</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Penetrating Sealers (Natural Look)</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Silane/siloxane systems that soak in and repel water/salts</li>
                <li>No film, low sheen, keeps a natural concrete appearance</li>
                <li>Ideal for driveways, sidewalks, exposed areas</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Acrylic Sealers (Enhanced Color)</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Film-forming, “wet-look” option with easier cleaning</li>
                <li>Good for patios and decorative/stamped concrete</li>
                <li>Periodic re-coat schedule for long-term appearance</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">High-Traffic Floor Coatings</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Garage/interior systems with abrasion & chemical resistance</li>
                <li>Moisture-vapor tolerant primers where needed</li>
                <li>Color flakes / nonslip options available</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Maintenance & Re-Coats</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Strip or abrade failing films, correct underlying issues</li>
                <li>Scheduled re-sealing to keep protection active</li>
                <li>Spot repairs for high-wear areas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How we ensure coatings last */}
        <section className="rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-2xl font-semibold mb-3">Prep & application — why ours holds up</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="font-semibold">Surface preparation</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Clean, degrease, and rinse to neutral pH</li>
                <li>Mechanical profile (etch/diamond grind) when required</li>
                <li>Moisture testing for garage/interior coatings</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Right product, right conditions</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Match permeability and UV exposure to the environment</li>
                <li>Observe temp/humidity cure windows for best bond</li>
                <li>Apply correct film thickness and back-roll uniformly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Where it makes the most difference */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Best places to seal or coat</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Driveways & walkways (freeze/thaw and de-icing salts)</li>
            <li>Patios & pool decks (stain resistance, easier cleanup)</li>
            <li>Garage floors (chemicals, hot-tire pickup, abrasion)</li>
            <li>Decorative or stamped concrete (color retention)</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Protective coatings FAQ (Concord NC)</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <div className="font-semibold">How often should I reseal?</div>
              <p>Penetrating sealers: typically 3–5 years. Acrylic films: 2–3 years depending on sun/traffic. Garages: spot re-coat as needed.</p>
            </div>
            <div>
              <div className="font-semibold">Will a sealer make it slippery?</div>
              <p>Penetrating sealers don’t change traction. For film-forming coatings we can add a fine anti-slip additive.</p>
            </div>
            <div>
              <div className="font-semibold">Can you fix a failing coating?</div>
              <p>Usually. We test, remove loose film, correct moisture/contamination, then re-prime/re-coat with a compatible system.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[var(--border)] p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Get the right product for your slab</h2>
          <p className="text-gray-700">
            Serving homeowners and small businesses in Concord, Harrisburg, Kannapolis, and nearby communities.
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

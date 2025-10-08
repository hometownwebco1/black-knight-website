import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/utils/assetUrl';

const SITE = 'https://www.bksconcrete.com';
const HERO = assetUrl('/images/foundationhero.jpeg');

export default function Foundations() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Foundations & Footings in Concord, Harrisburg & Kannapolis | BKS Concrete</title>
        <meta
          name="description"
          content="Footings, stem walls, slabs on grade, and monolithic pours for additions, shops, and new builds. Accurate layout, reinforcement, and consistent pours across Concord, Harrisburg, Kannapolis & Cabarrus County."
        />
        <link rel="canonical" href={`${SITE}/services/foundations`} />
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/services/foundations`} />
        <meta property="og:title" content="Foundations & Footings | BKS Concrete" />
        <meta
          property="og:description"
          content="Accurate layout, rebar, and consistent pours for long-term performance."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="Concrete foundation pour in Concord NC"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Foundations & Footings</h1>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
        {/* Intro + Quote card */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Straight, square, and built to carry the load</h2>
            <p className="text-gray-700">
              We pour footings, stem walls, and slabs on grade for additions, shops, garages, and small commercial
              projects across <strong>Concord</strong>, <strong>Harrisburg</strong>, <strong>Kannapolis</strong>, and
              the rest of <strong>Cabarrus County</strong>. Our crew follows your plans precisely, coordinates with
              inspections, and keeps pours consistent for a flat, strong base.
            </p>
          </div>
          <aside className="rounded-2xl border border-[var(--border)] p-5 bg-gray-50">
            <div className="font-semibold mb-1">For the fastest estimate</div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Plan set or sketches with dimensions</li>
              <li>Desired pour window (dates)</li>
              <li>Soil info or geotech (if available)</li>
              <li>Any thickened edges, turndowns, or sleeves</li>
            </ul>
            <Link to="/estimates" className="mt-4 block">
              <Button className="w-full">Get Foundation Estimate</Button>
            </Link>
          </aside>
        </section>

        {/* What we pour */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What we pour</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Footings & Stem Walls</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Excavate to plan depth/width with clean trench lines</li>
                <li>Place and tie rebar cages, dowels, and verticals</li>
                <li>Form, pour, and strip with consistent elevations</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Slabs on Grade & Monolithic Pours</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Vapor barrier, insulation (if specified), and base compaction</li>
                <li>Reinforcement options (wire mesh, fiber, or rebar)</li>
                <li>Monolithic footings/slab where appropriate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specs / How we build */}
        <section className="rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-2xl font-semibold mb-3">How we build a reliable foundation</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="font-semibold">Layout & elevations</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>String lines/laser for straight forms and precise heights</li>
                <li>Bench marks to keep the whole pour on-grade</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Base & soil</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Compact subgrade and stone to reduce settlement</li>
                <li>Moisture management and drainage planning</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Reinforcement & embeds</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Correct bar sizes, spacing, and lap lengths</li>
                <li>Anchor bolts, sleeves, and conduit placed to plan</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Finishing & joints</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Flat trowel or broom finishes per spec</li>
                <li>Saw/control joints at proper spacing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coordination */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Coordination that keeps projects moving</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Schedule footing and slab inspections</li>
            <li>Coordinate with framers, plumbers, and electricians</li>
            <li>Keep the site clean and accessible for the next trade</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Foundation FAQ (Concord NC area)</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <div className="font-semibold">Do you handle permits and inspections?</div>
              <p>We’ll coordinate inspections and provide pour schedules. Permitting is typically handled by the GC or homeowner.</p>
            </div>
            <div>
              <div className="font-semibold">Can you pour in winter?</div>
              <p>Yes, with cold-weather measures (heat, additives, and protection) when temperatures require it.</p>
            </div>
            <div>
              <div className="font-semibold">What about vapor barriers or insulation?</div>
              <p>We install what’s on plan—poly vapor barriers, edge insulation, and thermal breaks if specified.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[var(--border)] p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Plan your foundation with confidence</h2>
          <p className="text-gray-700">
            Serving homeowners, builders, and small businesses across Concord, Harrisburg, Kannapolis, and nearby communities.
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

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { assetUrl } from '@/utils/assetUrl';

const SITE = 'https://www.bksconcrete.com';
// ✅ Use the new image you added in /public/images
const HERO = assetUrl('/images/concreterepairheroimage4.jpeg');

export default function ConcreteRepair() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Repair in Concord, Harrisburg & Kannapolis | BKS Concrete</title>
        <meta
          name="description"
          content="Concrete crack repair, slab leveling, spalling, joint & surface restoration across Concord, Harrisburg, Kannapolis & Cabarrus County. Free, no-pressure estimates."
        />
        <link rel="canonical" href={`${SITE}/services/concrete-repair`} />
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/services/concrete-repair`} />
        <meta property="og:title" content="Concrete Repair | BKS Concrete" />
        <meta
          property="og:description"
          content="Crack repair, slab lifting, spall restoration, and joint work done right in the Concord NC area."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="Concrete repair project by BKS Concrete"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Concrete Repair</h1>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
        {/* Intro */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Stop small problems from becoming expensive replacements</h2>
            <p className="text-gray-700">
              We fix cracked, uneven, or deteriorating concrete across <strong>Concord, Harrisburg, Kannapolis</strong>,
              and all of <strong>Cabarrus County</strong>. Whether it’s a sinking driveway slab, a tripping hazard on a
              sidewalk, or flaking/spalling surfaces, our team repairs the structure and appearance so it lasts.
            </p>
          </div>
          <aside className="rounded-2xl border border-[var(--border)] p-5 bg-gray-50">
            <div className="font-semibold mb-1">Typical repair timelines</div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Minor crack routing & seal: <strong>1–2 hours</strong></li>
              <li>Spall/patch & resurface: <strong>half day</strong></li>
              <li>Slab lift & joint work: <strong>half to full day</strong></li>
            </ul>
            <Link to="/estimates" className="inline-block mt-4 rounded-lg bg-black px-4 py-2 text-white">
              Get a Free Estimate
            </Link>
          </aside>
        </section>

        {/* Services We Offer */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What we repair</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Crack Repair & Joint Sealing</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Route & fill cracks with flexible sealants</li>
                <li>Clean and re-seal control & expansion joints</li>
                <li>Prevents water intrusion and freeze/thaw damage</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Slab Lifting / Leveling</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Lift sunken sections to remove trip hazards</li>
                <li>Stabilize soils and reduce future settlement</li>
                <li>Great for driveways, walkways & porches</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Spalling, Scaling & Surface Repair</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Patch delaminated areas & bond with repair mortars</li>
                <li>Light resurfacing to restore a uniform finish</li>
                <li>Optional protective coatings for durability</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Structural & Edge Repairs</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Rebuild broken steps, corners & exposed edges</li>
                <li>Doweling/pinning for added strength when needed</li>
                <li>Match texture/finish to existing concrete</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Replace vs. Repair */}
        <section className="rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-2xl font-semibold mb-3">Repair or replace — what’s the right call?</h2>
          <p className="text-gray-700">
            We’re honest about what’s worth fixing. If the slab is severely heaved, has widespread structural cracking,
            or poor base preparation, we’ll recommend replacement. Otherwise, targeted repairs can extend life for many
            years at a fraction of the cost.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            <div>
              <div className="font-semibold">Good candidates for repair</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Hairline to moderate cracks</li>
                <li>Localized settlement (1–2 slabs)</li>
                <li>Spalling/scaling in patches</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Better to replace</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Severe base failure or widespread cracking</li>
                <li>Tree-root heave across long runs</li>
                <li>Drainage issues that can’t be corrected</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our process</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1">
            <li>On-site assessment, photos & measurements</li>
            <li>Clear scope with fixed pricing (no surprises)</li>
            <li>Prep: cleaning, routing, grinding as needed</li>
            <li>Repair: seal, patch, level, and finish</li>
            <li>Optional sealing/coating for protection</li>
            <li>Walkthrough & maintenance tips</li>
          </ol>
        </section>

        {/* FAQ for SEO */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Concrete repair FAQ (Concord NC area)</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <div className="font-semibold">How long do repairs last?</div>
              <p>With proper prep and materials, many crack and spall repairs last 5–10+ years. Sealing and good drainage extend life.</p>
            </div>
            <div>
              <div className="font-semibold">Can you match my existing texture?</div>
              <p>Yes. We blend finishes (broom, light texture, or decorative) so repairs don’t stand out.</p>
            </div>
            <div>
              <div className="font-semibold">Do you work year-round?</div>
              <p>We work most of the year. In cold snaps or heavy rain, we’ll schedule around the weather for best results.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[var(--border)] p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Get a free, no-pressure repair estimate</h2>
          <p className="text-gray-700">
            Serving homeowners and small businesses across Concord, Harrisburg, Kannapolis, and nearby communities.
          </p>
          <div className="mt-4 flex gap-3">
            <Link to="/estimates" className="rounded-lg bg-black px-4 py-2 text-white">Request Estimate</Link>
            <Link to="/contact" className="rounded-lg border px-4 py-2">Contact Us</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

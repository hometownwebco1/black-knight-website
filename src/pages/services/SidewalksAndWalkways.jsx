import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/utils/assetUrl';

const SITE = 'https://www.bksconcrete.com';
const HERO = assetUrl('/images/sidewalksservicesheroimage.jpeg');

export default function SidewalksAndWalkways() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Sidewalks & Walkways in Concord, Harrisburg & Kannapolis | BKS Concrete</title>
        <meta
          name="description"
          content="New concrete sidewalks and walkways, trip-hazard replacements, and ADA-friendly paths across Concord, Harrisburg, Kannapolis & Cabarrus County."
        />
        <link rel="canonical" href={`${SITE}/services/sidewalks-and-walkways`} />
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/services/sidewalks-and-walkways`} />
        <meta property="og:title" content="Sidewalks & Walkways | BKS Concrete" />
        <meta
          property="og:description"
          content="Residential and light-commercial sidewalks with proper base, slope, and jointing. Serving the Concord NC area."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="Concrete sidewalk installation in Concord NC"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Sidewalks & Walkways</h1>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
        {/* Intro + Quote card */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Safe, clean paths that drain correctly and last</h2>
            <p className="text-gray-700">
              We pour and replace sidewalks and walkways across <strong>Concord, Harrisburg, Kannapolis</strong> and
              the surrounding <strong>Cabarrus County</strong> area. From a simple front walk to HOA paths and school
              access routes, we build with the right base, slope, and joints so your concrete stays smooth and safe.
            </p>
          </div>
          <aside className="rounded-2xl border border-[var(--border)] p-5 bg-gray-50">
            <div className="font-semibold mb-1">What to include for a fast quote</div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Total length & typical width</li>
              <li>Curves, steps, or transitions</li>
              <li>Replace vs. new pour</li>
              <li>Finish: broom (standard) or decorative</li>
            </ul>
            <Link to="/estimates" className="mt-4 block">
              <Button className="w-full">Get Free Estimate</Button>
            </Link>
          </aside>
        </section>

        {/* What we build */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Common projects we handle</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">New Sidewalks & Entry Walks</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Home entry paths, garden walks, side-yard connectors</li>
                <li>HOA/common-area sidewalks and community paths</li>
                <li>Integrated steps, landings, and handrail blocks as needed</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Replacements & Trip-Hazard Fixes</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Remove/replace sunken or heaved sections</li>
                <li>Grind or re-pour to eliminate trip points at joints</li>
                <li>Correct poor drainage that’s undermining slabs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specs / How we build */}
        <section className="rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-2xl font-semibold mb-3">How we build durable sidewalks</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="font-semibold">Base & subgrade</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Excavate soft soils; compact to prevent future settlement</li>
                <li>Install graded stone base for drainage and support</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Thickness & joints</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Typical 4" thick slab for walks (6"+ at drives/approaches)</li>
                <li>Control joints at proper spacing to guide cracking</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Slope & drainage</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Consistent cross-slope to shed water away from buildings</li>
                <li>Transitions to driveways and steps planned up front</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Finishes</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Clean broom finish for traction</li>
                <li>Optional edging, bands, or decorative accents</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ADA considerations */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">ADA-friendly where required</h2>
          <p className="text-gray-700">
            For public or shared facilities we can incorporate ADA-friendly slopes, landings, and detectable warning
            surfaces at crossings. We’ll review your layout and recommend practical, compliant solutions.
          </p>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our process</h2>
          <ol className="list-decimal pl-5 text-gray-700 space-y-1">
            <li>On-site walk-through, measurements & layout</li>
            <li>Transparent pricing and schedule</li>
            <li>Prep: demo (if needed), grading, base & forms</li>
            <li>Pour & finish: broom texture with clean edges</li>
            <li>Saw or tool joints; cure & clean up</li>
          </ol>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Sidewalk FAQ (Concord NC area)</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <div className="font-semibold">How wide should a sidewalk be?</div>
              <p>
                Residential walks are commonly 3–4 ft; common-area paths are often 5 ft+ for comfortable passing.
                We’ll size it to your site and usage.
              </p>
            </div>
            <div>
              <div className="font-semibold">Can you replace just the bad sections?</div>
              <p>
                Yes—targeted removal and re-pour is often the most cost-effective fix for trip hazards and settled panels.
              </p>
            </div>
            <div>
              <div className="font-semibold">Do you offer decorative options?</div>
              <p>
                We can add borders/bands, change broom direction, or incorporate light decorative accents to elevate the look
                without high maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[var(--border)] p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Ready to plan your walkway?</h2>
          <p className="text-gray-700">
            Serving Concord, Harrisburg, Kannapolis, and nearby communities. Quick scheduling and clean job sites.
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


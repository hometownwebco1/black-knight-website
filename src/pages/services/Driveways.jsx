import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/utils/assetUrl';

const SITE = 'https://www.bksconcrete.com';
const HERO = assetUrl('/images/drivewayserviceheroimage.jpeg');

export default function Driveways() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Driveways in Concord, Harrisburg & Kannapolis | BKS Concrete</title>
        <meta
          name="description"
          content="Durable, well-graded concrete driveways with proper thickness, slope, and reinforcement. Broom, stamped, and colored finishes across Concord, Harrisburg, Kannapolis & Cabarrus County."
        />
        <link rel="canonical" href={`${SITE}/services/driveways`} />
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/services/driveways`} />
        <meta property="og:title" content="Concrete Driveways | BKS Concrete" />
        <meta
          property="og:description"
          content="Driveway installation, extensions, and tear-out/replacement done right in the Concord NC area."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="Freshly poured concrete driveway in Concord NC"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Concrete Driveways</h1>
        </div>
      </section>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-6 py-12 space-y-12">
        {/* Intro + Quote card */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-3">Built for daily use and North Carolina weather</h2>
            <p className="text-gray-700">
              We pour new driveways, extensions, and tear-out/replacements across <strong>Concord</strong>, <strong>Harrisburg</strong>,
              <strong> Kannapolis</strong>, and the rest of <strong>Cabarrus County</strong>. Proper base, thickness, reinforcement,
              and joint layout are what keep a driveway looking great and performing for years — we handle all four.
            </p>
          </div>
          <aside className="rounded-2xl border border-[var(--border)] p-5 bg-gray-50">
            <div className="font-semibold mb-1">For fast pricing, include:</div>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Width × length (and any turnouts/parking pads)</li>
              <li>Replace vs. new pour; demo/haul-off needed?</li>
              <li>Finish (broom, stamped, colored)</li>
              <li>Access, slope, and target timeline</li>
            </ul>
            <Link to="/estimates" className="mt-4 block">
              <Button className="w-full">Get Driveway Estimate</Button>
            </Link>
          </aside>
        </section>

        {/* What you get / options */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What you get</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Construction details</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Grading & compacted stone base for drainage/support</li>
                <li>Typical <strong>4"</strong> slab (thicker at approaches/edges)</li>
                <li>Reinforcement: fiber mesh or rebar per site needs</li>
                <li>Control joints aligned to layout to manage cracking</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] p-5">
              <h3 className="font-semibold mb-2">Finishes & options</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li><strong>Broom</strong> — clean traction, budget-friendly</li>
                <li><strong>Stamped</strong> — decorative patterns with release accents</li>
                <li><strong>Colored</strong> — integral or antique tones to match the home</li>
                <li>Borders, bands, and driveway extensions/parking pads</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specs / how we build */}
        <section className="rounded-2xl border border-[var(--border)] p-6">
          <h2 className="text-2xl font-semibold mb-3">How we build a driveway that lasts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="font-semibold">Base & subgrade</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Remove organics/soft spots; compact subgrade</li>
                <li>Install graded stone base for drainage and support</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Thickness & reinforcement</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>4" slab typical; thicker sections where vehicle loads demand</li>
                <li>Fiber mesh or rebar grid based on spans/soil</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Slope & edges</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Positive slope away from structures</li>
                <li>Clean, durable edges and transitions to street/garage</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Finishing & curing</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Uniform texture, tight joints, clean saw-cuts</li>
                <li>Proper cure time before vehicles (we’ll advise)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Replacement vs. repair */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Replace or repair?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="font-semibold">Good candidates for replacement</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Widespread structural cracking and base failure</li>
                <li>Severe tree-root heave or chronic drainage problems</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Repair/extension options</div>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Targeted panel replacement for isolated damage</li>
                <li>Add a parking pad or widen for easier access</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Driveway FAQ (Concord NC area)</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <div className="font-semibold">When can I drive on it?</div>
              <p>Typically after 5–7 days depending on weather and mix. We’ll give you a precise window at completion.</p>
            </div>
            <div>
              <div className="font-semibold">Will it crack?</div>
              <p>All concrete can crack. Proper base, joint layout, and reinforcement control where it cracks and how much it moves.</p>
            </div>
            <div>
              <div className="font-semibold">Do you seal driveways?</div>
              <p>Yes. We can apply a penetrating sealer after cure to help resist water, salts, and stains. Ask about our coating options.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[var(--border)] p-6 bg-gray-50">
          <h2 className="text-2xl font-semibold mb-2">Plan your driveway with BKS Concrete</h2>
          <p className="text-gray-700">
            Serving Concord, Harrisburg, Kannapolis, and nearby communities. Clean job sites and dependable schedules.
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

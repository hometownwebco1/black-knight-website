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
          content="New concrete sidewalks and walkways, trip-hazard replacements, and ADA-friendly paths across Concord, Harrisburg, Kannapolis & Cabarrus County. Clean edges, correct slope, and durable finishes."
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
              We pour and replace sidewalks and walkways across <strong>Concord, Harrisburg, Kannapolis</strong> and the
              surrounding <strong>Cabarrus County</strong> area. From a simple front walk to HOA paths and school access
              routes, we build with the right base, slope, and joints so your concrete stays smooth and safe.
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
              <h3 className="font-semibold mb-2">New Sid

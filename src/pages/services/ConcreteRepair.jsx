import React from 'react';
import { Helmet } from 'react-helmet';
import { assetUrl } from '@/utils/assetUrl';

const SITE = 'https://www.bksconcrete.com';
const HERO = assetUrl('/images/concreterepairheroimage.jpeg');

export default function ConcreteRepair() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Repair | BKS Concrete</title>
        <meta
          name="description"
          content="Crack repair, lifting/leveling, spalling correction, and structural fixes performed by BKS Concrete."
        />
        <link rel="canonical" href={`${SITE}/services/concrete-repair`} />
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/services/concrete-repair`} />
        <meta property="og:title" content="Concrete Repair | BKS Concrete" />
        <meta
          property="og:description"
          content="Professional concrete repair: cracks, sunken slabs, spalling, and structural issues."
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
          fetchpriority="high"   // ✅ single attribute
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Concrete Repair</h1>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* keep your existing sections/components here */}
      </main>
    </div>
  );
}

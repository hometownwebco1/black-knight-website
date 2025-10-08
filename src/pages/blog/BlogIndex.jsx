import React from 'react';
import { Helmet } from 'react-helmet';
import { assetUrl } from '@/utils/assetUrl';

const HERO = assetUrl('/images/blogpagehero.jpeg');
const SITE = 'https://www.bksconcrete.com';

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Tips & Guides | BKS Concrete Blog</title>
        <meta
          name="description"
          content="Concrete how-tos, driveway maintenance, patio ideas, and practical repair advice from BKS Concrete."
        />
        <link rel="canonical" href={`${SITE}/blog`} />

        {/* Preload + OG */}
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/blog`} />
        <meta property="og:title" content="Concrete Tips & Guides | BKS Concrete Blog" />
        <meta
          property="og:description"
          content="Concrete how-tos, driveway maintenance, patio ideas, and practical repair advice from BKS Concrete."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="BKS Concrete blog hero"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">BKS Concrete Blog</h1>
        </div>
      </section>

      {/* Blog list placeholder container (your existing list component can render here) */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Render your existing blog list/grid component here */}
        <div className="text-neutral-700">
          {/* Keep your current blog listing implementation unchanged. */}
        </div>
      </main>
    </div>
  );
}

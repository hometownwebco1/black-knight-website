import React from 'react';
import { Helmet } from 'react-helmet';
import { assetUrl } from '@/utils/assetUrl';

const HERO = assetUrl('/images/galleryhero.jpeg');
const SITE = 'https://www.bksconcrete.com';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Project Gallery | BKS Concrete</title>
        <meta
          name="description"
          content="Explore driveways, patios, walkways, pool decks, and decorative finishes completed by BKS Concrete."
        />
        <link rel="canonical" href={`${SITE}/gallery`} />

        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/gallery`} />
        <meta property="og:title" content="Concrete Project Gallery | BKS Concrete" />
        <meta
          property="og:description"
          content="Explore completed concrete projects across the area by BKS Concrete."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="BKS Concrete gallery hero"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Project Gallery</h1>
        </div>
      </section>

      {/* Your existing gallery carousel / grid renders here */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Keep current GalleryCarousel or grid implementation here unchanged. */}
      </main>
    </div>
  );
}

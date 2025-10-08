import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { assetUrl } from '@/utils/assetUrl';

// ✅ use the new hero you added
const HERO = assetUrl('/images/galleryhero4.jpeg');
const SITE = 'https://www.bksconcrete.com';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ⬇ pulled from your zip — keep your existing images/thumbnails
  const projects = [
    { id: 1, image: '/images/drivewaypouronnewbuild1.jpeg', title: 'Driveway Construction', description: 'Brand new driveway on a new build home.' },
    { id: 2, image: '/images/pationexttoscreenporch.jpeg', title: 'Residential Patio', description: 'New residential patio.' },
    { id: 3, image: '/images/cranejobmiddle.jpeg', title: 'Commercial Pour', description: 'Large-scale commercial job.' },
    { id: 4, image: '/images/foundationpour1.jpeg', title: 'Foundation Pour', description: 'Foundation going in for a new home.' },
    { id: 5, image: '/images/drivewayinconcorda.jpeg', title: 'Driveway in Concord', description: 'Smooth finish and clean edges.' },
    { id: 6, image: '/images/drivewayserviceheroimage.jpeg', title: 'Driveway Finish', description: 'Driveway finishing with proper slope.' },
    { id: 7, image: '/images/publicsidewalk1.jpeg', title: 'Public Sidewalk', description: 'Clean and ADA-friendly slope.' },
    { id: 8, image: '/images/sidewalksservicesheroimage.jpeg', title: 'Sidewalk Surface', description: 'Consistent texture across the path.' },
    { id: 9, image: '/images/stampedconcretecloseup.jpeg', title: 'Stamped Concrete', description: 'Decorative stamped finish close-up.' },
    { id:10, image: '/images/stampedpatiobrickhouse.jpeg', title: 'Brick Patio', description: 'Stamped patio next to brick house.' },
  ];

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
          alt="Concrete gallery hero"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">Project Gallery</h1>
        </div>
      </section>

      {/* 🔽 Your original gallery grid (from the zip) */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-muted-foreground mb-6">
          Browse a sample of our recent work. Want something similar?{' '}
          <Link to="/estimates" className="underline">Request a free estimate</Link>.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(project)}
                className="block w-full text-left"
                aria-label={`Open ${project.title}`}
              >
                <img
                  src={assetUrl(project.image)}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="font-semibold">{project.title}</div>
                  <div className="text-sm text-muted-foreground">{project.description}</div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal (unchanged logic) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative mx-auto max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 rounded-full bg-white/90 p-2 shadow"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={assetUrl(selectedImage.image)}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] w-full object-contain bg-black"
            />
            <div className="bg-black/70 text-white p-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { assetUrl } from '@/utils/assetUrl'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Thumbnails (live under /public/images) — leave as-is
  const projects = [
    { id: 1, image: '/images/drivewaypouronnewbuild1.jpeg', title: 'New Driveway Installation', description: 'Brand new driveway on a new build home.' },
    { id: 2, image: '/images/pationexttoscreenporch.jpeg', title: 'Residential Patio', description: 'New residential patio.' },
    { id: 3, image: '/images/cranejobmiddle.jpeg', title: 'Commercial Pour', description: 'Large-scale commercial job.' },
    { id: 4, image: '/images/foundationpour1.jpeg', title: 'Foundation Pour', description: 'Foundation going in for a new home.' },
    { id: 5, image: '/images/householdwalkway.jpeg', title: 'Residential Walkway', description: 'Freshly poured concrete walkway for a home.' },
    { id: 6, image: '/images/higherupimagenewdrwy.jpeg', title: 'Driveway Expansion', description: 'New addition to an existing driveway.' }
  ]

  const openModal = (project) => setSelectedImage(project)
  const closeModal = () => setSelectedImage(null)

  const HERO_REL = '/images-optimized/galleryhero.jpeg'
  const HERO = assetUrl(HERO_REL)

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Concrete Project Gallery | Black Knight Solutions | Concord NC</title>
        <meta
          name="description"
          content="Browse real project photos from Black Knight Solutions in Concord, NC including driveways, patios, walkways, foundations, and commercial concrete pours."
        />
        <meta property="og:title" content="Gallery of Completed Concrete Projects | Concord NC" />
        {/* For OG, safest is a full URL. If you want, hardcode the domain + assetUrl(HERO_REL). */}
        <meta property="og:image" content={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/gallery" />
        <link rel="preload" as="image" href={HERO} />
        <script type="application/ld+json">{`
          { "@context": "https://schema.org", "@type": "CollectionPage",
            "name": "Concrete Project Gallery",
            "description": "See completed concrete driveways, patios, and foundations by Black Knight Solutions in Concord, NC.",
            "url": "https://blackknight.hometownwebco.com/gallery" }
        `}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img
          src={HERO}
          alt="Black Knight Solutions concrete work showcase"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">Our Work Gallery</h1>
            <p className="mt-3 text-white/90 max-w-2xl">
              Real driveways, patios, walkways, and foundations built across Concord, NC and nearby.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free estimate on your concrete project.
          </p>
          <Link to="/estimates">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get an Estimate
            </Button>
          </Link>
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Black Knight Solutions · Serving Concord, NC · Licensed & Insured</p>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close Image"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Button } from '@/components/ui/button'
import { Home, Car, Footprints, Building, Wrench, Shield } from 'lucide-react'
import { assetUrl } from '@/utils/assetUrl'

// ✅ Use an image that actually exists in /public/images
const HERO = assetUrl('/images/drivewayserviceheroimage.jpeg')

const slugify = (str) =>
  str.toLowerCase().replace(/&/g, 'and').replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')

const Services = () => {
  const services = [
    {
      icon: <Car size={32} />,
      title: 'Driveways',
      description:
        'Professional driveway installation and repair. We create durable, attractive driveways that enhance your property value and provide years of reliable service.',
      features: [
        'New driveway installation',
        'Driveway repair and resurfacing',
        'Decorative concrete options',
        'Proper drainage solutions',
      ],
    },
    {
      icon: <Home size={32} />,
      title: 'Patios & Porches',
      description:
        'Transform your outdoor living space with custom concrete patios and porches. Perfect for entertaining, relaxation, and adding value to your home.',
      features: [
        'Custom patio design',
        'Stamped concrete patterns',
        'Colored concrete options',
        'Porch construction and repair',
      ],
    },
    {
      icon: <Footprints size={32} />,
      title: 'Sidewalks & Walkways',
      description:
        'Safe, attractive sidewalks and walkways that connect your property beautifully. We ensure proper grading and long-lasting construction.',
      features: [
        'Residential sidewalks',
        'Garden walkways',
        'ADA compliant construction',
        'Decorative walkway options',
      ],
    },
    {
      icon: <Building size={32} />,
      title: 'Foundations',
      description:
        'Solid foundation work for residential structures. We provide the strong base your project needs with precision and expertise.',
      features: [
        'House foundations',
        'Garage foundations',
        'Shed and outbuilding foundations',
        'Foundation repair services',
      ],
    },
    {
      icon: <Wrench size={32} />,
      title: 'Concrete Repair',
      description:
        'Expert repair services for existing concrete structures. We restore functionality and appearance to damaged concrete surfaces.',
      features: ['Crack repair', 'Surface restoration', 'Joint sealing', 'Concrete resurfacing'],
    },
    {
      icon: <Shield size={32} />,
      title: 'Protective Coatings',
      description:
        'Extend the life of your concrete with professional sealing and protective coatings. Protect against weather, stains, and wear.',
      features: ['Concrete sealing', 'Waterproofing', 'Stain protection', 'Anti-slip coatings'],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Services | Black Knight Solutions | Concord NC</title>
        <meta
          name="description"
          content="Explore our residential concrete services in Concord NC. Driveways, patios, sidewalks, foundations, and more from Black Knight Solutions."
        />
        <link rel="canonical" href="https://blackknight.hometownwebco.com/services" />

        <meta property="og:title" content="Residential Concrete Services | Concord NC" />
        <meta
          property="og:description"
          content="From driveways to patios, foundations, and repairs — Black Knight Solutions delivers professional concrete services in Concord, NC."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://blackknight.hometownwebco.com${HERO}`} />

        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Concrete Contracting",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Black Knight Solutions",
              "areaServed": { "@type": "Place", "name": "Concord NC" },
              "url": "https://blackknight.hometownwebco.com/services"
            },
            "description": "Driveways, patios, sidewalks, foundations, repairs, and protective coatings in Concord, NC."
          }
        `}</script>
      </Helmet>

      {/* ✅ Hero */}
      <div className="relative w-full h-96 mb-16 bg-gray-200">
        <img
          src={HERO}
          alt="Concrete services in Concord NC by Black Knight Solutions"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Our Services</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const slug = slugify(service.title)
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-[var(--border)] p-6 shadow-sm hover:shadow-md transition bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-[var(--border)] p-3">{service.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-[2px] h-2 w-2 rounded-full bg-black/70" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link to={`/services/${slug}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services

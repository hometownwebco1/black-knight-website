import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Concrete Contractor Concord NC | Black Knight Solutions</title>
        <meta
          name="description"
          content="Top-rated concrete contractor in Concord, NC. Specializing in driveways, patios, sidewalks, and more. Get a free quote today from Black Knight Solutions."
        />
        <meta property="og:title" content="Concrete Contractor in Concord NC | Black Knight Solutions" />
        <meta
          property="og:description"
          content="Serving Concord and surrounding areas with expert concrete driveways, patios, and sidewalks. Free estimates from licensed professionals."
        />
        <meta property="og:type" content="website" />
        {/* LocalBusiness Schema */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Black Knight Solutions",
          "image": "https://blackknight.hometownwebco.com/logo192.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Concord",
            "addressRegion": "NC",
            "postalCode": "28025",
            "addressCountry": "US"
          },
          "telephone": "(704) 787-4975",
          "url": "https://blackknight.hometownwebco.com",
          "description": "Residential concrete contractor in Concord NC specializing in driveways, patios, sidewalks, and more."
        }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Concrete Driveways, Patios & Sidewalks
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Reliable residential concrete services in Concord, NC & surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Black Knight Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Black Knight Solutions is your trusted partner for all residential concrete needs in Concord, NC. 
                With years of experience and a commitment to excellence, we deliver high-quality concrete solutions 
                that stand the test of time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From driveways and patios to sidewalks and retaining walls, we bring precision, professionalism, 
                and reliability to every project. Our team uses only the finest materials and proven techniques 
                to ensure your concrete work exceeds expectations.
              </p>
              <Button asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Free estimates and competitive pricing</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Quality materials and workmanship</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Timely project completion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600">
              Contact us today for a free consultation and estimate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">(704) 555-0123</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
              <p className="text-gray-600">Concord, NC & Surrounding Areas</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Mon–Fri: 7AM–6PM<br />Sat: 8AM–4PM</p>
            </div>
          </div>

          {/* Business Info Block (for trust) */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>Black Knight Solutions LLC · Licensed & Insured · Concord, NC 28025</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Sidewalks = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Sidewalks | Concord NC Walkway Construction</title>
        <meta
          name="description"
          content="Safe, durable, and attractive concrete sidewalks for homes and neighborhoods in Concord, NC and surrounding areas."
        />
        <meta property="og:title" content="Concrete Sidewalks | Concord NC Walkway Construction" />
        <meta
          property="og:description"
          content="Install or replace concrete sidewalks with expert service in Concord, NC. Smooth finishes, ADA-compliant options, and decorative walkways."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/sidewalks" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Concrete Sidewalks</h1>
        <p className="mb-4 text-lg">
          We design and install concrete sidewalks that are both functional and visually appealing. Whether you're adding a new walkway or replacing old cracked paths, we ensure proper slope, smooth finishes, and long-lasting strength.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>New sidewalk installation</li>
          <li>ADA-compliant walkways</li>
          <li>Repairs and leveling of old concrete paths</li>
          <li>Stamped or broom finishes available</li>
        </ul>

        <p className="mb-6">
          Serving Concord, Kannapolis, and nearby areas with expert sidewalk construction.
        </p>

        <div className="flex gap-4">
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link to="/contact">Request a Free Quote</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sidewalks

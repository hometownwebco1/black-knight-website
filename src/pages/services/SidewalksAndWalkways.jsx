import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const SidewalksAndWalkways = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Sidewalks & Walkways | Concord NC Paths</title>
        <meta
          name="description"
          content="Expert concrete sidewalks and walkways in Concord, NC. Safe, durable, and stylish paths for residential properties."
        />
        <meta property="og:title" content="Concrete Sidewalks & Walkways | Concord NC Paths" />
        <meta
          property="og:description"
          content="Walkways and sidewalks professionally installed in Concord and surrounding NC areas. Functional and beautiful concrete solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/sidewalks-and-walkways" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Concrete Sidewalks & Walkways</h1>
        <p className="mb-4 text-lg">
          Create a lasting impression and improve safety with our professional concrete sidewalks and walkways. Black Knight Solutions ensures precise grading, smooth finishes, and beautiful results.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Residential sidewalk installation</li>
          <li>Garden and backyard walkways</li>
          <li>ADA-compliant access paths</li>
          <li>Decorative concrete designs and finishes</li>
        </ul>

        <p className="mb-6">
          We serve Concord, Harrisburg, Kannapolis, and the broader Cabarrus County area with top-tier sidewalk and path installations.
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

export default SidewalksAndWalkways

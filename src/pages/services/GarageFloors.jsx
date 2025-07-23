import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const GarageFloors = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Garage Concrete Floors | Concord NC Residential Concrete</title>
        <meta
          name="description"
          content="High-strength concrete garage floors with optional sealers and finishes. Serving Concord, NC and surrounding cities."
        />
        <meta property="og:title" content="Garage Concrete Floors | Concord NC Residential Concrete" />
        <meta
          property="og:description"
          content="Durable garage floor slabs and epoxy coatings in Concord, NC. High-load capacity, rebar-reinforced, and built to last."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/garage-floors" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Garage Concrete Floors</h1>
        <p className="mb-4 text-lg">
          We install garage floors that are built to handle heavy loads, vehicle traffic, and years of use without cracking or flaking. Our concrete work is clean, precise, and designed to perform.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>New garage floor slabs</li>
          <li>Interior shop and shed foundations</li>
          <li>Optional sealers and epoxy coatings</li>
          <li>High-load tolerance with rebar reinforcement</li>
        </ul>

        <p className="mb-6">
          Available in Concord, NC and surrounding locations such as Harrisburg and Midland.
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

export default GarageFloors

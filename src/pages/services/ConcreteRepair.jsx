import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const ConcreteRepair = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Repair Services | Concord NC Restoration Experts</title>
        <meta
          name="description"
          content="Concrete crack repair, resurfacing, and sealing in Concord NC. Restore and protect your concrete with expert repair services."
        />
        <meta property="og:title" content="Concrete Repair Services | Concord NC Restoration Experts" />
        <meta
          property="og:description"
          content="Repair damaged concrete with precision. Serving Concord NC with high-quality repair solutions for driveways, sidewalks, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/concrete-repair" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Concrete Repair & Restoration</h1>
        <p className="mb-4 text-lg">
          Concrete doesn’t last forever — but we can make it look and perform like new. Our concrete repair services restore safety, appearance, and strength to your property’s surfaces.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Crack and spalling repair</li>
          <li>Surface grinding and smoothing</li>
          <li>Concrete patching and overlays</li>
          <li>Joint repair and sealing</li>
        </ul>

        <p className="mb-6">
          If your concrete is showing wear, we can help. Proudly serving homeowners across Concord and Cabarrus County.
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

export default ConcreteRepair

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const RetainingWalls = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Retaining Walls | Concord NC Landscape Solutions</title>
        <meta
          name="description"
          content="Concrete retaining walls for erosion control, landscape support, and raised beds. Serving Concord, NC and surrounding areas."
        />
        <meta property="og:title" content="Concrete Retaining Walls | Concord NC Landscape Solutions" />
        <meta
          property="og:description"
          content="Engineered concrete retaining walls in Concord, NC for landscaping, erosion control, and elevated beds. Built strong and built to last."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/retaining-walls" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Retaining Walls</h1>
        <p className="mb-4 text-lg">
          Control soil erosion and shape your landscape with strong, long-lasting concrete retaining walls. We design and build functional structures that support your property and enhance curb appeal.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Landscape walls and bed elevation</li>
          <li>Drainage systems integrated</li>
          <li>Custom heights and finishes</li>
          <li>Engineered for long-term strength</li>
        </ul>

        <p className="mb-6">
          Serving Concord, NC and neighboring areas including Harrisburg and Mt. Pleasant.
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

export default RetainingWalls
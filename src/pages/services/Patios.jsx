import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Patios = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Patios & Porches | Concord NC Outdoor Living</title>
        <meta
          name="description"
          content="Custom concrete patios and porches in Concord, NC. Perfect for entertaining and adding value to your home. Decorative concrete options available."
        />
        <meta property="og:title" content="Concrete Patios & Porches | Concord NC Outdoor Living" />
        <meta
          property="og:description"
          content="Create a custom patio or porch in Concord, NC with Black Knight Solutions. Stylish, low-maintenance, and built to last — perfect for entertaining and relaxing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/patios" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Patios & Porches</h1>
        <p className="mb-4 text-lg">
          Transform your outdoor space with a custom concrete patio or porch. Whether you want a space to entertain or relax, we offer durable, low-maintenance options that look great and last for years.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Stamped and colored patio designs</li>
          <li>Front porch concrete resurfacing</li>
          <li>Outdoor living space extensions</li>
          <li>Custom shapes and textures</li>
        </ul>

        <p className="mb-6">
          Serving Concord, Midland, Harrisburg, and beyond with expert outdoor concrete work.
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

export default Patios

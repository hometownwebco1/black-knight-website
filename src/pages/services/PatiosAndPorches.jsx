import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const PatiosAndPorches = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Patios & Porches | Concord NC Outdoor Living</title>
        <meta
          name="description"
          content="Custom concrete patios and porches in Concord, NC. Stamped and decorative concrete options for beautiful outdoor spaces."
        />
        <meta property="og:title" content="Concrete Patios & Porches | Concord NC Outdoor Living" />
        <meta
          property="og:description"
          content="Transform your backyard with custom concrete patios and porches. Serving Concord, Harrisburg, and surrounding areas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/patios-and-porches" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Custom Patios & Porches</h1>
        <p className="mb-4 text-lg">
          Make the most of your outdoor space with a custom concrete patio or porch built for beauty and function. Perfect for relaxing, entertaining, and increasing your home’s value.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Custom patio design and layout</li>
          <li>Stamped and decorative concrete finishes</li>
          <li>Colored concrete options for added style</li>
          <li>Front porch construction or repair</li>
        </ul>

        <p className="mb-6">
          Serving Concord, NC and surrounding cities with high-quality outdoor concrete work.
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

export default PatiosAndPorches

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const PoolDecks = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Pool Decks | Concord NC Decorative Concrete</title>
        <meta
          name="description"
          content="Custom concrete pool decks in Concord, NC. Stamped, slip-resistant, and durable designs for residential pool areas."
        />
        <meta property="og:title" content="Concrete Pool Decks | Concord NC Decorative Concrete" />
        <meta
          property="og:description"
          content="Stamped and slip-resistant concrete pool decks in Concord, NC. Durable, low-maintenance designs perfect for entertaining by the pool."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/pool-decks" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Concrete Pool Decks</h1>
        <p className="mb-4 text-lg">
          Upgrade your backyard oasis with a beautiful and durable concrete pool deck. We offer slip-resistant, decorative concrete finishes that are easy to maintain and perfect for outdoor entertaining.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Stamped and textured concrete finishes</li>
          <li>Heat-reflective surface options</li>
          <li>Crack-resistant construction</li>
          <li>Water-draining installation design</li>
        </ul>

        <p className="mb-6">
          Serving Concord, NC and the Lake Norman and Cabarrus County regions.
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

export default PoolDecks

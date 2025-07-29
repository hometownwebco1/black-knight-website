import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const ProtectiveCoatings = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Sealing & Coatings | Concord NC Surface Protection</title>
        <meta
          name="description"
          content="Extend the life of your concrete with professional sealing and coatings in Concord NC. Weatherproof, anti-slip, and stain-resistant protection."
        />
        <meta property="og:title" content="Concrete Sealing & Coatings | Concord NC Surface Protection" />
        <meta
          property="og:description"
          content="Protect your investment with long-lasting concrete coatings. Black Knight Solutions offers sealing and waterproofing in Concord NC."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/protective-coatings" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Concrete Sealing & Protective Coatings</h1>
        <p className="mb-4 text-lg">
          Your concrete surfaces face daily exposure to moisture, UV, oil, and traffic. Our professional-grade coatings protect and preserve your investment for years to come.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Penetrating and film-forming sealers</li>
          <li>Waterproofing for outdoor slabs</li>
          <li>Oil- and stain-resistant coatings</li>
          <li>Anti-slip safety finishes</li>
        </ul>

        <p className="mb-6">
          Whether for a driveway, patio, or garage floor — we help Concord homeowners protect their concrete from the elements.
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

export default ProtectiveCoatings

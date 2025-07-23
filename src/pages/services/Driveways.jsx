import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Driveways = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Driveways | Concord NC Driveway Installation</title>
        <meta
          name="description"
          content="Professional concrete driveway installation and repair in Concord, NC. Serving Cabarrus County with high-quality, long-lasting driveway solutions."
        />
        <meta property="og:title" content="Concrete Driveways | Concord NC Driveway Installation" />
        <meta
          property="og:description"
          content="High-quality concrete driveway installation and repair in Concord, NC. Built to last with expert craftsmanship from Black Knight Solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/driveways" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Concrete Driveway Installation</h1>
        <p className="mb-4 text-lg">
          A professionally installed driveway boosts curb appeal and property value. At Black Knight Solutions, we build concrete driveways that are built to last and tailored to your home’s style and needs.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>New driveway construction</li>
          <li>Removal and replacement of damaged driveways</li>
          <li>Decorative and stamped concrete options</li>
          <li>Proper drainage and grading included</li>
        </ul>

        <p className="mb-6">
          Proudly serving Concord, Kannapolis, Harrisburg, and the surrounding Cabarrus County area.
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

export default Driveways


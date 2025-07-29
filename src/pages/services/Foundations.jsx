import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Foundations = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Concrete Foundations | Concord NC Slabs & Footings</title>
        <meta
          name="description"
          content="Reliable concrete foundation installation in Concord, NC. Slabs, footings, and foundation repair for residential structures."
        />
        <meta property="og:title" content="Concrete Foundations | Concord NC Slabs & Footings" />
        <meta
          property="og:description"
          content="Black Knight Solutions offers solid concrete foundation work in Concord NC. Start your structure on the right foot."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/foundations" />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-primary">Concrete Foundation Services</h1>
        <p className="mb-4 text-lg">
          A solid foundation is essential to any successful construction project. We specialize in precise, code-compliant concrete foundations that support your structure for decades to come.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>New home and garage foundations</li>
          <li>Shed and outbuilding pads</li>
          <li>Footings and grade beams</li>
          <li>Foundation repair and stabilization</li>
        </ul>

        <p className="mb-6">
          Serving Concord, NC and surrounding regions with high-integrity foundation construction backed by experience and quality materials.
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

export default Foundations

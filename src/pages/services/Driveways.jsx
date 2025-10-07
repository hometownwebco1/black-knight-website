import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Driveways() {
  const HERO = '/images/drivewayserviceheroimage.jpeg'
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Concrete Driveways in Concord NC | Black Knight Solutions</title>
        <meta name="description" content="Durable, well-graded concrete driveways in Concord, Kannapolis, and Harrisburg. Broom, stamped, and colored finishes. Free estimates." />
        <meta property="og:title" content="Concrete Driveways | Concord NC" />
        <meta property="og:description" content="Driveway installation, extensions, and tear-out/replacement across Cabarrus County." />
        <meta property="og:image" content={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bksconcrete.com/services/driveways" />
        <link rel="preload" as="image" href={HERO} />
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img src={HERO} alt="Freshly poured concrete driveway in Concord NC" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Concrete Driveways</h1>
            <p className="mt-3 text-white/90">Built to proper thickness, slope, and reinforcement for long-term performance.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">What you get</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Site prep & grading for proper drainage</li>
              <li>Minimum 4" slab (thicker where needed), fiber or rebar reinforcement</li>
              <li>Broom, stamped, or colored finish options</li>
              <li>Control joints laid out to reduce cracking</li>
            </ul>
            <h2 className="text-2xl font-semibold">Local service area</h2>
            <p>Concord, Kannapolis, Harrisburg, and greater Cabarrus County.</p>
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Get a free estimate</h3>
              <p className="text-sm text-gray-600 mb-4">Tell us about your driveway size, slope, and any existing cracking.</p>
              <Link to="/estimates"><Button className="w-full">Start Estimate</Button></Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function ProtectiveCoatings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Concrete Sealers & Protective Coatings | Concord NC</title>
        <meta
          name="description"
          content="Seal and protect your concrete in Concord NC. Penetrating sealers, acrylics, and high-traffic coatings for driveways, patios, and walkways."
        />
        <meta property="og:title" content="Concrete Sealers & Coatings | Concord NC" />
        <meta property="og:description" content="Protect against moisture, de-icing salts, and stains with the right coating for your slab." />
        <meta property="og:image" content="/images-optimized/protectivecoatingsheroimage.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/protective-coatings" />
        <link rel="preload" as="image" href="/images-optimized/protectivecoatingsheroimage.jpeg" />
        <script type="application/ld+json">{`
          { "@context": "https://schema.org", "@type": "Service", "name": "Concrete Protective Coatings",
            "areaServed": ["Concord NC","Cabarrus County NC"],
            "provider": { "@type": "LocalBusiness", "name": "Black Knight Solutions" } }
        `}</script>
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img
          src="/images-optimized/protectivecoatingsheroimage.jpeg"
          alt="Applying protective coating to a concrete floor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Protective Coatings & Sealers</h1>
            <p className="mt-3 text-white/90">Extend the life and look of your concrete with the right product.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Options we install</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Penetrating sealers (natural look, low sheen)</li>
              <li>Acrylic sealers (enhanced color, easier cleaning)</li>
              <li>High-traffic coatings for garages and interiors</li>
            </ul>

            <h2 className="text-2xl font-semibold">Best uses</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Driveways & patios (UV-stable coatings)</li>
              <li>Sidewalks & entryways</li>
              <li>Interior slabs and mudrooms</li>
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Get a recommendation</h3>
              <p className="text-sm text-gray-600 mb-4">Tell us where the slab is, and the look you want.</p>
              <Link to="/estimates">
                <Button className="w-full">Start Estimate</Button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Foundations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Concrete Foundations & Footings | Concord NC</title>
        <meta name="description" content="Reliable foundation pours, footings, and slabs on grade for additions, shops, and new builds in the Concord NC area." />
        <meta property="og:title" content="Foundations & Footings | Concord NC" />
        <meta property="og:description" content="Accurate layout, rebar, and consistent pours for long-term performance." />
        {/* ✅ prefix */}
        <meta property="og:image" content="/black-knight-website/public/images-optimized/foundationhero.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/foundations" />
        <link rel="preload" as="image" href="/black-knight-website/public/images-optimized/foundationhero.jpeg" />
        <script type="application/ld+json">{`
          {"@context":"https://schema.org","@type":"Service","name":"Concrete Foundations & Footings",
           "areaServed":["Concord NC","Cabarrus County NC"],
           "provider":{"@type":"LocalBusiness","name":"Black Knight Solutions"}}
        `}</script>
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img src="/black-knight-website/public/images-optimized/foundationhero.jpeg" alt="Concrete foundation pour in Concord NC" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Foundations & Footings</h1>
            <p className="mt-3 text-white/90">Accurate layout, reinforcement, and consistent pours.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">What we pour</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Footings and stem walls</li>
              <li>Slabs on grade for additions & shops</li>
              <li>Monolithic pours where appropriate</li>
            </ul>
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Plan your foundation</h3>
              <p className="text-sm text-gray-600 mb-4">Share drawings and dates—we’ll coordinate footing & slab schedules.</p>
              <Link to="/estimates"><Button className="w-full">Start Estimate</Button></Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

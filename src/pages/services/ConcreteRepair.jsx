import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function ConcreteRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Concrete Repair & Replacement | Concord NC</title>
        <meta
          name="description"
          content="Crack repair, settlement fixes, and tear-out/replacement for driveways, patios, and sidewalks in Concord & Cabarrus County."
        />
        <meta property="og:title" content="Concrete Repair | Concord NC" />
        <meta property="og:description" content="From crack repairs to full replacement—practical, long-lasting solutions." />
        <meta property="og:image" content="/images-optimized/concreterepairheroimage.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/concrete-repair" />
        <link rel="preload" as="image" href="/images-optimized/concreterepairheroimage.jpeg" />
        <script type="application/ld+json">{`
          { "@context": "https://schema.org", "@type": "Service", "name": "Concrete Repair",
            "areaServed": ["Concord NC","Kannapolis NC","Harrisburg NC"],
            "provider": { "@type": "LocalBusiness", "name": "Black Knight Solutions" } }
        `}</script>
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img
          src="/images-optimized/concreterepairheroimage.jpeg"
          alt="Concrete repair project in Concord NC"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Concrete Repair</h1>
            <p className="mt-3 text-white/90">Fix cracks, spalling, settlement, and drainage issues the right way.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Common repairs</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Crack routing and sealing</li>
              <li>Spall patching and surface defects</li>
              <li>Slab replacement where repair won’t hold</li>
              <li>Drainage corrections to prevent recurrence</li>
            </ul>

            <h2 className="text-2xl font-semibold">When to replace instead of repair</h2>
            <p>Advanced cracking, base failure, or severe settlement often makes replacement the economical long-term choice. We’ll give you an honest assessment either way.</p>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Free assessment</h3>
              <p className="text-sm text-gray-600 mb-4">Send photos and a brief description—we’ll recommend repair vs. replacement.</p>
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

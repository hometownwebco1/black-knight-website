import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Patios() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Concrete Patios in Concord NC | Stamped & Broom Finishes</title>
        <meta
          name="description"
          content="Custom concrete patios in Concord, Harrisburg, and Kannapolis. Stamped, broom, and colored finishes with proper drainage and joints."
        />
        <meta property="og:title" content="Concrete Patios | Concord NC" />
        <meta property="og:description" content="Stamped, broom, and colored patio finishes built for North Carolina weather." />
        <meta property="og:image" content="/images-optimized/servicepagehero.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/services/patios" />
        <link rel="preload" as="image" href="/images-optimized/servicepagehero.jpeg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Concrete Patios",
            "areaServed": ["Concord NC","Kannapolis NC","Harrisburg NC","Cabarrus County NC"],
            "provider": { "@type": "LocalBusiness", "name": "Black Knight Solutions" }
          }
        `}</script>
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img
          src="/images-optimized/servicepagehero.jpeg"
          alt="Concrete patio installation in Concord NC"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Concrete Patios</h1>
            <p className="mt-3 text-white/90">Beautiful, low-maintenance outdoor spaces—done right the first time.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Popular options</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stamped patterns with antiquing release</li>
              <li>Broom finish for grip and budget-friendliness</li>
              <li>Colored concrete and borders</li>
              <li>Steps, sitting walls, and grill pads</li>
            </ul>

            <h2 className="text-2xl font-semibold">Built for NC weather</h2>
            <p>Proper base, expansion joints, and slope to move water away from your home.</p>

            <h2 className="text-2xl font-semibold">Service area</h2>
            <p>Concord, Harrisburg, Kannapolis, and nearby communities.</p>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Free patio estimate</h3>
              <p className="text-sm text-gray-600 mb-4">Share size, finish, and any steps or borders you want.</p>
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

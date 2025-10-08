import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Sidewalks() {
  const HERO = '/images/sidewalksservicesheroimage.jpeg'
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Concrete Sidewalks & Walkways | Concord, Harrisburg, Kannapolis</title>
        <meta name="description" content="New sidewalks, replacements, and ADA-friendly walkways across the Concord NC area. Smooth finishes, correct slopes, and clean edges." />
        <meta property="og:title" content="Sidewalks & Walkways | Concord NC" />
        <meta property="og:description" content="Residential and light-commercial walkways with proper slope and control joints." />
        <meta property="og:image" content={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bksconcrete.com/services/sidewalks" />
        <link rel="preload" as="image" href={HERO} />
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img src={HERO} alt="Concrete sidewalk installation in Concord NC" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Sidewalks & Walkways</h1>
            <p className="mt-3 text-white/90">Clean, safe paths with proper slope and jointing.</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">We handle</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>New sidewalks and walkways</li>
              <li>Trip-hazard replacement sections</li>
              <li>Community path upgrades</li>
              <li>Home entry walks and garden paths</li>
            </ul>
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Request a quote</h3>
              <p className="text-sm text-gray-600 mb-4">Share length, width, and any curves or steps.</p>
              <Link to="/estimates"><Button className="w-full">Start Estimate</Button></Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

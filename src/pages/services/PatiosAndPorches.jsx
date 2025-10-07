import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useMemo, useState } from 'react'

export default function PatiosAndPorches() {
  // Robust public-path handling for CRA, Vite, and non-root deploys:
  const base =
    (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ||
    (typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL) ||
    '/'

  // Build the URL relative to the app's base (fixes gray hero when the site isn't served from "/")
  const initialHero = useMemo(() => {
    const cleaned = base.endsWith('/') ? base : base + '/'
    return `${cleaned}images/patioservicepagehero.jpeg`
  }, [base])

  const [heroSrc, setHeroSrc] = useState(initialHero)

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Concrete Patios & Porches in Concord NC | Stamped & Broom Finishes</title>
        <meta
          name="description"
          content="Custom concrete patios and porches in Concord, Harrisburg, and Kannapolis. Stamped, broom, and colored finishes with proper drainage and joints."
        />
        <meta property="og:title" content="Concrete Patios & Porches | Concord NC" />
        <meta
          property="og:description"
          content="Stamped, broom, and colored patio finishes built for North Carolina weather."
        />
        <meta property="og:image" content={`https://www.bksconcrete.com/images/patioservicepagehero.jpeg`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bksconcrete.com/services/patios-and-porches" />
        <link rel="preload" as="image" href={heroSrc} />
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img
          src={heroSrc}
          alt="Concrete patio and porch installation in Concord NC"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          // Fallback in case base path logic still mismatches prod:
          onError={() => setHeroSrc('/images/patioservicepagehero.jpeg')}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Concrete Patios &amp; Porches</h1>
            <p className="mt-3 text-white/90">
              Beautiful, low-maintenance outdoor spaces—done right the first time.
            </p>
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
          </div>
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Free estimate</h3>
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

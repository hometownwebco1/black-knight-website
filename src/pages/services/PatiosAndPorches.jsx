import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function PatiosAndPorches() {
  // Try multiple common filename variants to bulletproof path/case/extension issues in production.
  const HERO_CANDIDATES = [
    '/images/patioservicepagehero.jpeg',
    '/images/patioservicepagehero.jpg',
    '/images/patioservicepagehero.JPG',
    '/images/patioServicePageHero.jpeg',
    '/images/patioServicePageHero.jpg',
    '/images/patioservicepagehero.png'
  ]

  const [heroSrc, setHeroSrc] = useState(HERO_CANDIDATES[0])
  const [attemptIdx, setAttemptIdx] = useState(0)

  // If the first load fails, onError will rotate through candidates
  const handleHeroError = () => {
    if (attemptIdx < HERO_CANDIDATES.length - 1) {
      const next = attemptIdx + 1
      setAttemptIdx(next)
      setHeroSrc(HERO_CANDIDATES[next])
    } else {
      // final fallback: keep section usable without image
      setHeroSrc('')
    }
  }

  // Preload the first candidate for faster paint
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = HERO_CANDIDATES[0]
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const ABSOLUTE_OG = heroSrc ? `https://www.bksconcrete.com${heroSrc}` : 'https://www.bksconcrete.com/images/og-default.jpg'

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
        <meta property="og:image" content={ABSOLUTE_OG} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bksconcrete.com/services/patios-and-porches" />
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px] bg-gray-200">
        {heroSrc ? (
          <img
            src={heroSrc}
            alt="Concrete patio and porch installation in Concord NC"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            onError={handleHeroError}
          />
        ) : null}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Concrete Patios & Porches</h1>
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

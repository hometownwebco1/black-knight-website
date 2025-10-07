import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog | Concrete Tips & Local Projects | Black Knight Solutions, Concord NC</title>
        <meta
          name="description"
          content="Practical concrete maintenance tips, design ideas, and local Concord NC project spotlights from Black Knight Solutions."
        />
        <meta property="og:title" content="Blog | Black Knight Solutions, Concord NC" />
        <meta property="og:description" content="Concrete tips, design ideas, and Concord-area project spotlights." />
        <meta property="og:image" content="/images-optimized/blogpagehero.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/blog" />
        <link rel="preload" as="image" href="/images-optimized/blogpagehero.jpeg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Black Knight Solutions Blog",
            "url": "https://blackknight.hometownwebco.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Black Knight Solutions"
            }
          }
        `}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img
          src="/images-optimized/blogpagehero.jpeg"
          alt="Black Knight Solutions blog cover showing finished concrete work"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Concrete Tips & Local Projects</h1>
            <p className="mt-3 text-white/90">Ideas, maintenance advice, and job stories from around Concord & Cabarrus County.</p>
          </div>
        </div>
      </section>

      {/* Body placeholder – keeps existing blog list mechanism intact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-700">
          Explore our latest posts below. Have a question you want answered on the blog?{' '}
          <Link to="/contact" className="underline">Contact us</Link>.
        </p>
      </div>
    </div>
  )
}

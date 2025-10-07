import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { posts } from '@/data/posts'

function withFallback(primary, fallback) {
  return (e) => {
    const img = e.currentTarget
    if (img.dataset.fallbackApplied) return
    img.dataset.fallbackApplied = '1'
    img.src = fallback
  }
}

export default function Blog() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: sorted.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://blackknight.hometownwebco.com/blog/${p.slug}`,
      name: p.title
    })),
  }

  const primary = '/images-optimized/blogpagehero.jpeg'
  const fallback = '/black-knight-website/public/images-optimized/blogpagehero.jpeg'

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog | Concrete Tips & Local Projects | Black Knight Solutions, Concord NC</title>
        <meta name="description" content="Practical concrete maintenance tips, design ideas, and local Concord NC project spotlights from Black Knight Solutions." />
        <meta property="og:title" content="Blog | Black Knight Solutions, Concord NC" />
        <meta property="og:description" content="Concrete tips, design ideas, and Concord-area project spotlights." />
        {/* og:image can’t “fallback”, so keep the primary */}
        <meta property="og:image" content={primary} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/blog" />
        <link rel="preload" as="image" href={primary} />
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      </Helmet>

      <section className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
        <img
          src={primary}
          onError={withFallback(primary, fallback)}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-700 mb-8">
          Explore our latest posts below. Have a question you want answered on the blog? <Link to="/contact" className="underline">Contact us</Link>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{new Date(post.date).toLocaleDateString()}</p>
                  <p className="text-gray-700 mt-3">{post.excerpt || 'Read more…'}</p>
                  <Button className="mt-4">Read Article</Button>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

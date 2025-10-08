import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { posts } from '@/data/posts';
import { assetUrl } from '@/utils/assetUrl';

// Use a stable blog hero from /public/images
const HERO = assetUrl('/images/Bloghero.jpeg');
const SITE = 'https://www.bksconcrete.com';

export default function Blog() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Concrete Tips & Guides | Black Knight Solutions Blog</title>
        <meta
          name="description"
          content="Concrete how-tos, driveway maintenance, patio ideas, and practical repair advice from BKS Concrete."
        />
        <link rel="canonical" href={`${SITE}/blog`} />
        <link rel="preload" as="image" href={HERO} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/blog`} />
        <meta property="og:title" content="Concrete Tips & Guides | BKS Concrete Blog" />
        <meta
          property="og:description"
          content="Concrete how-tos, driveway maintenance, patio ideas, and practical repair advice."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="BKS Concrete blog hero"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
          <h1 className="text-3xl font-semibold text-white md:text-5xl">BKS Concrete Blog</h1>
        </div>
      </section>

      {/* 🔽 Your original blog list/grid from the zip */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition hover:shadow-md"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                {post.image && (
                  <img
                    src={assetUrl(post.image)}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mt-3">{post.excerpt || 'Read more…'}</p>
                  <Button className="mt-4">Read Article</Button>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

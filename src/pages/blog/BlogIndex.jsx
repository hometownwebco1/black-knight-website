import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { posts } from '@/data/posts'

const BlogIndex = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
      <Helmet>
        <title>Blog | Concrete Tips & Outdoor Projects | Concord NC</title>
        <meta name="description" content="Tips, guides, and updates from Black Knight Solutions — concrete driveways, patios, and outdoor living in Concord NC and surrounding areas." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Black Knight Blog</h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.slug} className="border-b pb-6">
              <h2 className="text-2xl font-semibold mb-1">
                <Link to={`/blog/${post.slug}`} className="hover:underline text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString()}</p>
              <p className="mb-2">{post.description}</p>
              <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-blue-600 hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogIndex

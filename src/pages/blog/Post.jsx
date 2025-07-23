import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { posts } from '@/data/posts'

const Post = () => {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen py-20 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
      <Helmet>
        <title>{post.title} | Black Knight Solutions</title>
        <meta name="description" content={post.description} />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-primary">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">{new Date(post.date).toLocaleDateString()}</p>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
        <div className="mt-8">
          <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Post

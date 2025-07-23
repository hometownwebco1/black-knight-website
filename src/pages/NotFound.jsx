import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center text-gray-800">
      <Helmet>
        <title>Page Not Found | Black Knight Solutions</title>
        <meta name="description" content="Sorry, the page you’re looking for doesn’t exist. Visit our home page or contact us for help." />
      </Helmet>

      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="mb-6">Sorry, we couldn't find the page you were looking for.</p>

      <Link
        to="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound

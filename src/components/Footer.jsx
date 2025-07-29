import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4 text-sm">

        {/* Core Pages */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Pages</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li><Link to="/services/driveways" className="hover:underline">Concrete Driveways</Link></li>
            <li><Link to="/services/patios" className="hover:underline">Patios & Porches</Link></li>
            <li><Link to="/services/sidewalks" className="hover:underline">Sidewalks</Link></li>
            <li><Link to="/services/garage-floors" className="hover:underline">Garage Floors</Link></li>
            <li><Link to="/services/retaining-walls" className="hover:underline">Retaining Walls</Link></li>
          </ul>
        </div>

        {/* Contact & Info */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Contact</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><span className="text-gray-700">Phone:</span> (704) 787-4975</li>
            <li><span className="text-gray-700">Hours:</span> Mon–Fri: 7AM–6PM</li>
            <li><span className="text-gray-700">Area:</span> Concord, NC & Surrounding</li>
            <li><span className="text-gray-700">Facebook:</span>{' '}
              <a href="https://www.facebook.com/profile.php?id=61578313660385" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Follow Us
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Legal & Info</h2>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:underline">Terms of Use</Link></li>
            <li><Link to="/affiliate-disclosure" className="hover:underline">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center py-4 text-xs text-muted-foreground bg-gray-50">
        &copy; {new Date().getFullYear()} Black Knight Solutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

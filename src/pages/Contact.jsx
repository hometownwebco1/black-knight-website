import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  // Prefill message from URL param (e.g., ?message=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const messageFromUrl = params.get('message')
    if (messageFromUrl) {
      setFormData((prev) => ({ ...prev, message: decodeURIComponent(messageFromUrl) }))
    }
  }, [location])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) throw new Error('Failed to send message')

      alert('✅ Thank you! Your message has been sent.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (err) {
      console.error('Submission error:', err)
      alert('❌ Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Helmet>
        <title>Contact Black Knight Solutions | Free Concrete Estimate in Concord NC</title>
        <meta
          name="description"
          content="Contact Black Knight Solutions for residential concrete services in Concord, NC. Free estimates and friendly support for driveways, patios, walkways, and more."
        />
        <meta property="og:title" content="Get a Free Concrete Quote | Black Knight Solutions" />
        <meta
          property="og:description"
          content="Reach out to Black Knight Solutions for expert concrete work in Concord, NC and surrounding areas. Free estimates, fast response."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blackknight.hometownwebco.com/contact" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Black Knight Solutions",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Concord",
                "addressRegion": "NC",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-704-787-4975",
                "contactType": "Customer Service",
                "email": "info@blackknightsolutions.com"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Concord NC and surrounding areas"
              },
              "url": "https://blackknight.hometownwebco.com"
            }
          }
        `}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your concrete project? Get in touch with Black Knight Solutions today.
            We provide free estimates and are here to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(704) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="driveway">Driveway</option>
                  <option value="patio">Patio/Porch</option>
                  <option value="sidewalk">Sidewalk/Walkway</option>
                  <option value="foundation">Foundation</option>
                  <option value="repair">Concrete Repair</option>
                  <option value="coating">Protective Coating</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please describe your project, including size, location, and any specific requirements..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info section remains unchanged */}
          {/* ... */}
        </div>
      </div>
    </div>
  )
}

export default Contact


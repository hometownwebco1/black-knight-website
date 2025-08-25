import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState(null); // { type: 'success' | 'error', text: string }
  const honeypotRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Prefill message from URL (?message=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const messageFromUrl = params.get("message");
    if (messageFromUrl) {
      setFormData((prev) => ({
        ...prev,
        message: decodeURIComponent(messageFromUrl),
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    setNotice(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple spam trap: hidden field should stay empty
    if (honeypotRef.current && honeypotRef.current.value) {
      return;
    }

    setIsSubmitting(true);
    setNotice(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setNotice({
        type: "success",
        text: "Thank you! Your message has been sent.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setNotice({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const title = "Contact Black Knight Solutions | Free Concrete Estimate in Concord, NC";
  const description =
    "Contact Black Knight Solutions for residential concrete services in Concord, NC. Free estimates for driveways, patios, sidewalks, garage slabs, and more.";

  // FAQ: We already publish LocalBusiness JSON-LD in index.html.
  // Here we add ContactPage + Breadcrumb to avoid duplicating business data.
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Black Knight Solutions",
      "url": "https://www.blackknightsolutions.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Concord",
        "addressRegion": "NC",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-704-787-4975",
        "email": "info@bksconcrete.com",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Concord NC and surrounding areas"
      }
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.blackknightsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.blackknightsolutions.com/contact" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.blackknightsolutions.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://www.blackknightsolutions.com/contact" />
        <meta property="og:image" content="https://www.blackknightsolutions.com/favicon.ico" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.blackknightsolutions.com/favicon.ico" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(contactPageJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your concrete project? Get in touch with Black Knight Solutions today.
            We provide free estimates and fast answers.
          </p>
        </div>

        {notice && (
          <div
            className={`mx-auto mb-6 max-w-3xl rounded-lg border px-4 py-3 text-sm ${
              notice.type === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
            role="status"
          >
            {notice.text}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Spam trap (hidden) */}
              <input
                ref={honeypotRef}
                type="text"
                name="company"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-600">*</span>
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
                  Email Address <span className="text-red-600">*</span>
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
                  placeholder="(704) 787-4975"
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
                  Project Details <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Describe your project: size, location, finish (broom/stamped), timeline..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                <Send size={20} className="mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-8 text-gray-800">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <ul className="space-y-5 text-md">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-primary" />
                <div>
                  <span className="font-semibold">Phone:</span>
                  <br />
                  <a href="tel:+17047874975" className="hover:underline">
                    (704) 787-4975
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-primary" />
                <div>
                  <span className="font-semibold">Email:</span>
                  <br />
                  <a href="mailto:info@bksconcrete.com" className="hover:underline">
                    info@bksconcrete.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary" />
                <div>
                  <span className="font-semibold">Location:</span>
                  <br />
                  Concord, NC and surrounding areas
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-1 text-primary" />
                <div>
                  <span className="font-semibold">Business Hours:</span>
                  <br />
                  Mon–Fri: 7AM–6PM
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

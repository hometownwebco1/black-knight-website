import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Home, Car, Footprints, Building, Wrench, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Car size={32} />,
      title: 'Driveways',
      description: 'Professional driveway installation and repair. We create durable, attractive driveways that enhance your property value and provide years of reliable service.',
      features: ['New driveway installation', 'Driveway repair and resurfacing', 'Decorative concrete options', 'Proper drainage solutions']
    },
    {
      icon: <Home size={32} />,
      title: 'Patios & Porches',
      description: 'Transform your outdoor living space with custom concrete patios and porches. Perfect for entertaining, relaxation, and adding value to your home.',
      features: ['Custom patio design', 'Stamped concrete patterns', 'Colored concrete options', 'Porch construction and repair']
    },
    {
      icon: <Footprints size={32} />,
      title: 'Sidewalks & Walkways',
      description: 'Safe, attractive sidewalks and walkways that connect your property beautifully. We ensure proper grading and long-lasting construction.',
      features: ['Residential sidewalks', 'Garden walkways', 'ADA compliant construction', 'Decorative walkway options']
    },
    {
      icon: <Building size={32} />,
      title: 'Foundations',
      description: 'Solid foundation work for residential structures. We provide the strong base your project needs with precision and expertise.',
      features: ['House foundations', 'Garage foundations', 'Shed and outbuilding foundations', 'Foundation repair services']
    },
    {
      icon: <Wrench size={32} />,
      title: 'Concrete Repair',
      description: 'Expert repair services for existing concrete structures. We restore functionality and appearance to damaged concrete surfaces.',
      features: ['Crack repair', 'Surface restoration', 'Joint sealing', 'Concrete resurfacing']
    },
    {
      icon: <Shield size={32} />,
      title: 'Protective Coatings',
      description: 'Extend the life of your concrete with professional sealing and protective coatings. Protect against weather, stains, and wear.',
      features: ['Concrete sealing', 'Waterproofing', 'Stain protection', 'Anti-slip coatings']
    }
  ]

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Black Knight Solutions offers comprehensive residential concrete services in Concord, NC. 
            From new installations to repairs, we deliver quality workmanship on every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Free on-site consultation to discuss your project needs and vision</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Detailed planning and design with accurate measurements and specifications</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Professional installation using quality materials and proven techniques</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Completion</h3>
              <p className="text-gray-600 text-sm">Final inspection and cleanup, ensuring your complete satisfaction</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free estimate on your concrete project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services


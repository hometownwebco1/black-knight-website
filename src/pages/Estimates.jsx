import { useState } from 'react'
import { Helmet } from 'react-helmet'
import DrivewayCalculator from '../components/DrivewayCalculator'
import SlabCalculator from '../components/SlabCalculator'

const Estimates = () => {
  const [tab, setTab] = useState('driveway')

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        <title>Get Your Concrete Estimate | BKS Concrete</title>
        <meta name="description" content="Use our free online calculators to estimate concrete driveway and patio costs. Quick and easy tools from BKS Concrete." />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Concrete Project Estimates</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setTab('driveway')}
          className={`px-4 py-2 rounded ${tab === 'driveway' ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          Driveway Calculator
        </button>
        <button
          onClick={() => setTab('slab')}
          className={`px-4 py-2 rounded ${tab === 'slab' ? 'bg-black text-white' : 'bg-gray-200'}`}
        >
          Patio/Walkway Calculator
        </button>
      </div>

      {tab === 'driveway' && <DrivewayCalculator />}
      {tab === 'slab' && <SlabCalculator />}
    </div>
  )
}

export default Estimates

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const SlabCalculator = () => {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [finish, setFinish] = useState('Broomed')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const sqft = Number(length) * Number(width)

  const rates = {
    Broomed: { min: 11.75, max: 14.0 },
    Stamped: { min: 21.75, max: 26.0 }
  }

  const { min, max } = rates[finish]
  const estMin = (sqft * min).toFixed(2)
  const estMax = (sqft * max).toFixed(2)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleQuoteRequest = () => {
    const prefill = `Hi, I used the slab calculator. Here's my estimate:%0A%0A- Area: ${sqft} sqft%0A- Finish: ${finish}%0A- Estimated Range: $${estMin} – $${estMax}`
    navigate(`/contact?message=${encodeURIComponent(prefill)}`)
  }

  return (
    <div>
      <Helmet>
        <title>Slab Cost Calculator | BKS Concrete</title>
        <meta name="description" content="Estimate your patio or walkway concrete slab cost. Compare broomed vs stamped concrete finishes with this free tool." />
      </Helmet>

      <h2 className="text-2xl font-bold mb-4">Walkway & Patio Slab Calculator</h2>
      <p className="mb-6 text-gray-700">
        Estimate the cost of a 4&quot; concrete slab for patios, walkways, and small pads. Select your finish for an accurate comparison.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold">Length (ft)</label>
          <input type="number" min="0" value={length} onChange={(e) => setLength(e.target.value)} className="w-full p-2 border rounded" required />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Width (ft)</label>
          <input type="number" min="0" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full p-2 border rounded" required />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-semibold">Finish Type</label>
          <select value={finish} onChange={(e) => setFinish(e.target.value)} className="w-full p-2 border rounded">
            <option value="Broomed">Broomed</option>
            <option value="Stamped">Stamped</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Calculate Estimate
          </button>
        </div>
      </form>

      {submitted && (
        <div className="mt-10 bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Estimated Cost</h3>
          <p className="mb-2">Area: <strong>{sqft} sqft</strong></p>
          <p className="mb-2">Finish: <strong>{finish}</strong></p>
          <p className="mb-2">Estimated Price Range: <strong>${estMin} – ${estMax}</strong></p>
          <p className="text-sm text-gray-600 mt-4">
            This tool provides an estimate only. Final quotes depend on site prep, mix, access, and finish details.
          </p>
          <button onClick={handleQuoteRequest} className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Get Official Quote
          </button>
        </div>
      )}
    </div>
  )
}

export default SlabCalculator

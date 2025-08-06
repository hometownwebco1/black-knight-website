import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const DrivewayCalculator = () => {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [finish, setFinish] = useState('Broomed')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const rateMin = 12.2
  const rateMax = 15.7

  const sqft = Number(length) * Number(width)
  const estMin = (sqft * rateMin).toFixed(2)
  const estMax = (sqft * rateMax).toFixed(2)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleQuoteRequest = () => {
    const prefill = `Hi, I used the driveway calculator. Here's my estimate:%0A%0A- Area: ${sqft} sqft%0A- Finish: ${finish}%0A- Estimated Range: $${estMin} – $${estMax}`
    navigate(`/contact?message=${encodeURIComponent(prefill)}`)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>Driveway Cost Calculator | BKS Concrete</title>
        <meta name="description" content="Estimate your new concrete driveway cost with our calculator. Fast, easy, and accurate pricing for North Carolina homeowners." />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Driveway Cost Calculator</h1>
      <p className="mb-8 text-gray-700">
        Use this tool to estimate the cost of a turn-down slab concrete driveway. Prices are based on North Carolina averages.
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
          <label className="block mb-2 font-semibold">Finish</label>
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
          <h2 className="text-xl font-bold mb-4">Estimated Project Cost</h2>
          <p className="mb-2">Total Area: <strong>{sqft} sqft</strong></p>
          <p className="mb-2">Estimated Price Range: <strong>${estMin} – ${estMax}</strong></p>
          <p className="text-sm text-gray-600 mt-4">
            Note: This estimate is for general planning purposes. Final pricing depends on site prep, access, concrete mix, finishes, and other variables.
          </p>
          <button onClick={handleQuoteRequest} className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Get Official Quote
          </button>
        </div>
      )}
    </div>
  )
}

export default DrivewayCalculator

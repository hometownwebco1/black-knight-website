// src/components/SlabCalculator.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const SlabCalculator = () => {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [finish, setFinish] = useState('Broomed')
  const [grading, setGrading] = useState('None')
  const [access, setAccess] = useState('Easy')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const sqft = Number(length || 0) * Number(width || 0)

  const rates = {
    Broomed: { min: 11.75, max: 14.0 },
    Stamped: { min: 21.75, max: 26.0 }
  }

  const { min, max } = rates[finish]
  const estMin = (sqft * min).toFixed(2)
  const estMax = (sqft * max).toFixed(2)

  const handleSubmit = (e) => {
    // Keep client-side flow but add method="get" for semantics/SEO
    e.preventDefault()
    setSubmitted(true)
  }

  const handleQuoteRequest = () => {
    const prefill = `Hi, I used the slab calculator. Here's my estimate:

- Area: ${sqft} sqft
- Finish: ${finish}
- Grading: ${grading}
- Access: ${access}
- Estimated Range: $${estMin} – $${estMax}`

    navigate(`/contact?message=${encodeURIComponent(prefill)}`)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>Concrete Patio & Walkway Estimator | BKS Concrete</title>
        <meta
          name="description"
          content="Get a free estimate for your concrete patio or walkway project. Choose broomed or stamped finish, grading level, and access difficulty to refine your quote."
        />
        <link rel="canonical" href="https://www.bksconcrete.com/estimates/slab" />
      </Helmet>

      <h2 className="text-4xl font-bold mb-4">Slab Cost Estimator</h2>
      <p className="text-gray-700 mb-2">
        Use this tool to estimate the cost of a 4&quot; concrete slab for patios, walkways, and small pads.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Includes pricing for broomed or stamped finishes and basic site condition options.
      </p>

      {/* FIX: add method attribute; preserve client-side behavior */}
      <form
        method="get"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        noValidate
      >
        <div>
          <label htmlFor="slab-length" className="block mb-2 font-semibold">Length (ft)</label>
          <input
            id="slab-length"
            name="length"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., 20"
            required
          />
        </div>

        <div>
          <label htmlFor="slab-width" className="block mb-2 font-semibold">Width (ft)</label>
          <input
            id="slab-width"
            name="width"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., 12"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="slab-finish" className="block mb-2 font-semibold">Finish Type</label>
          <select
            id="slab-finish"
            name="finish"
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Broomed">Broomed (standard finish)</option>
            <option value="Stamped">Stamped (decorative upgrade)</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="slab-grading" className="block mb-2 font-semibold">Grading Required</label>
          <select
            id="slab-grading"
            name="grading"
            value={grading}
            onChange={(e) => setGrading(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="None">None – Ground is already level</option>
            <option value="Minor">Minor – Small slope or buildup</option>
            <option value="Major">Major – Heavy grading or fill needed</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="slab-access" className="block mb-2 font-semibold">Access Difficulty</label>
          <select
            id="slab-access"
            name="access"
            value={access}
            onChange={(e) => setAccess(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Easy">Easy – Concrete truck can back in</option>
            <option value="Moderate">Moderate – Wheelbarrow distance</option>
            <option value="Difficult">Difficult – Requires pumping or lift</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Calculate Estimate
          </button>
        </div>
      </form>

      {submitted && (
        <div className="mt-10 bg-gray-100 p-6 rounded shadow" aria-live="polite" aria-atomic="true">
          <h3 className="text-xl font-bold mb-4">Your Estimate</h3>
          <ul className="mb-4 space-y-1 text-gray-700">
            <li><strong>Area:</strong> {sqft} sqft</li>
            <li><strong>Finish:</strong> {finish}</li>
            <li><strong>Grading:</strong> {grading}</li>
            <li><strong>Access:</strong> {access}</li>
            <li><strong>Estimated Range:</strong> ${estMin} – ${estMax}</li>
          </ul>
          <p className="text-sm text-gray-600">
            This estimate is for planning purposes only. Final pricing will depend on detailed site inspection and material choices.
          </p>
          <button
            onClick={handleQuoteRequest}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Get Official Quote
          </button>
        </div>
      )}
    </div>
  )
}

export default SlabCalculator


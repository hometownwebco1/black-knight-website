// src/components/DrivewayCalculator.jsx
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const DrivewayCalculator = () => {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [finish, setFinish] = useState('Broomed')
  const [grading, setGrading] = useState('None')
  const [access, setAccess] = useState('Easy')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const rateMin = 12.2
  const rateMax = 15.7
  const sqft = Number(length || 0) * Number(width || 0)
  const estMin = (sqft * rateMin).toFixed(2)
  const estMax = (sqft * rateMax).toFixed(2)

  const handleSubmit = (e) => {
    // We include method="get" for correctness/SEO but still prevent a page nav
    e.preventDefault()
    setSubmitted(true)
  }

  const handleQuoteRequest = () => {
    const prefill = `Hi, I used the driveway calculator. Here's my estimate:

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
        <title>Concrete Driveway Cost Estimator | BKS Concrete</title>
        <meta
          name="description"
          content="Use our free calculator to estimate your concrete driveway cost. Includes finish type, grading, and site access options. Plan your project with confidence."
        />
        <link rel="canonical" href="https://www.bksconcrete.com/estimates/driveway" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-4">Driveway Cost Estimator</h1>
      <p className="text-gray-700 mb-2">
        This calculator gives you a ballpark cost based on your driveway’s size, finish type, and site conditions. Final quotes will be confirmed by our team.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Pricing is based on turn-down slab construction in North Carolina.
      </p>

      {/* FIX: add method for form semantics; keep client-side submit */}
      <form
        method="get"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        noValidate
      >
        <div>
          <label htmlFor="length" className="block mb-2 font-semibold">
            Length (ft)
          </label>
          <input
            id="length"
            name="length"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., 40"
            required
          />
        </div>

        <div>
          <label htmlFor="width" className="block mb-2 font-semibold">
            Width (ft)
          </label>
          <input
            id="width"
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
          <label htmlFor="finish" className="block mb-2 font-semibold">
            Finish Type
          </label>
          <select
            id="finish"
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
          <label htmlFor="grading" className="block mb-2 font-semibold">
            Grading Required
          </label>
          <select
            id="grading"
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
          <label htmlFor="access" className="block mb-2 font-semibold">
            Access Difficulty
          </label>
          <select
            id="access"
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
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Calculate Estimate
          </button>
        </div>
      </form>

      {submitted && (
        <div
          className="mt-10 bg-gray-100 p-6 rounded shadow"
          aria-live="polite"
          aria-atomic="true"
        >
          <h2 className="text-xl font-bold mb-4">Your Estimate</h2>
          <ul className="mb-4 space-y-1 text-gray-700">
            <li><strong>Area:</strong> {sqft} sqft</li>
            <li><strong>Finish:</strong> {finish}</li>
            <li><strong>Grading:</strong> {grading}</li>
            <li><strong>Access:</strong> {access}</li>
            <li><strong>Estimated Price Range:</strong> ${estMin} – ${estMax}</li>
          </ul>
          <p className="text-sm text-gray-600">
            This is a rough estimate. Site conditions and materials can affect final pricing. Our team will confirm everything before work begins.
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

export default DrivewayCalculator

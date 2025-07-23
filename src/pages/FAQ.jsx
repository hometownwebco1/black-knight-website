import { Helmet } from 'react-helmet'

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Concord, Kannapolis, Harrisburg, and the greater Cabarrus County area in North Carolina."
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, we provide no-obligation quotes for all residential concrete projects."
  },
  {
    question: "How long does it take to install a concrete driveway?",
    answer:
      "Most driveway projects are completed within 2–4 days depending on size, weather, and curing time."
  },
  {
    question: "Do you offer decorative or stamped concrete?",
    answer:
      "Yes — we offer stamped concrete, exposed aggregate, and colored concrete finishes for patios, porches, and walkways."
  },
  {
    question: "Is your work guaranteed?",
    answer:
      "Absolutely. We stand behind our workmanship and use high-quality materials for long-lasting results."
  }
]

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 text-gray-800">
      <Helmet>
        <title>FAQ | Concrete Contractor Questions | Black Knight Solutions</title>
        <meta name="description" content="Answers to the most common questions about concrete driveway and patio installation from Concord NC’s trusted contractor, Black Knight Solutions." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ

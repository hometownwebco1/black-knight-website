import { Helmet } from 'react-helmet'

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
      <Helmet>
        <title>Terms of Use | Black Knight Solutions</title>
        <meta name="description" content="Review the terms of use for accessing and using Black Knight Solutions' website and services." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">By accessing this website, you agree to comply with and be bound by these terms and conditions. If you disagree with any part of these terms, please do not use our website.</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>You must be 18 years or older to use this site.</li>
        <li>All content is protected by copyright.</li>
        <li>We reserve the right to modify content or discontinue the site at any time.</li>
      </ul>
      <p>For any questions, please contact us at blackknightsolutions@gmail.com.</p>
    </div>
  )
}

export default Terms

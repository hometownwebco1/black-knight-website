import { Helmet } from 'react-helmet'

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
      <Helmet>
        <title>Privacy Policy | Black Knight Solutions</title>
        <meta name="description" content="Learn how we handle your information at Black Knight Solutions. Your privacy is important to us." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">We respect your privacy. This policy outlines how we collect, use, and safeguard your information.</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>We collect basic contact info only when voluntarily submitted.</li>
        <li>We never sell or share your personal information.</li>
        <li>We use cookies to analyze traffic and improve user experience.</li>
      </ul>
      <p>If you have any questions or concerns, please contact us at blackknightsolutions@gmail.com.</p>
    </div>
  )
}

export default Privacy

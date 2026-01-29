import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800">
      <Helmet>
        <title>Privacy Policy | BKS Concrete</title>
        <meta
          name="description"
          content="Privacy policy for BKS Concrete. Learn how we collect, use, and protect your information."
        />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        We respect your privacy. This policy outlines how we collect, use, and safeguard your information.
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>We collect basic contact info only when voluntarily submitted.</li>
        <li>We never sell or share your personal information.</li>
        <li>We may use cookies to analyze traffic and improve user experience.</li>
      </ul>
      <p>
        If you have any questions or concerns, please contact us at{" "}
        <a className="underline" href="mailto:info@bksconcrete.com">
          info@bksconcrete.com
        </a>
        .
      </p>
    </div>
  );
};

export default Privacy;

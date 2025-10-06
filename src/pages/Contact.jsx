import { useEffect } from "react";

export default function Contact() {
  // Load GHL auto-resize script (React-safe)
  useEffect(() => {
    const src = "https://link.msgsndr.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 items-start gap-12 md:gap-16">
          {/* LEFT: business info panel */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight mb-3">
              Get a Free Estimate
            </h1>
            <p className="text-base leading-7 text-gray-600 mb-8">
              Tell us about your project and we’ll get back to you quickly.
            </p>

            <dl className="space-y-4 text-[15px] leading-6">
              <div className="flex">
                <dt className="w-24 font-semibold text-gray-800">Phone:</dt>
                <dd className="text-gray-700">
                  <a href="tel:9808254938" className="hover:underline">
                    (980) 825-4938
                  </a>
                </dd>
              </div>
              <div className="flex">
                <dt className="w-24 font-semibold text-gray-800">Email:</dt>
                <dd className="text-gray-700">
                  <a
                    href="mailto:info@bksconcrete.com"
                    className="hover:underline"
                  >
                    info@bksconcrete.com
                  </a>
                </dd>
              </div>
              <div className="flex">
                <dt className="w-24 font-semibold text-gray-800">Hours:</dt>
                <dd className="text-gray-700">Mon–Fri 9am–6pm</dd>
              </div>
            </dl>

            <ul className="mt-8 space-y-2 text-sm text-gray-600">
              <li>• Licensed & insured professionals</li>
              <li>• Local crews, on-time arrivals</li>
              <li>• Clear pricing before we start</li>
            </ul>
          </div>

          {/* RIGHT: GHL inline form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/PZIaEcxPSuQofrwX5426"
              style={{ width: "100%", height: 770, border: "none", borderRadius: "8px" }}
              id="inline-PZIaEcxPSuQofrwX5426"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Basic Contact Form"
              data-height="770"
              data-layout-iframe-id="inline-PZIaEcxPSuQofrwX5426"
              data-form-id="PZIaEcxPSuQofrwX5426"
              title="Basic Contact Form"
            />
            <noscript>Enable JavaScript to load the contact form.</noscript>
          </div>
        </div>
      </section>
    </div>
  );
}

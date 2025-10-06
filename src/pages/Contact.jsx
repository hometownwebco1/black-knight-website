import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Load GHL form auto-resize script once (React-safe)
    const src = "https://link.msgsndr.com/js/form_embed.js";
    const already = document.querySelector(`script[src="${src}"]`);
    if (!already) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <section className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: page copy / contact info (keep whatever you had here) */}
          <div>
            <h1 className="text-3xl font-semibold mb-4">Get a Free Estimate</h1>
            <p className="text-base text-gray-600 mb-6">
              Tell us about your project and we’ll get back to you quickly.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Phone:</strong> (###) ###-####</li>
              <li><strong>Email:</strong> you@yourdomain.com</li>
              <li><strong>Hours:</strong> Mon–Fri 8am–5pm</li>
            </ul>
          </div>

          {/* Right: GHL inline form embed */}
          <div className="rounded-xl border border-gray-200 p-4 shadow-sm bg-white">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/PZIaEcxPSuQofrwX5426"
              // React style object (not a string)
              style={{ width: "100%", height: 770, border: "none", borderRadius: "3px" }}
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
            <noscript>
              Please enable JavaScript to load the contact form.
            </noscript>
          </div>
        </div>
      </section>
    </div>
  );
}

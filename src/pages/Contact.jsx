import { Helmet } from "react-helmet";
import { useState } from "react";
import { assetUrl } from "@/utils/assetUrl";

const SITE = "https://www.bksconcrete.com";
const HERO = assetUrl("/images/galleryhero4.jpeg");

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "submitting", message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Simple spam honeypot (bots fill it, humans don’t)
    const honey = String(formData.get("company_website") || "").trim();
    if (honey) {
      setStatus({ state: "success", message: "Thanks — we’ll be in touch shortly." });
      form.reset();
      return;
    }

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      projectType: String(formData.get("projectType") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send. Please try again.");
      }

      setStatus({ state: "success", message: "Message sent. We’ll get back to you shortly." });
      form.reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: err?.message || "Something went wrong. Please call or email us.",
      });
    }
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Helmet>
        <title>Contact BKS Concrete | Free Concrete Estimate</title>
        <meta
          name="description"
          content="Request a free concrete estimate from BKS Concrete. Call (704) 787-4975 or email info@bksconcrete.com. Driveways, patios, sidewalks, slabs, repairs, and more."
        />
        <link rel="canonical" href={`${SITE}/contact`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/contact`} />
        <meta property="og:title" content="Contact BKS Concrete | Free Concrete Estimate" />
        <meta
          property="og:description"
          content="Get a fast quote for your concrete project. Call (704) 787-4975 or send a message online."
        />
        <meta property="og:image" content={`${SITE}${HERO}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}${HERO}`} />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[34vh] min-h-[260px] w-full overflow-hidden">
        <img
          src={HERO}
          alt="Contact BKS Concrete for a free estimate"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-10">
          <h1 className="text-3xl font-bold text-white md:text-5xl">Get a Free Estimate</h1>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 items-start gap-12 md:gap-16">
          {/* LEFT: business info */}
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-3">Fast response. Clear pricing.</h2>
            <p className="text-base leading-7 text-gray-600 mb-8">
              Tell us about your project and we’ll get back to you quickly.
            </p>

            <dl className="space-y-4 text-[15px] leading-6">
              <div className="flex">
                <dt className="w-24 font-semibold text-gray-800">Phone:</dt>
                <dd className="text-gray-700">
                  <a href="tel:7047874975" className="hover:underline">
                    (704) 787-4975
                  </a>
                </dd>
              </div>

              <div className="flex">
                <dt className="w-24 font-semibold text-gray-800">Email:</dt>
                <dd className="text-gray-700">
                  <a href="mailto:info@bksconcrete.com" className="hover:underline">
                    info@bksconcrete.com
                  </a>
                </dd>
              </div>

              <div className="flex">
                <dt className="w-24 font-semibold text-gray-800">Hours:</dt>
                <dd className="text-gray-700">Mon–Fri 7am–6pm</dd>
              </div>

              <div className="flex">
                <dt className="w-24 font-semibold text-gray-800">Service Area:</dt>
                <dd className="text-gray-700">Concord, NC & surrounding areas</dd>
              </div>
            </dl>

            <ul className="mt-8 space-y-2 text-sm text-gray-600">
              <li>• Licensed & insured professionals</li>
              <li>• Local crews, on-time arrivals</li>
              <li>• Clear pricing before we start</li>
            </ul>
          </div>

          {/* RIGHT: Basic form (no GHL) */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                name="company_website"
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label className="block text-sm font-medium text-gray-800">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">Phone</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="(704) 787-4975"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">Project Type</label>
                <select
                  name="projectType"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Driveway">Driveway</option>
                  <option value="Patio">Patio</option>
                  <option value="Sidewalk/Walkway">Sidewalk / Walkway</option>
                  <option value="Slab/Foundation">Slab / Foundation</option>
                  <option value="Repair/Resurface">Repair / Resurface</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
                  placeholder="Tell us what you’re looking to build (size, location, timeline, etc.)"
                />
              </div>

              <button
                type="submit"
                disabled={status.state === "submitting"}
                className="w-full rounded-lg bg-black px-4 py-3 text-white font-semibold hover:bg-black/90 disabled:opacity-60"
              >
                {status.state === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status.state !== "idle" && (
                <p
                  className={`text-sm ${
                    status.state === "success" ? "text-green-700" : status.state === "error" ? "text-red-700" : "text-gray-700"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

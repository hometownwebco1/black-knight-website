// api/send-email.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(str, max = 5000) {
  return String(str || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY in environment variables." });
  }

  // Honeypot anti-spam
  const honey = clean(req.body?.company_website, 200);
  if (honey) {
    return res.status(200).json({ success: true });
  }

  const name = clean(req.body?.name, 120);
  const email = clean(req.body?.email, 200);
  const phone = clean(req.body?.phone, 60);
  const projectType = clean(req.body?.projectType, 80);
  const message = clean(req.body?.message, 4000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email." });
  }

  // ✅ Best practice:
  // - FROM should be a domain sender you control (prevents spam + DMARC failures)
  // - REPLY-TO should be the user's email, so you can respond easily
  const FROM = "BKS Concrete <no-reply@bksconcrete.com>";
  const TO = "info@bksconcrete.com";

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: email,
      subject: `New Website Lead: ${name}${projectType ? ` (${projectType})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Website Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p style="color:#666;font-size:12px;">
            Sent from the website contact form.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again or call us." });
  }
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(str, max = 2000) {
  return String(str || "")
    .replace(/[<>]/g, "") // basic HTML injection protection
    .trim()
    .slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const name = clean(req.body?.name, 120);
  const email = clean(req.body?.email, 200);
  const phone = clean(req.body?.phone, 60);
  const projectType = clean(req.body?.projectType, 80);
  const message = clean(req.body?.message, 4000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const data = await resend.emails.send({
      from: "BKS Concrete <onboarding@resend.dev>",
      to: "info@bksconcrete.com",
      reply_to: email,
      subject: `New Website Lead: ${name}${projectType ? ` (${projectType})` : ""}`,
      html: `
        <h2>New Website Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ""}
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, businessName, message } = req.body

  try {
    const data = await resend.emails.send({
      from: 'Hometown Web Co <hello@hometownwebco.com>',
      to: 'woody@hometownwebco.com',
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    })

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}

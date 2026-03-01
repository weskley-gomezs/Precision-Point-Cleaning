import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, serviceType, city } = req.body;

  // Basic validation
  if (!name || !phone || !email || !serviceType) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Configure transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the business owner
    const mailOptions = {
      from: `"Precision Point Leads" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `New Lead: ${name} - ${serviceType}`,
      text: `
        New Lead Details:
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Service Type: ${serviceType}
        ${city ? `City: ${city}` : ''}
      `,
      html: `
        <h3>New Lead Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        ${city ? `<p><strong>City:</strong> ${city}</p>` : ''}
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "Lead submitted and email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send notification email. Check your SMTP settings on Vercel." });
  }
}

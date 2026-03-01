import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for lead submission
  app.post("/api/leads", async (req, res) => {
    const { name, phone, email, serviceType } = req.body;

    if (!name || !phone || !email || !serviceType) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure transporter
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
        `,
        html: `
          <h3>New Lead Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Type:</strong> ${serviceType}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Lead submitted and email sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      // Even if email fails, we might want to log the lead or return success to user
      // but for now, we'll return an error to be safe
      res.status(500).json({ error: "Failed to send notification email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

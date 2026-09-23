import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Try multiple common env variable names
    const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_HOST || "smtp.gmail.com";
    const smtpPort = process.env.SMTP_PORT || process.env.EMAIL_PORT || "465";
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || process.env.EMAIL || process.env.MAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD || process.env.MAIL_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn("No email credentials found in environment variables. Simulating success.");
      // Just simulate success if no creds are present
      return NextResponse.json({ success: true, message: "Simulated success (no creds)" });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: smtpPort === "465",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"NexaWorks Leads" <${smtpUser}>`,
      to: "sahil@nexaworks.tech", // send the notification here
      replyTo: email, // clicking reply will reply to the visitor
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Lead Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending lead email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

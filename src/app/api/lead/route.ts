import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ASSETS: Record<string, { file: string; title: string; intro: string }> = {
  guide: {
    file: "customer-signal-intelligence-architecture-guide.pdf",
    title: "Customer Signal Intelligence Architecture Guide",
    intro:
      "How churn, renewal, and expansion signals get from your scattered systems into actions your CS team takes every week — the four-layer architecture, design principles, and what good looks like.",
  },
  brief: {
    file: "sample-meeting-brief.pdf",
    title: "Sample Account Meeting Brief",
    intro:
      "An illustrative, anonymized example of the weekly account brief: the signals behind the risk, the evidence for each one, and the CSM actions we'd recommend.",
  },
};

export async function POST(req: Request) {
  try {
    const { name, email, source, asset } = await req.json();

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

    // 1. Notify the founder
    await transporter.sendMail({
      from: `"NexaWorks Leads" <${smtpUser}>`,
      to: "sahil@nexaworks.tech", // send the notification here
      replyTo: email, // clicking reply will reply to the visitor
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Lead Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>How they heard about us:</strong> ${source || "Not provided"}</p>
        <p><strong>Asset requested:</strong> ${asset && ASSETS[asset] ? ASSETS[asset].title : "None"}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    });

    // 2. Fulfill the lead magnet automatically (a fulfillment failure must not break lead capture)
    if (asset && ASSETS[asset]) {
      const a = ASSETS[asset];
      try {
        await transporter.sendMail({
          from: `"NexaWorks" <${smtpUser}>`,
          to: email,
          replyTo: "hello@nexaworks.tech",
          subject: `Your ${a.title}`,
          html: `
            <p>Hi${name && name !== "Sample brief request" ? ` ${name}` : ""},</p>
            <p>As promised — here is your <strong>${a.title}</strong>.</p>
            <p>${a.intro}</p>
            <p><a href="https://nexaworks.tech/${a.file}">Download the PDF</a></p>
            <p>If you want to see what this looks like built from <i>your</i> data, start with the free
            <a href="https://nexaworks.tech/account-risk-snapshot">Account Risk Snapshot</a> — your 20 riskiest
            accounts, ranked, in five business days.</p>
            <p>— Sahil, Founder @ NexaWorks</p>
          `,
        });
      } catch (fulfillError) {
        console.error("Fulfillment email failed (lead notification already sent):", fulfillError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending lead email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

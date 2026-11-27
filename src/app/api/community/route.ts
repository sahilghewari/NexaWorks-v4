import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Community applications: validated here, then saved to the "Muster Community Applications"
 * Google Sheet (via the Apps Script web app in COMMUNITY_SHEET_WEBHOOK) and emailed to the team.
 * The application counts as received if at least one of the two lands.
 */

const LIMITS = { name: 120, email: 200, title: 120, linkedin: 300, location: 120, whatsapp: 30 } as const;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.company_site, 200)) return NextResponse.json({ success: true });

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const title = clean(body.title, LIMITS.title);
  const linkedin = clean(body.linkedin, LIMITS.linkedin);
  const location = clean(body.location, LIMITS.location);
  const whatsapp = clean(body.whatsapp, LIMITS.whatsapp);

  if (!name || !email || !title || !linkedin || !location || !whatsapp) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  let linkedinUrl: URL;
  try {
    linkedinUrl = new URL(/^https?:\/\//i.test(linkedin) ? linkedin : `https://${linkedin}`);
  } catch {
    return NextResponse.json({ error: "Please enter your LinkedIn profile link." }, { status: 400 });
  }
  if (!/(^|\.)linkedin\.com$/i.test(linkedinUrl.hostname)) {
    return NextResponse.json({ error: "Please enter your LinkedIn profile link." }, { status: 400 });
  }
  if (!/^\+?[\d\s().-]{7,25}$/.test(whatsapp) || whatsapp.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ error: "Please enter your WhatsApp number with country code." }, { status: 400 });
  }

  const record = { name, email, title, linkedin: linkedinUrl.toString(), location, whatsapp };
  const sheet = await saveToSheet(record);
  const savedToSheet = sheet === "saved";

  const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_HOST || "smtp.gmail.com";
  const smtpPort = process.env.SMTP_PORT || process.env.EMAIL_PORT || "465";
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || process.env.EMAIL || process.env.MAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD || process.env.MAIL_PASS;
  if (!smtpUser || !smtpPass) {
    if (savedToSheet) return NextResponse.json({ success: true, sheet });
    console.error("[community] no sheet and no SMTP credentials; refusing to drop the application");
    return NextResponse.json(
      { error: "Applications are paused for a moment. Please email hello@nexaworks.tech.", sheet },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: smtpPort === "465",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const e = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    title: escapeHtml(title),
    linkedin: escapeHtml(linkedinUrl.toString()),
    location: escapeHtml(location),
    whatsapp: escapeHtml(whatsapp),
  };

  try {
    await transporter.sendMail({
      from: `"Muster Community" <${smtpUser}>`,
      to: "sahil@nexaworks.tech",
      replyTo: email,
      subject: `New community application: ${name.replace(/[\r\n]+/g, " ")} (${title.replace(/[\r\n]+/g, " ")})`,
      html: `
        <h2>New Muster community application</h2>
        <p><strong>Name:</strong> ${e.name}</p>
        <p><strong>Email:</strong> ${e.email}</p>
        <p><strong>Work title:</strong> ${e.title}</p>
        <p><strong>LinkedIn:</strong> <a href="${e.linkedin}">${e.linkedin}</a></p>
        <p><strong>Based in:</strong> ${e.location}</p>
        <p><strong>WhatsApp:</strong> ${e.whatsapp}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        <p>${savedToSheet ? "Saved to the Muster Community Applications sheet." : `Not saved to the sheet (${sheet}); add it by hand.`} Approve by sending the WhatsApp community invite.</p>
      `,
    });
    console.log(`[community] application recorded email=${email}`);
  } catch (err) {
    console.error(`[community] application email FAILED email=${email}`, err);
    if (!savedToSheet) {
      return NextResponse.json({ error: "Could not send your application. Please try again.", sheet }, { status: 500 });
    }
  }

  // `sheet` is a non-sensitive status for debugging: saved, not_configured, rejected, or failed.
  return NextResponse.json({ success: true, sheet });
}

/** Appends the application to the Google Sheet and reports what happened. */
async function saveToSheet(record: Record<string, string>): Promise<"saved" | "not_configured" | "rejected" | "failed"> {
  const url = process.env.COMMUNITY_SHEET_WEBHOOK?.trim().replace(/^["']|["']$/g, "");
  if (!url) {
    console.error("[community] COMMUNITY_SHEET_WEBHOOK is not set on this deployment");
    return "not_configured";
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(record),
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    const text = await res.text();
    let ok = false;
    try {
      ok = JSON.parse(text)?.ok === true;
    } catch {
      /* not JSON: Google returned an error page */
    }
    if (ok) {
      console.log(`[community] saved to sheet email=${record.email}`);
      return "saved";
    }
    console.error(`[community] sheet rejected status=${res.status} body=${text.slice(0, 200)}`);
    return "rejected";
  } catch (err) {
    console.error(`[community] sheet save FAILED email=${record.email}`, err);
    return "failed";
  }
}

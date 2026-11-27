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
  const savedToSheet = await saveToSheet(record);

  const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_HOST || "smtp.gmail.com";
  const smtpPort = process.env.SMTP_PORT || process.env.EMAIL_PORT || "465";
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || process.env.EMAIL || process.env.MAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD || process.env.MAIL_PASS;
  if (!smtpUser || !smtpPass) {
    if (savedToSheet) return NextResponse.json({ success: true });
    console.error("[community] no sheet and no SMTP credentials; refusing to drop the application");
    return NextResponse.json(
      { error: "Applications are paused for a moment. Please email hello@nexaworks.tech." },
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
        <p>${savedToSheet ? "Saved to the Muster Community Applications sheet." : "Not saved to the sheet; add it by hand."} Approve by sending the WhatsApp community invite.</p>
      `,
    });
    console.log(`[community] application recorded email=${email}`);
  } catch (err) {
    console.error(`[community] application email FAILED email=${email}`, err);
    if (!savedToSheet) {
      return NextResponse.json({ error: "Could not send your application. Please try again." }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}

/** Appends the application to the Google Sheet. Returns false if not configured or it fails. */
async function saveToSheet(record: Record<string, string>): Promise<boolean> {
  const url = process.env.COMMUNITY_SHEET_WEBHOOK;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(record),
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean } | null;
    if (!res.ok || !data?.ok) throw new Error(`sheet responded ${res.status}`);
    console.log(`[community] saved to sheet email=${record.email}`);
    return true;
  } catch (err) {
    console.error(`[community] sheet save FAILED email=${record.email}`, err);
    return false;
  }
}

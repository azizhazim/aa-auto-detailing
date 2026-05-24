import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type BookingPayload = {
  name?: string;
  phone?: string;
  date?: string;
  carYear?: string;
  carMake?: string;
  carModel?: string;
  timeSlot?: string;
  packageSel?: string;
  notes?: string;
};

const REQUIRED_FIELDS: (keyof BookingPayload)[] = [
  "name",
  "phone",
  "date",
  "carYear",
  "carMake",
  "carModel",
  "timeSlot",
  "packageSel",
];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHtml(p: Required<BookingPayload>): string {
  const rows: [string, string][] = [
    ["Name", p.name],
    ["Phone", p.phone],
    ["Preferred Date", p.date],
    ["Time Slot", p.timeSlot],
    ["Vehicle", `${p.carYear} ${p.carMake} ${p.carModel}`.trim()],
    ["Package", p.packageSel],
    ["Notes", p.notes || "—"],
  ];
  const body = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #E4ECF2;color:#475569;font-weight:600;width:160px">${escapeHtml(
          k
        )}</td><td style="padding:8px 12px;border-bottom:1px solid #E4ECF2;color:#0B2545">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");
  return `<div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#F5F1E8">
    <h2 style="color:#0B2545;margin:0 0 4px">New Booking Request</h2>
    <p style="color:#64748B;margin:0 0 16px;font-size:14px">A&amp;A Auto Detailing — anaautodetailing.com</p>
    <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #E4ECF2;border-radius:8px;overflow:hidden">${body}</table>
  </div>`;
}

function renderText(p: Required<BookingPayload>): string {
  return [
    "New Booking Request — A&A Auto Detailing",
    "",
    `Name: ${p.name}`,
    `Phone: ${p.phone}`,
    `Preferred Date: ${p.date}`,
    `Time Slot: ${p.timeSlot}`,
    `Vehicle: ${p.carYear} ${p.carMake} ${p.carModel}`,
    `Package: ${p.packageSel}`,
    `Notes: ${p.notes || "—"}`,
  ].join("\n");
}

export async function POST(req: Request) {
  let payload: BookingPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((k) => !payload[k]?.toString().trim());
  if (missing.length) {
    return NextResponse.json(
      { error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL || "A&A Booking <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or BOOKING_TO_EMAIL env var");
    return NextResponse.json(
      { error: "Server is not configured to send email yet." },
      { status: 500 }
    );
  }

  const filled = {
    name: payload.name || "",
    phone: payload.phone || "",
    date: payload.date || "",
    carYear: payload.carYear || "",
    carMake: payload.carMake || "",
    carModel: payload.carModel || "",
    timeSlot: payload.timeSlot || "",
    packageSel: payload.packageSel || "",
    notes: payload.notes || "",
  };

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: undefined,
      subject: `New Booking — ${filled.name} (${filled.carYear} ${filled.carMake} ${filled.carModel})`,
      html: renderHtml(filled),
      text: renderText(filled),
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your request. Please call or text us." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Booking send failed:", err);
    return NextResponse.json(
      { error: "Unexpected error sending your request." },
      { status: 500 }
    );
  }
}

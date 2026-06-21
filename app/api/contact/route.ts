import { NextResponse } from "next/server";

const RECIPIENT = "alin@leaphy.com";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  role?: string;
  email?: string;
  phoneCountryCode?: string;
  phone?: string;
  country?: string;
  portfolioSize?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (
    !payload ||
    !payload.firstName ||
    !payload.lastName ||
    !payload.company ||
    !payload.email ||
    !payload.email.includes("@") ||
    !payload.message
  ) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Leaphy <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet. Please set RESEND_API_KEY on the server.",
      },
      { status: 503 }
    );
  }

  const subject = `Leaphy ePI request: ${payload.company}`;
  const text = formatText(payload);
  const html = formatHtml(payload);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [RECIPIENT],
      reply_to: payload.email,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Email delivery failed. Please email info@leaphy.com." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function formatText(payload: ContactPayload) {
  return [
    "New Leaphy ePI readiness request",
    "",
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Company: ${payload.company}`,
    `Role: ${payload.role || "-"}`,
    `Email: ${payload.email}`,
    `Phone: ${formatPhone(payload)}`,
    `Country: ${payload.country || "-"}`,
    `Portfolio size: ${payload.portfolioSize || "-"}`,
    `Interest: ${payload.interest || "-"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function formatHtml(payload: ContactPayload) {
  const rows = [
    ["Name", `${payload.firstName} ${payload.lastName}`],
    ["Company", payload.company],
    ["Role", payload.role],
    ["Email", payload.email],
    ["Phone", formatPhone(payload)],
    ["Country", payload.country],
    ["Portfolio size", payload.portfolioSize],
    ["Interest", payload.interest],
  ];

  return `
    <h1>New Leaphy ePI readiness request</h1>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><th align="left">${escapeHtml(label ?? "")}</th><td>${escapeHtml(value || "-")}</td></tr>`
        )
        .join("")}
    </table>
    <h2>Message</h2>
    <p>${escapeHtml(payload.message || "").replace(/\n/g, "<br />")}</p>
  `;
}

function formatPhone(payload: ContactPayload) {
  if (!payload.phone && !payload.phoneCountryCode) return "-";
  return `${payload.phoneCountryCode || ""} ${payload.phone || ""}`.trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

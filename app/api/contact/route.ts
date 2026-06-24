import { NextResponse } from "next/server";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/alin@leaphy.com";
const COPY_RECIPIENT = "info@leaphy.com";

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

  const subject = `Leaphy ePI request: ${payload.company}`;
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formatSubmission(payload, subject).toString(),
  });

  if (!response.ok) {
    const error = await response.text().catch(() => "");
    console.error("Contact form delivery failed", {
      status: response.status,
      error,
    });

    return NextResponse.json(
      { error: "Email delivery failed. Please email info@leaphy.com." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function formatSubmission(payload: ContactPayload, subject: string) {
  const data = new URLSearchParams();

  data.set("_subject", subject);
  data.set("_cc", COPY_RECIPIENT);
  data.set("_template", "table");
  data.set("_captcha", "false");
  data.set("name", `${payload.firstName} ${payload.lastName}`.trim());
  data.set("email", payload.email || "");
  data.set("company", payload.company || "");
  data.set("role", payload.role || "-");
  data.set("phone", formatPhone(payload));
  data.set("country", payload.country || "-");
  data.set("portfolio_size", payload.portfolioSize || "-");
  data.set("interest", payload.interest || "-");
  data.set("message", payload.message || "");

  return data;
}

function formatPhone(payload: ContactPayload) {
  if (!payload.phone && !payload.phoneCountryCode) return "-";
  return `${payload.phoneCountryCode || ""} ${payload.phone || ""}`.trim();
}

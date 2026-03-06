import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  details: string;
};

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]{1,99}$/u;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const company = body.company?.trim() ?? "";
    const details = body.details?.trim() ?? "";

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "name, email, and details are required" },
        { status: 400 },
      );
    }

    if (!NAME_REGEX.test(name)) {
      return NextResponse.json(
        { error: "name must be 2-100 characters and contain valid name characters" },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "email must be a valid email address" },
        { status: 400 },
      );
    }

    if (!SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: "Configure SENDGRID_API_KEY before sending email" },
        { status: 500 },
      );
    }

    sendgrid.setApiKey(SENDGRID_API_KEY);

    await sendgrid.send({
      to: process.env.CONTACT_EMAIL,
      from: "rob@rmpaymentsconsulting.com",
      subject: `New RM Payments Consulting inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "N/A"}`,
        "",
        "Details:",
        details,
      ].join("\n"),
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
        <p><strong>Details:</strong></p>
        <p>${escapeHtml(details)}</p>
      `,
    });

    return NextResponse.json(
      { message: "Inquiry submitted successfully. Email notification sent." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry email. Please try again later." },
      { status: 500 },
    );
  }
}

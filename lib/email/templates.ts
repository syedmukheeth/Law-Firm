import type { ContactInput } from "@/lib/schemas/contact";
import type { ConsultationInput } from "@/lib/schemas/consultation";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function contactEmailHtml(input: ContactInput) {
  return `
    <h2>New Contact Enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    ${input.phone ? `<p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(input.message)}</p>
  `;
}

export function consultationEmailHtml(input: ConsultationInput) {
  return `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>
    ${input.company ? `<p><strong>Company:</strong> ${escapeHtml(input.company)}</p>` : ""}
    <p><strong>Practice Area:</strong> ${escapeHtml(input.practiceArea)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(input.message)}</p>
  `;
}

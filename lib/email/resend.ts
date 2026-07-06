import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

/**
 * Sends via Resend when RESEND_API_KEY is configured; otherwise logs the
 * payload and resolves successfully so the UI feels complete end-to-end
 * without a live email account. Add RESEND_API_KEY to go live — no callers
 * need to change.
 */
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!resend) {
    console.log("[email:stub]", { to, subject, html });
    return { id: "stub", stubbed: true };
  }

  const { data, error } = await resend.emails.send({
    from: "Vantara & Rao <consult@vantararao.com>",
    to,
    subject,
    html,
  });

  if (error) throw new Error(error.message);
  return data;
}

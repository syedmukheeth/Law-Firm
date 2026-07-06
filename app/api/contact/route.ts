import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";
import { sendEmail } from "@/lib/email/resend";
import { contactEmailHtml } from "@/lib/email/templates";
import { CONTACT } from "@/lib/constants";

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await sendEmail({
    to: CONTACT.email,
    subject: `New contact enquiry from ${result.data.name}`,
    html: contactEmailHtml(result.data),
  });

  return NextResponse.json({ success: true });
}

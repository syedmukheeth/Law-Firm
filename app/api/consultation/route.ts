import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/schemas/consultation";
import { sendEmail } from "@/lib/email/resend";
import { consultationEmailHtml } from "@/lib/email/templates";
import { CONTACT } from "@/lib/constants";

export async function POST(request: Request) {
  const body = await request.json();
  const result = consultationSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  await sendEmail({
    to: CONTACT.email,
    subject: `New consultation request from ${result.data.name}`,
    html: consultationEmailHtml(result.data),
  });

  return NextResponse.json({ success: true });
}

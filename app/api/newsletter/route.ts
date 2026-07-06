import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas/newsletter";

export async function POST(request: Request) {
  const body = await request.json();
  const result = newsletterSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.log("[newsletter:stub] subscribed:", result.data.email);
  return NextResponse.json({ success: true });
}

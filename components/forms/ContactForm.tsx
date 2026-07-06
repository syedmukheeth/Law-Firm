"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";
import { Input, Textarea, FieldError } from "@/components/ui/input";
import { MagneticButton } from "@/components/animation/MagneticButton";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <Input placeholder="Full name" {...register("name")} />
        <FieldError>{errors.name?.message}</FieldError>
      </div>
      <div>
        <Input type="email" placeholder="Email address" {...register("email")} />
        <FieldError>{errors.email?.message}</FieldError>
      </div>
      <div>
        <Input placeholder="Phone (optional)" {...register("phone")} />
      </div>
      <div>
        <Textarea rows={4} placeholder="Tell us about your matter" {...register("message")} />
        <FieldError>{errors.message?.message}</FieldError>
      </div>
      <MagneticButton
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-medium text-background disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </MagneticButton>
      {status === "success" ? (
        <p className="text-sm text-gold-300">
          Thank you — our team will respond within one business day.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}
    </form>
  );
}

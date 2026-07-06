"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { consultationSchema, type ConsultationInput } from "@/lib/schemas/consultation";
import { Input, Textarea, FieldError } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { MagneticButton } from "@/components/animation/MagneticButton";
import { practiceAreas } from "@/lib/data/practice-areas";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationInput>({ resolver: zodResolver(consultationSchema) });

  async function onSubmit(data: ConsultationInput) {
    setStatus("idle");
    try {
      const res = await fetch("/api/consultation", {
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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Input placeholder="Full name" {...register("name")} />
          <FieldError>{errors.name?.message}</FieldError>
        </div>
        <div>
          <Input type="email" placeholder="Email address" {...register("email")} />
          <FieldError>{errors.email?.message}</FieldError>
        </div>
        <div>
          <Input placeholder="Phone" {...register("phone")} />
          <FieldError>{errors.phone?.message}</FieldError>
        </div>
        <div>
          <Input placeholder="Company (optional)" {...register("company")} />
        </div>
      </div>
      <div>
        <Select defaultValue="" {...register("practiceArea")}>
          <option value="" disabled>
            Select a practice area
          </option>
          {practiceAreas.map((area) => (
            <option key={area.slug} value={area.name}>
              {area.name}
            </option>
          ))}
        </Select>
        <FieldError>{errors.practiceArea?.message}</FieldError>
      </div>
      <div>
        <Textarea rows={5} placeholder="Describe your matter" {...register("message")} />
        <FieldError>{errors.message?.message}</FieldError>
      </div>
      <MagneticButton
        type="submit"
        disabled={isSubmitting}
        className="mt-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-medium text-background disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </MagneticButton>
      {status === "success" ? (
        <p className="text-sm text-gold-300">
          Thank you — an attorney will follow up within one business day.
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

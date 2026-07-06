import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  company: z.string().optional(),
  practiceArea: z.string().min(1, "Please select a practice area."),
  message: z.string().min(10, "Please describe your matter in a few sentences."),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

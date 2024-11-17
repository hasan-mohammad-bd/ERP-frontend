import { z } from "zod";

// Define the Zod schema
export const contactPersonsFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .regex(/^\d+$/, "Mobile number must contain only digits"),
  note: z.string().optional(),
  contact_id: z.number(),
});

export type ContactPersonsFormValues = z.infer<typeof contactPersonsFormSchema>;

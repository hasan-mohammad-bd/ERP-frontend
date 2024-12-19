import { z } from "zod";

export const LeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  designation: z.string().optional(),
  phone: z
    .string()
    .regex(/^(\+?88)?01[3-9]\d{8}$/, "Invalid phone number format"),
  email: z.string().optional(),
  company_name: z.string().min(1, "Company name is required"),
  item_id: z.string().min(1, "Item ID is required"),
  pipeline_id: z.string().min(1, "Pipeline ID is required"),
  pipeline_stage_id: z.string().min(1, "Pipeline stage ID is required"),
  source: z.string().min(1, "Source is required"),
  label: z.string().min(1, "Label is required"),
  country_id: z.string().min(1, "Country ID is required"),
  city_id: z.string().min(1, "City ID is required"),
  assign_id: z.string().min(1, "Assign ID is required"),
  status: z
    .union([z.literal("Active"), z.literal("Completed"), z.literal("Rejected")])
    .default("Active")
});

export type LeadFormValues = z.infer<typeof LeadSchema>;

import { z } from "zod";

export const LeadActivitySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  outcome: z.string().optional(),
  is_completed: z.union([z.literal(1), z.literal(0)]).default(0),
  lead_id: z.number().int().min(1, "Lead ID is required"),
  type: z.string().min(1, "Type is required"),
  start_date_time: z.string().refine(val => !isNaN(Date.parse(val)), { message: "Invalid start date-time format" }),
  end_date_time: z.string().refine(val => !isNaN(Date.parse(val)), { message: "Invalid end date-time format" }),
  reminder_date_time: z.string().refine(val => !isNaN(Date.parse(val)), { message: "Invalid reminder date-time format" }),

  participants: z.array(z.number(), {
    required_error: "Minimum 1 member is required.",
  }),
});

export type LeadActivityFormValues = z.infer<typeof LeadActivitySchema>;

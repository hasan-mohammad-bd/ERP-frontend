import { z } from "zod";

const approvalFormSchema = z.object({
  approval_ids: z.array(z.number()).nonempty(), // array of numbers, at least one element required
  status: z.union([z.literal(1), z.literal(0)]), // restricts status to only 1 or 0
  note: z.string().optional(), // note as an optional string
});

export type ApprovalBulkUpdateFormValues = z.infer<typeof approvalFormSchema>;

export const approvalSchema = z.object({
  id: z.number(), // ID as a number
  sorce_type: z.string(), // Source type as a string
  sorce_id: z.number(), // Source ID as a number
  status: z.union([z.literal(0), z.literal(1), z.literal(3)]), // Status as 0 or 1
  module: z.string(), // Module as a string
  created_at: z.string().datetime(), // Created at as an ISO date string
});

export type ApprovalSchemaType = z.infer<typeof approvalSchema>;

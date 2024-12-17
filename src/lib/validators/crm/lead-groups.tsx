import { z } from "zod";

export const leadGroupSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  type: z.string().min(1, "Type is required."),
  status: z.union([z.literal(1), z.literal(0)]).default(1),
});

export type LeadGroupFormValues = z.infer<typeof leadGroupSchema>;

export const leadGroupRow = leadGroupSchema.extend({
  id: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Id must be at least 0.",
    })
    .max(9999, {
      message: "Id must be at most 9999.",
    }),
});

export type LeadGroupRow = z.infer<typeof leadGroupRow>;

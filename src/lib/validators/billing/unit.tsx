import { z } from "zod";


export const unitSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  short_code: z.string({
    required_error: "Short code is required",
  }),
});

export type UnitFormValues = z.infer<typeof unitSchema>;

export const unitRow = unitSchema.extend({
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

export type UnitRow = z.infer<typeof unitRow>;
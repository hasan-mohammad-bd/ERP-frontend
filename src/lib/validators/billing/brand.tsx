import { z } from "zod";


export const brandSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  short_code: z.string({
    required_error: "Short code is required",
  }),
});

export type BrandFormValues = z.infer<typeof brandSchema>;

export const brandRow = brandSchema.extend({
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

export type BrandRow = z.infer<typeof brandRow>;
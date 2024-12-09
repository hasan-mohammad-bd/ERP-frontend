import { z } from "zod";

// Base schema with `amount` as a string
export const TaxSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  amount: z.coerce.number().min(1, { message: "Tax percent must be greater than 0" }),
  description: z.string().min(1, {
    message: "Message must not be empty.",
  }),
  status: z.union([z.literal(1), z.literal(0)]).default(1), // Use 1 and 0 for boolean-like behavior
});

export type TaxFormValues = z.infer<typeof TaxSchema>;

export const TaxRow = TaxSchema.extend({
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

export type TaxRow = z.infer<typeof TaxRow>;

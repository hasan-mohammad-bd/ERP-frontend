import { z } from "zod";

export type PaymentTermRow = {
  id: number;
  name: string;
  value: number;
  is_default: boolean;
};

export const paymentTermSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  value: z.number({
    required_error: "Value is required",
  }),
  is_default: z.union([z.literal(1), z.literal(0)]).default(1),
});

export type PaymentTermFormType = z.infer<typeof paymentTermSchema>;

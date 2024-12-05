import { z } from "zod";


export const warehouseSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  status: z.union([z.literal(1), z.literal(0)]).default(1), // Use 1 and 0 instead of strings
});

export type WarehouseFormValues = z.infer<typeof warehouseSchema>;

export const warehouseRow = warehouseSchema.extend({
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

export type WarehouseRow = z.infer<typeof warehouseRow>;
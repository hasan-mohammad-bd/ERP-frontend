import { z } from "zod";

export const barcodeDemoSchema = z.object({
  attribute_category_id: z.number().int(), // attribute_category_id should be an integer
  attribute_ids: z.array(z.number().int()), // attribute_ids is an array of integers
});

export type BarcodeFormValues = z.infer<typeof barcodeDemoSchema>;

export const barcodeRow = barcodeDemoSchema

export type BarcodeRow = z.infer<typeof barcodeRow>;

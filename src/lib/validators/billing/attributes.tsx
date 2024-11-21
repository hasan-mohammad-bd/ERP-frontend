import { z } from "zod";
import { attributeCategoryRow } from "./attribute-category";

export const attributeSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 characters.",
  }),
  status: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Status must be at least 0.",
    })
    .max(1, {
      message: "Status must be at most 1.",
    }),
  description: z.string().optional().nullable(),
  attribute_category_id: z.string(),
});

export type AttributeFormValues = z.infer<typeof attributeSchema>;

export const attributeRow = attributeSchema
  .extend({
    id: z.coerce.number(),
    attribute_category: attributeCategoryRow,
  })
  .omit({ attribute_category_id: true });

export type AttributeRow = z.infer<typeof attributeRow>;

import { z } from "zod";

// Define the schema for the category data
export const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  image: z.string().optional(), // Image is optional (can be URL or file)
  description: z.string().optional(),
  status: z.union([z.literal(1), z.literal(0)]).default(1), // Use 1 and 0 instead of strings
  sorting_index: z.number().optional().optional().nullable(),
  parent_id: z.string().optional().nullable(),
});

export const subCategorySchema = categorySchema.extend({
  parent_id: z.string(),
});

// Main schema for the form response
export const categoryRowSchema = z.object({
  data: categorySchema.extend({
    id: z.number(), // `id` is optional in `data`
  }),
  message: z.string(),
});

// Infer types from the schemas
// Infer types and add `id` to `CategoryFormValues`
export type CategoryFormValues = z.infer<typeof categorySchema> & {
  id: number;
};
export type SubCategoryFormValues = z.infer<typeof subCategorySchema> & {
  id: number;
};
export type CategoryRow = z.infer<typeof categoryRowSchema>;

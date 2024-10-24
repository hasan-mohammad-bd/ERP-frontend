
import { z } from "zod";

// Define the schema for the category data
export const categorySchema = z.object({
  id: z.number().optional(), // Optional as it might not exist for new entries
  name: z.string().min(1, "Category name is required"),
  image: z.string().optional(), // Image is optional (can be URL or file)
  description: z.string().optional(),
  status: z.union([z.literal(1), z.literal(0)]).default(1), // Use 1 and 0 instead of strings
  sorting_index: z.number().optional(),
  parent_id: z.number().nullable().optional(),
});

// Main schema for the form response
export const categoryRowSchema = z.object({
  data: categorySchema,
  message: z.string(),
});

// Infer types from the schemas
export type CategoryFormValues = z.infer<typeof categorySchema>; // Form values type
export type CategoryRow = z.infer<typeof categoryRowSchema>;







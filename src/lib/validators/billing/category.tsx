import { z } from "zod";

// Define the schema for the category data
export const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  image: z.string().optional(), // Image is optional (can be URL or file)
  description: z.string().optional(),
  status: z.union([z.literal(1), z.literal(0)]).default(1), // Use 1 and 0 instead of strings
  sorting_index: z.number().optional().nullable(),
  parent_id: z.string().optional().nullable(),
  parent: z
    .object({
      name: z.string().min(1, "Category name is required"),
      image: z.string().optional(), // Image is optional (can be URL or file)
      description: z.string().optional(),
      status: z.union([z.literal(1), z.literal(0)]).default(1), // Use 1 and 0 instead of strings
      sorting_index: z.number().optional().nullable(),
      parent_id: z.string().optional().nullable(),
    })
    .optional()
    .nullable(),
});

export const extendedExpenseCategorySchema = categorySchema.extend({
  ledger_group_id: z.string().min(1, "Ledger Group is required"), // Required
});

export const extendedCategorySchema = categorySchema.extend({
  ledger_group_id: z.string().optional(), // Optional for editing
});

export const subCategorySchema = categorySchema.extend({
  parent_id: z.string(),
  parent: categorySchema.optional().nullable(),
});

//category Schema

const categoryRow = categorySchema.extend({
  id: z.coerce.number(),
  parent: categorySchema.optional().nullable(),
});
const ExpensecategoryRow = extendedCategorySchema.extend({
  id: z.coerce.number(),
  parent: categorySchema.optional().nullable(),
});
const ExpensecategoryRowForm = extendedExpenseCategorySchema.extend({
  id: z.coerce.number(),
  parent: categorySchema.optional().nullable(),
});

export type CategoryRow = z.infer<typeof categoryRow>;
export type ExpenseCategoryRow = z.infer<typeof ExpensecategoryRow>;
export type ExpenseCategoryRowForm = z.infer<typeof ExpensecategoryRowForm>;

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

export type ExpenseCategoryFormValues = z.infer<typeof categorySchema> & {
  ledger_group_id: number;
  id: number;
};

export type SubCategoryFormValues = z.infer<typeof subCategorySchema> & {
  id: number;
};
// export type CategoryRow = z.infer<typeof categoryRowSchema>;

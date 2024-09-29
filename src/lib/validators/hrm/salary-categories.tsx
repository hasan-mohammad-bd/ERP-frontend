import { z } from "zod";

// Define the schema for a single item from the API data
export const salaryCategoriesSchema = z.object({
  id: z.coerce.number(), // Coerce id to a number, even if it's a string
  name: z.string().min(1, "Name is required"), // Ensure name is not empty
  type: z.enum(["Deduction", "Allowance"]), // Assuming only these types exist
  short_code: z.string().optional(), // Optional short_code as string
  // Validation for is_default, allowing only 0 or 1 as numbers
  is_default: z.union([z.literal(0), z.literal(1)]), // Explicitly allow only 0 or 1
  sorting_index:z.coerce.number()
});

export const updateSalaryCategoriesSchema = z.object({
  name: z.string().min(1, "Name is required"), // Ensure name is not empty
  type: z.enum(["Deduction", "Allowance"]), // Assuming only these types exist
  short_code: z.string().optional(), // Optional short_code as string
  sorting_index:z.coerce.number()
});

export const salaryCategoriesFormdata = z.object({
  name: z.string().min(1, "Name is required"), // Ensure name is not empty
  type: z.enum(["Deduction", "Allowance"]), // Assuming only these types exist
  short_code: z.string().optional(), // Optional short_code as string
  // Validation for is_default, allowing only 0 or 1 as numbers
});

// Main schema for the full API response, which includes an array of items
export const schema = z.object({
  data: z.array(salaryCategoriesSchema),
});

// Schema with an extended id (used for existing data rows)
export const SalaryCategoriesFormRow = salaryCategoriesSchema.extend({
  id: z.coerce.number(),

   // Coerce id to a number, even if it's a string
});

// Infer types from the schemas
export type SalaryCategoriesFormColumn = z.infer<typeof salaryCategoriesSchema>; // Single API data type
export type UpdateSalaryCategoriesFormColumn = z.infer<typeof updateSalaryCategoriesSchema>; // Single API data type
export type SalaryCategoriesFormValues = z.infer<typeof schema>; // Entire API data structure
export type SalaryCategoriesFormRows = z.infer<typeof SalaryCategoriesFormRow>; // Single row with extended id
export type SalaryCategoriesFormValueColumn = z.infer<typeof salaryCategoriesFormdata>; // Single row with extended id

import { z } from "zod";

// Define the schema for the category data
export const divisionSchema = z.object({
  name: z.string().min(1, "Regions name is required"),
  sorting_index: z.number().optional().nullable(),
  parent_id: z.string().optional().nullable(),
  parent_region: z
    .object({
      name: z.string().min(1, "Regions name is required"),
      
      sorting_index: z.number().optional().nullable(),
      parent_id: z.string().optional().nullable(),
    })
    .optional()
    .nullable(),
});


export const areaSchema = divisionSchema.extend({
  parent_id: z.string(),
  parent_region: divisionSchema.optional().nullable(),
});

//category Schema

const divisionRow = divisionSchema.extend({
  id: z.coerce.number(),
  parent_region: divisionSchema.optional().nullable(),
});


export type DivisionRow = z.infer<typeof divisionRow>;


// Main schema for the form response
export const divisionRowSchema = z.object({
  data: divisionSchema.extend({
    id: z.number(), // `id` is optional in `data`
  }),
});

// Infer types from the schemas
// Infer types and add `id` to `CategoryFormValues`
export type DivisionFormValues = z.infer<typeof divisionSchema> & {
  id: number;
};


export type AreaFormValues = z.infer<typeof areaSchema> & {
  id: number;
};
// export type CategoryRow = z.infer<typeof categoryRowSchema>;

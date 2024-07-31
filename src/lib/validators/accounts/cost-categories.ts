import { organizationColumn } from "@/lib/validators";
import {z} from "zod";


export const costCategorySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional().nullable(),
});

export type CostCategoryFromValues = z.infer<typeof costCategorySchema>;


export const costCategoryRow = costCategorySchema.extend({
  id: z.coerce.number(),
  sorting_index: z.coerce.number().optional().nullable(),
  organization: organizationColumn
})


export type CostCategoryRow = z.infer<typeof costCategoryRow>
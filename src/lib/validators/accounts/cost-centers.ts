import { organizationColumn } from "@/lib/validators";
import {z} from "zod";
import { userRow } from "./entry";


export const costCenterSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional().nullable(),
  cost_category_id: z.union([
    z.string().refine(val => !isNaN(Number(val)), {
      message: "Account is required.",
    }).transform(val => Number(val)),
    z.number()
  ]).refine(val => !isNaN(val), {
    message: "Account is required.",
  }),
});

export type CostCenterFromValues = z.infer<typeof costCenterSchema>;


export const costCenterRow = costCenterSchema.extend({
  id: z.coerce.number(),
  sorting_index: z.coerce.number().optional().nullable(),
  organization: organizationColumn,
  user: userRow
})



export type CostCenterRow = z.infer<typeof costCenterRow>
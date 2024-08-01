import { organizationColumn } from "@/lib/validators";
import {z} from "zod";
import { userRow } from "./entry";


export const costCenterSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional().nullable(),
  cost_category_id: z.coerce.number(),
});

export type CostCenterFromValues = z.infer<typeof costCenterSchema>;


export const costCenterRow = costCenterSchema.extend({
  id: z.coerce.number(),
  sorting_index: z.coerce.number().optional().nullable(),
  organization: organizationColumn,
  user: userRow
})



export type CostCenterRow = z.infer<typeof costCenterRow>
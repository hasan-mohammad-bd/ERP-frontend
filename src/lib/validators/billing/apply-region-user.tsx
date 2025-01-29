

import { z } from "zod";

export const RegionUserValidationSchema = z.object({
  user_id: z.coerce.number().min(1, "User ID must be a positive number"),
  region_id: z.coerce.number().min(1, "Please select a territory"),
  area_id: z.coerce.number().min(1, "Please select a territory"),
  territory_id: z.coerce.number().min(1, "Please select a territory"),
  effective_date: z.string(),
});

export type RegionUserFormValues = z.infer<typeof RegionUserValidationSchema>;


export const RegionUserRow = RegionUserValidationSchema.extend({
  id: z.number().optional(),
});

export type ApplyRegionUserRow = z.infer<typeof RegionUserRow>;

import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  sorting_index: z.coerce.number().optional().nullable(),
});

export type ProjectFromValues = z.infer<typeof projectSchema>;

export const projectRow = projectSchema.extend({
  id: z.coerce.number(),

  // organization: organizationColumn
});

export type ProjectRow = z.infer<typeof projectRow>;

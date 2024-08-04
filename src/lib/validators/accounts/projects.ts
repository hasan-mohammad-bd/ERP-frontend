import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  sorting_index: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Sorting index must be at least 0.",
    })
    .max(9999, {
      message: "Sorting index must be at most 9999.",
    }),
});

export type ProjectFromValues = z.infer<typeof projectSchema>;

export const projectRow = projectSchema.extend({
  id: z.coerce.number(),

  // organization: organizationColumn
});

export type ProjectRow = z.infer<typeof projectRow>;

import { z } from "zod";


export const categorySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),

});

export type CategoryFormValues = z.infer<typeof categorySchema>;

export const categoryRow = categorySchema.extend({
   id: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Id must be at least 0.",
    })
    .max(9999, {
      message: "Id must be at most 9999.",
    }),
});



export const categoryColumn = z.object({
  id: z.number(),
  name: z.string(),
  // sorting_index: z.coerce.number(),
});

export type CategoryColumn = z.infer<typeof categoryColumn>;



export const subCategoryColumn = z.object({
  id: z.number(),
  name: z.string(),
  // sorting_index: z.coerce.number(),
});

export type SubCategoryColumn = z.infer<typeof subCategoryColumn>;



export type CategoryRow = z.infer<typeof categoryRow>;
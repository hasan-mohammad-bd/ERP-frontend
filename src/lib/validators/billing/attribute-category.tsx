import {z} from "zod";


export const attributeCategorySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }), 
  status: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Status must be at least 0.",
    })
    .max(1, {
      message: "Status must be at most 1.",
    }),
    description : z.string().optional().nullable(),
})

export type AttributeCategoryFormValues = z.infer<typeof attributeCategorySchema>

export const  attributeCategoryRow = attributeCategorySchema.extend({
  id: z.coerce
    .number()
})

export type AttributeCategoryRow = z.infer<typeof attributeCategoryRow>
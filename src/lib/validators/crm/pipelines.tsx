import { z } from 'zod'

export const pipelineDetailSchema = z.object({
    id: z.number({
      required_error: "The ID is required.",
    }),
    name: z.string({
      required_error: "The name is required.",
    }),
    probability: z.number({
      required_error: "The probability is required.",
    }),
});


export const pipelineSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  status: z.union([z.literal(1), z.literal(0)]).default(1),
  details: pipelineDetailSchema.array().optional(),
})

export type PipelineFormValues = z.infer<typeof pipelineSchema>

export const PipelineRow = pipelineSchema.extend({
  id: z.coerce
    .number()
    .int()
})

export type PipelineRow = z.infer<typeof PipelineRow>

import { z } from "zod";
export const loanTypeColumn = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
});

export type LoanTypeColumn = z.infer<typeof loanTypeColumn>;

export const LoanTypeFormSchema = z.object({
    name: z
      .string()
      .min(2, {
        message: "Name must be at least 2 characters.",
      })
      .max(255, {
        message: "Name must be at most 255 characters.",
      }),
      description: z.string().optional().nullable(),
  });
  
  export type LoanTypeFromValues = z.infer<typeof LoanTypeFormSchema>;
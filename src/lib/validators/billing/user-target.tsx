import {z} from 'zod';

export const TargetUserSchema = z.object({ 
  user_id: z.coerce.number().min(1, "User ID must be a positive number"),
  date: z.string().optional(),
  amount: z.coerce.number().min(1, "Amount must be a positive number"),
  target_amount:z.string().optional(),
});

export type TargetUserValue = z.infer<typeof TargetUserSchema>;
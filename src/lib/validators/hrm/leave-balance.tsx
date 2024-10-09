import { z } from 'zod';

const employeeLeaveSchema = z.object({
  id: z.number().int(),
  employee_unique_id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  allowed: z.number().int(),
  taken: z.object({
    total_days: z.number().int(),
    total_hours: z.number().int(),
  }),
  available: z.object({
    total_days: z.number().int(),
    total_hours: z.number().int(),
  }),
});


export type LeaveBalanceColumn = z.infer<typeof employeeLeaveSchema>;
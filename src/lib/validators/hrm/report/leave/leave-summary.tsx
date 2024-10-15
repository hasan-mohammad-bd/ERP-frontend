import { scheduleColumn } from "@/lib/validators";
import {z} from "zod";



export const leaveTypes = z.object({
  id: z.coerce.number(),
  name: z.string(),
  allowed: z.coerce.number(),
  used: z.object({
    total_days: z.coerce.number(),
    total_hours: z.coerce.number()
  }),
  available: z.object({
    total_days: z.coerce.number(),
    total_hours: z.coerce.number()
  })
})

export type LeaveTypes = z.infer<typeof leaveTypes>

export const leaveSummaryRow = z.object({
  id: z.coerce.number(),
  employee_unique_id: z.coerce.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.coerce.string(),
  schedule_id: z.coerce.number(),
  leave_taken: z.object({
    total_days: z.coerce.number(),
    total_hours: z.coerce.number()
  }),

  schedule: scheduleColumn,
  leave_types: leaveTypes.array()


}) 

export type LeaveSummaryRow = z.infer<typeof leaveSummaryRow>


export const leaveTypeSummaryRow = z.object({
  id: z.coerce.number(),
  name: z.string(),
  total_days: z.coerce.number(),
  total_hours: z.coerce.number()

})

export type LeaveTypeSummaryRow = z.infer<typeof leaveTypeSummaryRow>




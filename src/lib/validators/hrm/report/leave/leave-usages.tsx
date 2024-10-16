import { employeeColumn } from "@/lib/validators";
import {z} from "zod";
import { leaveTypeRow } from "../../leave";



export const leaveUsagesRow = z.object({
  id: z.coerce.number(),
  start_date_time: z.string(),
  end_date_time: z.string(),
  duration_day: z.coerce.number(),
  duration_hour: z.coerce.number(),
  status: z.string(),
  employee_id: z.coerce.number(),
  employee: employeeColumn,
  leave_type: leaveTypeRow

})

export type LeaveUsagesRow = z.infer<typeof leaveUsagesRow>
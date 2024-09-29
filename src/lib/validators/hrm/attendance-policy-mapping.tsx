import {z} from "zod";
import { attendancePolicyRow } from "./attendance-policy";
import { employeeColumn } from "@/lib/validators";



export const employeeAttendancePolicyFormSchema = z.object({ 
  effective_date: z.string().date(),
  attendance_policy_id: z.string(),
  employee_ids: z.coerce.number().array().optional().nullable(), 
  employee_id: z.coerce.string().optional().nullable(), 

})

export type EmployeeAttendancePolicyFormValues = z.infer<typeof employeeAttendancePolicyFormSchema>

export const employeeAttendancePolicyRow = employeeAttendancePolicyFormSchema.extend({
  id: z.coerce.number(),
  attendance_policy: attendancePolicyRow,
  employee_id: z.coerce.number(),
  employee: employeeColumn

})

export type EmployeeAttendancePolicyRow = z.infer<typeof employeeAttendancePolicyRow>
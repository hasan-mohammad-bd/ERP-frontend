import {z} from "zod";

export const Days = z.object({
  day: z.string().optional().nullable(),
  in_time: z.string(),
  delay_buffer_time: z.string(),
  ex_delay_buffer_time: z.string(),
  break_time: z.coerce.number(),
  working_hour: z.coerce.number(),
  out_time: z.string(),
  working_type: z.string(),
  // id: z.coerce.number().optional().nullable(),
})

export const attendancePolicySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  in_time: z.string(),
  delay_buffer_time: z.string(),
  ex_delay_buffer_time: z.string(),
  break_time: z.coerce.number(),
  // effective_from: z.string(),
  working_hour: z.coerce.number(),
  out_time: z.string(),
  ignore_overtime: z.number(),
  exclude_attendance_report: z.number(),
  discard_weekend_attendance: z.number(),
  days: Days.array().optional().nullable(),
});

export type AttendancePolicyFormValues = z.infer<typeof attendancePolicySchema>;


export const attendancePolicyRow = attendancePolicySchema.extend({
  id: z.coerce.number(),
})

export type AttendancePolicyRow = z.infer<typeof attendancePolicyRow>
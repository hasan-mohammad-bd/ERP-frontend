import { number, z } from "zod";

export const AttendanceFormSchema = z.object({
  employee_ids: z.array(number()),
  // attendance_type: z.enum(["check_in", "check_out"]).optional().nullable(),
  date_time: z.string().datetime({ message: "this field is required" }),
  note: z.string().optional().nullable(),
  latitude: z.string().optional().nullable(),
  longitude: z.string().optional().nullable(),
});

export type AttendanceFormValues = z.infer<typeof AttendanceFormSchema>;

export const attendancePolicyFormSchema = z.object({
  policy_name: z.string().min(2, "Policy name must be at least 2 characters."),
  in_time: z.string().datetime({ message: "this field is required" }),
  delay_buffer: z.string().datetime({ message: "this field is required" }),
  break_time: z.string().datetime({ message: "this field is required" }),
  effect_from: z.string().datetime({ message: "this field is required" }),
  working_hours: z.string().datetime({ message: "this field is required" }),
  ex_delay_buffer: z.string().datetime({ message: "this field is required" }),
  last_in_time: z.string().datetime({ message: "this field is required" }),
  ignore_from_att_report: z.boolean(),
  discard_attendance_on_weekend: z.boolean(),
  exclude_from_att_report: z.boolean(),
  

});

export type AttendancePolicyFormValues = z.infer<typeof attendancePolicyFormSchema>;

export const AttendancePolicyRow = attendancePolicyFormSchema.extend({
  id: z.coerce.number(),
})

export type AttendancePolicyRow = z.infer<typeof AttendancePolicyRow>;



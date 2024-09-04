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

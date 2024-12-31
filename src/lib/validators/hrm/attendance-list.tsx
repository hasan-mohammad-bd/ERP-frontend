import { z } from "zod";

// Define the schema for the new check-in data structure
export const attendanceAddSchema = z.object({
  // .refine((val) => !isNaN(Date.parse(val)), {
  //   message: "Invalid date-time format",
  // }),
  date_time: z.date({ message: "this field is required" }),
  // date_time: z.string().datetime({ message: "this field is required" }),
  employee_ids: z.array(
    z.coerce.number().min(1, {
      message: "Employee ID is required and must be a valid number",
    })
  ),
  note: z.string().min(1, {
    message: "Note is required and must not be empty",
  }),
});

export type AttendanceRow = {
  id: number;
  date: string;
  type: string | null;
  check_in_status?: string;
  check_in: string;
  check_out: string;
  late_time?: number | null;
  duration?: number | null;
  latitude?: string | null;
  longitude?: string | null;
  employee: {
    id: number;
    department_id: number;
    designation_id: number;
    department: {
      name: string;
    };
    designation: {
      name: string;
    };
    location: {
      name: string;
    };
    section: {
      name: string;
    };
  };
};

// Infer types from the schema
export type attendanceCheckInFormValues = z.infer<typeof attendanceAddSchema>;

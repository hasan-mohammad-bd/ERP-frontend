export type leavePolicyWithoutData = {
  id?: number; // Ensure id is an integer
  //  name: string // Name is required
  foreign_leave_allowed?: number;
  multiple_application?: number;
  responsibility_reliever?: number;
  multiple_approver_hierarchy?: number;
  extra_day_compensation_eligible?: number;
  allows_half_day_leave?: number;
  allows_multiple_visits_same_date?: number;
  can_approver_change?: number;
  notify_approver?: number;
  extra_day_salary?: number;
  attendance_flag?: string[];
  allow_attendance_visit?: number;
  start_month?: number;
  end_month?: number;
  user_id?: number;
  organization_id?: number;
};

export type leavePolicyType = {
  data: leavePolicyWithoutData;
};

import { z } from "zod";

export const leavePolicySchema = z.object({
  // name: z.string().min(1, "Leave policy name is required"), // Name is required
  foreign_leave_allowed: z.union([z.literal(0), z.literal(1)]),
  multiple_application: z.union([z.literal(0), z.literal(1)]),

  responsibility_reliever: z.union([z.literal(0), z.literal(1)]),

  multiple_approver_hierarchy: z.union([z.literal(0), z.literal(1)]),

  extra_day_compensation_eligible: z.union([z.literal(0), z.literal(1)]),

  allows_half_day_leave: z.union([z.literal(0), z.literal(1)]),

  allows_multiple_visits_same_date: z.union([z.literal(0), z.literal(1)]),

  can_approver_change: z.union([z.literal(0), z.literal(1)]),

  notify_approver: z.union([z.literal(0), z.literal(1)]),
  extra_day_salary: z.union([z.literal(0), z.literal(1)]),
  attendance_flag: z.array(z.string()).optional(),

  allow_attendance_visit: z.union([z.literal(0), z.literal(1)]),
  start_month: z.number().int().min(1, "Start month must be at least 1").max(12, "Start month must be at most 12"),
  end_month: z.number().int().min(1, "Start month must be at least 1").max(12, "Start month must be at most 12"),
});

export type leavePolicyFormData = z.infer<typeof leavePolicySchema>;

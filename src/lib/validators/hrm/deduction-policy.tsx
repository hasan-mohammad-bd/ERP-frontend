type LeaveType = {
  id: number;
  name: string;
  short_code: string;
  maternity_leave: number;
  unpaid_leave: number;
};

// Type without the data object
export type DeductionPolicyWithoutData = {
  absent_consider?: number;
  absent_deduct_salary?: number;
  absent_deduct_gross_salary?: number;
  absent_adjust_days?: number;
  absent_leave_type_id?: number;
  delay_consider?: number;
  delay_deduct_salary?: number;
  delay_deduct_gross_salary?: number;
  delay_consecutive?: number;
  delay_consider_days?: number;
  delay_adjust_days?: number;
  delay_leave_type_id?: number;
  extreme_delay_consider?: number;
  extreme_delay_deduct_salary?: number;
  extreme_delay_deduct_gross_salary?: number;
  extreme_delay_consecutive?: number;
  extreme_delay_consider_days?: number;
  extreme_delay_adjust_days?: number;
  extreme_delay_leave_type_id?: number;
  underwork_consider?: number;
  underwork_deduct_salary?: number;
  underwork_deduct_gross_salary?: number;
  underwork_consider_hours?: number;
  underwork_adjust_days?: number;
  underwork_leave_type_id?: number;
  unpaid_consider?: number;
  unpaid_deduct_gross_salary?: number;
  absent_leave_type?: LeaveType;
  delay_leave_type?: LeaveType;
  extreme_delay_leave_type?: LeaveType;
  underwork_leave_type?: LeaveType;
  deduction_type?: string;
};

// Type with the data object
export type DeductionPolicyType = {
  data: DeductionPolicyWithoutData;
};

import { z } from "zod";

export const deductionPolicySchemaForm = z.object({
  absent_consider: z.union([z.literal(0), z.literal(1)]),
  absent_deduct_salary: z.union([z.literal(0), z.literal(1)]),
  absent_deduct_gross_salary: z.union([z.literal(0), z.literal(1)]),
  absent_adjust_days: z.number().int().positive(),
  absent_leave_type_id: z.number(),

  delay_consider: z.union([z.literal(0), z.literal(1)]),
  delay_deduct_salary: z.union([z.literal(0), z.literal(1)]),
  delay_deduct_gross_salary: z.union([z.literal(0), z.literal(1)]),
  delay_consecutive: z.union([z.literal(0), z.literal(1)]),
  delay_consider_days: z.number().int().positive(),
  delay_adjust_days: z.number().int().positive(),
  delay_leave_type_id: z.number(),

  extreme_delay_consider: z.union([z.literal(0), z.literal(1)]),
  extreme_delay_deduct_salary: z.union([z.literal(0), z.literal(1)]),
  extreme_delay_deduct_gross_salary: z.union([z.literal(0), z.literal(1)]),
  extreme_delay_consecutive: z.union([z.literal(0), z.literal(1)]),
  extreme_delay_consider_days: z.number().int().positive(),
  extreme_delay_adjust_days: z.number().int().positive(),
  extreme_delay_leave_type_id: z.number(),

  underwork_consider: z.union([z.literal(0), z.literal(1)]),
  underwork_deduct_salary: z.union([z.literal(0), z.literal(1)]),
  underwork_deduct_gross_salary: z.union([z.literal(0), z.literal(1)]),
  underwork_consider_hours: z.number().int().positive(),
  underwork_adjust_days: z.number().int().positive(),
  underwork_leave_type_id: z.number(),

  unpaid_consider: z.union([z.literal(0), z.literal(1)]),
  unpaid_deduct_gross_salary: z.union([z.literal(0), z.literal(1)]),

  deduction_type: z.string().nullable(),
});

export const deductionPolicySchema = z.object({
  absent_adjust_days: z.number().int().positive(),
  absent_leave_type_id: z.number(),
  delay_adjust_days: z.number().int().positive(),
  delay_consecutive: z.number().optional(),
  delay_consider_days: z.number().int().positive(),
  delay_leave_type_id: z.number(),
  extreme_delay_adjust_days: z.number().int().positive(),
  extreme_delay_consecutive: z.number().optional(),
  extreme_delay_consider_days: z.number().int().positive(),
  extreme_delay_leave_type_id: z.number(),
  items: z.array(z.string()).optional(),
  underwork_adjust_days: z.number().int().positive(),
  underwork_consider_hours: z.number().int().positive(),
  underwork_leave_type_id: z.number(),

  deduction_type: z.string().nullable(),
});

export type DeductionPolicySchemaTypes = z.infer<typeof deductionPolicySchema>;
export type DeductionPolicyFormData = z.infer<typeof deductionPolicySchemaForm>;

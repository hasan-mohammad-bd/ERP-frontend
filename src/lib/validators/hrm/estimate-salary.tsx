import { z } from "zod";

// Define the schema for a single employee's salary data
export const employeeSalarySchema = z
  .object({
    employee_id: z.coerce
      .number()
      .min(1, "Employee ID is required and must be a valid number"),
    employee_name: z.string().min(1, "Employee name is required"),
    allowance: z.coerce
      .number()
      .min(0, "Allowance must be a non-negative number"),
    deduction: z.coerce
      .number()
      .min(0, "Deduction must be a non-negative number"),
    total: z.coerce.number().min(0, "Total must be a non-negative number"),
  })
  .superRefine((data, ctx) => {
    const { allowance, deduction, total } = data;
    if (total !== allowance - deduction) {
      ctx.addIssue({
        code: "custom",
        message: "Total must be equal to allowance minus deduction",
        path: ["total"], // Path to the field where the error should be shown
      });
    }
  });

// Define the schema for the new bank details fields, including salary_month
const bankDetailsSchema = z.object({
  employee_ids: z.array(
    z.coerce
      .number()
      .min(1, "Employee ID is required and must be a valid number")
  ),
  bank_advice_no: z.string().min(1, "Bank advice number is required"),
  bank_date: z.string().min(1, "Bank date is required"), // Assume bank date is a string; change if it's a Date
  salary_month: z
    .string()
    .regex(/^\d{4}-\d{2}$/, "Salary month must be in the format YYYY-MM"), // Ensures format YYYY-MM
  comment: z.string().optional(), // Comment can be optional
});

// Main schema for the form, which includes an array of employee salary data and bank details
export const estimateSalaryFormSchema = z.object({
  employees: z.array(employeeSalarySchema),
  bank_details: bankDetailsSchema, // Add the new schema for bank details
});

// Infer types from the schemas
export type EstimateSalaryColumn = z.infer<typeof employeeSalarySchema>; // Employee data type
export type EstimateSalaryValues = z.infer<typeof estimateSalaryFormSchema>;
// Form values type

import { z } from "zod";

const salaryCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.enum(["Allowance", "Deduction"]),
  sorting_index: z.number().optional().nullable(),
});

export const allowanceSchema = z.object({
  amount: z.coerce.number(), // Coerce input to number
  // arrear: z.coerce.number(), // If applicable, coerce arrear to number too
  comment: z.string().nullable(),
  salary_category: salaryCategorySchema,
});

export type SalaryAllowanceSchema = z.infer<typeof allowanceSchema>;

const employeeSchema = z.object({
  employee_unique_id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  joining_date: z.string(),
  account_number: z.string().nullable(),
  department: z.object({
    name: z.string(),
  }),
  designation: z.object({
    name: z.string(),
  }),
});

export type EmployeeSchema = z.infer<typeof employeeSchema>;

const summerySchema = z.object({
  total_allowance: z.number(),
  total_allowance_arrear: z.number(),
  total_deduction: z.number(),
  total_deduction_arrear: z.number(),
  total: z.number(),
});

const salarySetupSchema = z.object({
  employee_id: z.string(),
  employee: employeeSchema,
  allowance: z.array(allowanceSchema),
  deduction: z.array(allowanceSchema),
  summery: summerySchema,
});

export type SalarySetupValues = z.infer<typeof salarySetupSchema>;

const salaryCategory = z.object({
  salary_category_id: z
    .number()
    .min(1, "Salary category ID must be a positive number"),
  amount: z.number().min(0, "Amount must be a non-negative number"),
});

export const createSalarySetupSchema = z.object({
  employee_id: z.number().min(1, "Employee ID must be a positive number"),
  salary_categories: z
    .array(salaryCategory)
    .min(1, "At least one salary category is required"),
});

export type CreateSalaryCategoryValues = z.infer<
  typeof createSalarySetupSchema
>;

import { z } from "zod";

// Example
export const employeeFormSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	gender: z.string().min(1),
});

export type EmployeeFromValues = z.infer<typeof employeeFormSchema>;

export const departmentColumn = z.object({
	id: z.number(),
	name: z.string(),
});

export type DepartmentColumn = z.infer<typeof departmentColumn>;

export const updateEmployeeFormSchema = z.object({
	id: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	gender: z.string(),
});

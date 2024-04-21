import { z } from "zod";

// Department Form validation
export const DepartmentFormSchema = z.object({
	name: z.string().min(2, {
		message: "Department name must be at least 2 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number(),
});

export type DepartmentFromValues = z.infer<typeof DepartmentFormSchema>;

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

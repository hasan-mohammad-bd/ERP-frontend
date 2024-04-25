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
	sorting_index: z.coerce.number(),
});

export type DepartmentColumn = z.infer<typeof departmentColumn>;

export const updateEmployeeFormSchema = z.object({
	id: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	gender: z.string(),
});

// Designation

export const DesignationFormSchema = z.object({
	name: z.string().min(2, {
		message: "Department name must be at least 2 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number(),
});

export type DesignationFromValues = z.infer<typeof DesignationFormSchema>;

export const designationColumn = z.object({
	id: z.number(),
	name: z.string(),
	sorting_index: z.coerce.number(),
});

export type DesignationColumn = z.infer<typeof designationColumn>;

// Section
export const SectionFormSchema = z.object({
	name: z.string().min(2, {
		message: "Department name must be at least 2 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number(),
});

export type SectionFromValues = z.infer<typeof SectionFormSchema>;

export const sectionColumn = z.object({
	id: z.number(),
	name: z.string(),
	sorting_index: z.coerce.number(),
})

export type SectionColumn = z.infer<typeof sectionColumn>;

// Employee Class
export const EmployeeClassFormSchema = z.object({
	name: z.string().min(2, {
		message: "Department name must be at least 2 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number(),
});

export type EmployeeClassFromValues = z.infer<typeof EmployeeClassFormSchema>;

export const employeeClassColumn = z.object({
	id: z.number(),
	name: z.string(),
	sorting_index: z.coerce.number(),
})

export type EmployeeClassColumn = z.infer<typeof employeeClassColumn>;


// Employee Grade

export const EmployeeGradeFormSchema = z.object({
	name: z.string().min(2, {
		message: "Department name must be at least 2 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number(),
	max_salary: z.coerce.number(),
	min_salary: z.coerce.number(),
});

export type EmployeeGradeFromValues = z.infer<typeof EmployeeGradeFormSchema>;

export const employeeGradeColumn = z.object({
	id: z.number(),
	name: z.string(),
	sorting_index: z.coerce.number(),
	max_salary: z.coerce.number(),
	min_salary: z.coerce.number(),
})

export type EmployeeGradeColumn = z.infer<typeof employeeGradeColumn>;
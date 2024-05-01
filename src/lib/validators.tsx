import { z } from "zod";

// Department Form validation
export const DepartmentFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
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
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
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
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
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
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
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
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
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

// Organization

export const OrganizationFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
});

export type OrganizationFromValues = z.infer<typeof OrganizationFormSchema>;

export const organizationColumn = z.object({
	id: z.number(),
	name: z.string(),
	sorting_index: z.coerce.number(),
})

export type OrganizationColumn = z.infer<typeof organizationColumn>;

// Schedule

export const ScheduleFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	hour: z.string(),
	start_time: z.string(),
	end_time: z.string(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
	organization_id: z.coerce.number().optional().nullable(),
});

export type ScheduleFromValues = z.infer<typeof ScheduleFormSchema>;

export const scheduleColumn = z.object({
	id: z.number(),
	name: z.string(),
	hour: z.string(),
	start_time: z.string(),
	end_time: z.string(),
	sorting_index: z.coerce.number(),
	organization: organizationColumn.nullable(),
})

export type ScheduleColumn = z.infer<typeof scheduleColumn>;


// Vacancy Requisition

export const VacancyRequisitionFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
	vacancy_number: z.coerce.number(),
	department_id: z.coerce.number().optional().nullable(),
	organization_id: z.coerce.number().optional().nullable(),
	designation_id: z.coerce.number().optional().nullable(),

});

export type VacancyRequisitionFromValues = z.infer<typeof VacancyRequisitionFormSchema>;

export const vacancyRequisitionColumn = z.object({
	id: z.number(),
	name: z.string(),
	sorting_index: z.coerce.number().nullable(),
	vacancy_number: z.coerce.number(),
	department: departmentColumn.nullable(),
	organization: organizationColumn.nullable(),
	designation: designationColumn.nullable(),

})

export type VacancyRequisitionColumn = z.infer<typeof vacancyRequisitionColumn>;


// Location

export const LocationFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}).max(255, {
		message: "Name must be at most 255 characters.",
	}),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),
	organization_id:  z.coerce.number().optional().nullable(),

});

export type LocationFromValues = z.infer<typeof LocationFormSchema>;

export const locationColumn = z.object({
	id: z.number(),
	name: z.string(),
	parent_id: z.coerce.number().nullable().optional(),
	sorting_index: z.coerce.number(),
	organization: organizationColumn.nullable(),



})

export type LocationColumn = z.infer<typeof locationColumn>;

// employment status

export const employmentStatusColumn = z.object({
	name: z.string().min(2, {
		message: "Employment status name must be at least 2 characters.",
	}),
	id: z.coerce.number(),
	status: z.coerce.string(),
});

export type EmploymentStatusColumn = z.infer<typeof employmentStatusColumn>;


// work place

export const workPlaceColumn = z.object({
	name: z.string().min(2, {
		message: "Work place name must be at least 2 characters.",
	}),
	id: z.coerce.number(),
	status: z.coerce.string(),
});


export type WorkPlaceColumn = z.infer<typeof workPlaceColumn>;

//job post

export const JobPostFormSchema = z.object({
	title: z.string().min(2, {
		message: "Job Post title must be at least 2 characters.",
	}).max(255, {
		message: "Job Post title must be at most 255 characters.",
	}),
	date: z.string().date(),
	deadline: z.string().date(),
	department_id: z.coerce.number().optional().nullable(),
	organization_id:  z.coerce.number().optional().nullable(),
	designation_id:  z.coerce.number().optional().nullable(),
	location_id:  z.coerce.number().optional().nullable(),
	vacancy_requisition_id:  z.coerce.number().optional().nullable(),
	vacancy_number:  z.coerce.number(),
	employment_status_id:  z.coerce.number().optional().nullable(),
	work_place_id:  z.coerce.number().optional().nullable(),
	min_age:  z.coerce.number(),
	max_age:  z.coerce.number(),
	responsibilities: z.string(),
	education: z.string(),
	experience: z.string(),
	skills: z.string(),
	show_salary:  z.coerce.number().optional().nullable(),
	min_salary:  z.coerce.number(),
	max_salary:  z.coerce.number(),
	status: z.string(),
	sorting_index: z.coerce.number().int().min(0, {
		message: "Sorting index must be at least 0.",
}).max(9999, {
		message: "Sorting index must be at most 9999.",
}),

})

export type JobPostFromValues = z.infer<typeof JobPostFormSchema>;

export const jobPostColumn = z.object({
	id: z.number(),
	title: z.string(),
	date: z.string(),
	deadline: z.string(),
	department: departmentColumn.nullable(),
	organization: organizationColumn.nullable(),
	designation: designationColumn.nullable(),
	location: locationColumn.nullable(),
	vacancy_requisition: vacancyRequisitionColumn.nullable(),
	vacancy_number: z.coerce.number().nullable(),
	employment_status: employmentStatusColumn.nullable(),
	work_place: z.object({ id: z.number(), name: z.string(), status: z.string() }).nullable(),
	responsibilities: z.string(),
	education: z.string(),
	experience: z.string(),
	skills: z.string(),
	show_salary: z.number(), //1 or 0 
	min_salary: z.coerce.number(),
	max_salary: z.coerce.number(),
	min_age:  z.coerce.number(),
	max_age:  z.coerce.number(),
	status: z.string(), //Active or Inactive
	sorting_index: z.coerce.number(),
})

export type JobPostColumn = z.infer<typeof jobPostColumn>;



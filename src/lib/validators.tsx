import { z } from "zod";

// Department Form validation
export const DepartmentFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
  parent_id: z.coerce.number().nullable().optional(),
  sorting_index: z.coerce.number().nullable().optional(),
});

export type DepartmentFromValues = z.infer<typeof DepartmentFormSchema>;

export const departmentColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
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
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
  parent_id: z.coerce.number().nullable().optional(),
  sorting_index: z.coerce.number().int().optional().nullable(),
});

export type DesignationFromValues = z.infer<typeof DesignationFormSchema>;

export const designationColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
});

export type DesignationColumn = z.infer<typeof designationColumn>;

// Section
export const SectionFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
  parent_id: z.coerce.number().nullable().optional(),
  sorting_index: z.coerce.number().optional().nullable(),
});

export type SectionFromValues = z.infer<typeof SectionFormSchema>;

export const sectionColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
});

export type SectionColumn = z.infer<typeof sectionColumn>;

// Employee Class
export const EmployeeClassFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
  parent_id: z.coerce.number().nullable().optional(),
  sorting_index: z.coerce.number().int().optional().nullable(),
});

export type EmployeeClassFromValues = z.infer<typeof EmployeeClassFormSchema>;

export const employeeClassColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
});

export type EmployeeClassColumn = z.infer<typeof employeeClassColumn>;

// Employee Grade

export const EmployeeGradeFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
  parent_id: z.coerce.number().nullable().optional(),
  sorting_index: z.coerce.number().optional().nullable(),
  max_salary: z.coerce.number(),
  min_salary: z.coerce.number(),
});

export type EmployeeGradeFromValues = z.infer<typeof EmployeeGradeFormSchema>;

export const employeeGradeColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
  max_salary: z.coerce.number(),
  min_salary: z.coerce.number(),
});

export type EmployeeGradeColumn = z.infer<typeof employeeGradeColumn>;

// Organization

export const OrganizationFormSchema = z.object({
  name: z.string(),
  title: z.string().optional().nullable(),
  email: z.string().array().optional().nullable(),
  address: z.string().array().optional().nullable(),
  website: z.string().array().optional().nullable(),
  g_map: z.string().array().optional().nullable(),
  phone: z.string().array().optional().nullable(),
  logo: z.string().optional().nullable(),
  banner: z.string().optional().nullable(),
  parent_id: z.coerce.number().nullable().optional(),
});

export type OrganizationFromValues = z.infer<typeof OrganizationFormSchema>;

export const organizationColumn = OrganizationFormSchema.extend({
  id: z.number(),
});

export type OrganizationColumn = z.infer<typeof organizationColumn>;

//organization for dropdown
export const organizationDropdownColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
  child_organization: organizationColumn.array().optional().nullable(),
});

export type OrganizationDropdownColumn = z.infer<
  typeof organizationDropdownColumn
>;

// Schedule

export const ScheduleFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
  hour: z.string(),
  start_time: z.string(),
  end_time: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
  organization_id: z.coerce.number().optional().nullable(),
});

export type ScheduleFromValues = z.infer<typeof ScheduleFormSchema>;

export const scheduleColumn = z.object({
  id: z.number(),
  name: z.string(),
  hour: z.string(),
  start_time: z.string(),
  end_time: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
  organization: organizationColumn.nullable(),
});

export type ScheduleColumn = z.infer<typeof scheduleColumn>;

// Roster

export const RosterFormSchema = z.object({
  schedule_id: z.coerce.number(),
  date: z.string().refine(
    (date) => {
      const day = new Date(date).getUTCDay();
      return day !== 5 && day !== 6;
    },
    {
      message: "Friday and Saturday are weekend days.",
    }
  ),
});

export type RosterFromValues = z.infer<typeof RosterFormSchema>;

export const rosterColumn = z.object({
  id: z.number(),
  schedule: scheduleColumn,
  date: z.object({
    date: z.string().date(),
  }),
});

export type RosterColumn = z.infer<typeof rosterColumn>;

// holiday

export const HolidayFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  date: z.string().date(),
  type: z.enum(["Mandatory", "Optional"]),
});

export type HolidayFromValues = z.infer<typeof HolidayFormSchema>;

export const holidayColumn = z.object({
  id: z.number(),
  name: z.string(),
  date: z.object({
    date: z.string().date(),
  }),
  type: z.enum(["Mandatory", "Optional"]),
});

export type HolidayColumn = z.infer<typeof holidayColumn>;

// Vacancy Requisition

export const VacancyRequisitionFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
  sorting_index: z.coerce.number().optional().nullable(),
  vacancy_number: z.coerce.number(),
  department_id: z.coerce.number().optional().nullable(),
  organization_id: z.coerce.number().optional().nullable(),
  designation_id: z.coerce.number().optional().nullable(),
});

export type VacancyRequisitionFromValues = z.infer<
  typeof VacancyRequisitionFormSchema
>;

export const vacancyRequisitionColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
  vacancy_number: z.coerce.number(),
  department: departmentColumn.nullable(),
  organization: organizationColumn.nullable(),
  designation: designationColumn.nullable(),
});

export type VacancyRequisitionColumn = z.infer<typeof vacancyRequisitionColumn>;

// Location

export const LocationFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(255, {
      message: "Name must be at most 255 characters.",
    }),
  parent_id: z.coerce.number().nullable().optional(),
  sorting_index: z.coerce.number().optional().nullable(),
  organization_id: z.coerce.number().optional().nullable(),
});

export type LocationFromValues = z.infer<typeof LocationFormSchema>;

export const locationColumn = z.object({
  id: z.number(),
  name: z.string(),
  parent_id: z.coerce.number().nullable().optional(),
  sorting_index: z.coerce.number().optional().nullable(),
  organization: organizationColumn.nullable(),
});

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
  title: z
    .string()
    .min(2, {
      message: "Job Post title must be at least 2 characters.",
    })
    .max(255, {
      message: "Job Post title must be at most 255 characters.",
    }),
  date: z.string().date(),
  deadline: z.string().date(),
  department_id: z.coerce.number().optional().nullable(),
  organization_id: z.coerce.number().optional().nullable(),
  designation_id: z.coerce.number().optional().nullable(),
  location_id: z.coerce.number().optional().nullable(),
  vacancy_requisition_id: z.coerce.number().optional().nullable(),
  vacancy_number: z.coerce.number(),
  employment_status_id: z.coerce.number().optional().nullable(),
  work_place_id: z.coerce.number().optional().nullable(),
  min_age: z.coerce.number(),
  max_age: z.coerce.number(),
  responsibilities: z.string(),
  education: z.string(),
  experience: z.string(),
  skills: z.string(),
  show_salary: z.coerce.number().optional().nullable(),
  min_salary: z.coerce.number(),
  max_salary: z.coerce.number(),
  status: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
});

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
  work_place: z
    .object({ id: z.number(), name: z.string(), status: z.string() })
    .nullable(),
  responsibilities: z.string(),
  education: z.string(),
  experience: z.string(),
  skills: z.string(),
  show_salary: z.number(), //1 or 0
  min_salary: z.coerce.number(),
  max_salary: z.coerce.number(),
  min_age: z.coerce.number(),
  max_age: z.coerce.number(),
  status: z.string(), //Active or Inactive
  sorting_index: z.coerce.number().optional().nullable(),
});

export type JobPostColumn = z.infer<typeof jobPostColumn>;

//education

export const EducationFormSchema = z.object({
  model_type: z.string().optional().nullable(),
  model_id: z.coerce.number().optional().nullable(),
  type: z.string().optional().nullable(),
  academy: z.string().min(2, {
    message: "Institute must be at least 2 characters.",
  }),
  title: z.string().optional(),
  degree: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  grade: z.string().optional(),
  /* sorting_index: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Sorting index must be at least 0.",
    })
    .max(9999, {
      message: "Sorting index must be at most 9999.",
    }), */
  // file: z.string().optional().nullable(),
});

export type EducationFromValues = z.infer<typeof EducationFormSchema>;

export const educationColumn = z.object({
  id: z.number(),
  type: z.string(),
  academy: z.string(),
  title: z.string(),
  degree: z.string(),
  start_date: z.string(),
  end_date: z.string().nullable(),
  grade: z.string(),
  // sorting_index: z.coerce.number(),
  // file: z.string().optional().nullable(),
});

export type EducationColumn = z.infer<typeof educationColumn>;

//experiences

export const ExperienceFormSchema = z.object({
  model_type: z.string().optional().nullable(),
  model_id: z.coerce.number().optional().nullable(),
  institution: z.string().min(2, {
    message: "Institution must be at least 2 characters.",
  }),
  employment_status_id: z.coerce.number().optional().nullable(),
  designation: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().date().optional().nullable(),
  description: z.string().optional().nullable(),
  /*   sorting_index: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Sorting index must be at least 0.",
    })
    .max(9999, {
      message: "Sorting index must be at most 9999.",
    }), */
});

export type ExperienceFormValues = z.infer<typeof ExperienceFormSchema>;

export const experienceColumn = z.object({
  id: z.number(),
  institution: z.string(),
  designation: z.string(),
  employment_status: employmentStatusColumn.nullable(),
  start_date: z.string(),
  end_date: z.string().nullable(),
  duration: z.string(),
  description: z.string().nullable(),
  sorting_index: z.coerce.number().optional().nullable(),
  file: z.string().optional().nullable(),
});

export type ExperienceColumn = z.infer<typeof experienceColumn>;

//skills

export const SkillFormSchema = z.object({
  model_type: z.string(),
  model_id: z.coerce.number().optional().nullable(),
  name: z.string().min(2, {
    message: "Skill must be at least 2 characters.",
  }),
  type: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  description: z.string().optional().nullable(),
  /*   sorting_index: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Sorting index must be at least 0.",
    })
    .max(9999, {
      message: "Sorting index must be at most 9999.",
    }), */
});

export type SkillFormValues = z.infer<typeof SkillFormSchema>;

export const skillColumn = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string({
    required_error: "Skill type is required.",}),
  start_date: z.string(),
  end_date: z.string().nullable(),
  description: z.string().nullable(),
  // sorting_index: z.coerce.number(),
});

export type SkillColumn = z.infer<typeof skillColumn>;

//city

export const CityFormSchema = z.object({
  id: z.coerce.number(),
  name: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  lattitude: z.coerce.number(),
  longitude: z.coerce.number(),
  country: z.string(),
});

export type CityFormValues = z.infer<typeof CityFormSchema>;

export const cityColumn = z.object({
  id: z.number(),
  name: z.string(),
  lattitude: z.number(),
  longitude: z.number(),
  country: z.string(),
});

export type CityColumn = z.infer<typeof cityColumn>;

//country

export const CountryFormSchema = z.object({
  id: z.coerce.number(),
  name: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  code: z.string().min(2, {
    message: "Code must be at least 2 characters.",
  }),
  flag: z.string().min(2, {
    message: "Flag must be at least 2 characters.",
  }),
  dial_code: z.string().min(2, {
    message: "Dial code must be at least 2 characters.",
  }),
});

export type CountryFormValues = z.infer<typeof CountryFormSchema>;

export const countryColumn = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  flag: z.string(),
  dial_code: z.string(),
});

export type CountryColumn = z.infer<typeof countryColumn>;

//address
export const AddressFormSchema = z.object({
  model_type: z.string().optional().nullable(),
  model_id: z.coerce.number().optional().nullable(),
  country_id: z.string(),
  city_id: z.string(),
  post_code: z.string(),
  address: z.string(),
  type: z.string().optional().nullable(),
});

export type AddressFromValues = z.infer<typeof AddressFormSchema>;

export const addressColumn = z.object({
  id: z.number(),
  post_code: z.string(),
  address: z.string(),
  type: z.string(),
  country: countryColumn,
  city: cityColumn,
});

export type AddressColumn = z.infer<typeof addressColumn>;

//Religion
export const religionColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
});

export type ReligionColumn = z.infer<typeof religionColumn>;

//gender

export const genderColumn = z.object({
  id: z.number(),
  name: z.string(),
  sorting_index: z.coerce.number().optional().nullable(),
});

export type GenderColumn = z.infer<typeof genderColumn>;

//job candidate

export const JobCandidateFormSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  alt_phone: z
    .string()
    .min(10, {
      message: "Alternate phone number must be at least 10 characters.",
    })
    .nullable(),
  nid_type: z.string(),
  nid_number: z.coerce.string(),
  marital_status: z.string(),
  birth_date: z.string().refine(
    (value) => {
      const birthDate = new Date(value);
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      return age >= 10;
    },
    {
      message: "Birth date must be at least 10 years old.",
    }
  ),
  // expected_salary: z.coerce.number(),
  // status: z.string(),
  religion_id: z.coerce.number(),
  gender_id: z.coerce.number(),
  educations: EducationFormSchema.array().optional().nullable(),
  experiences: ExperienceFormSchema.array().optional().nullable(),
  skills: SkillFormSchema.array().optional().nullable(),
  present_address: addressColumn.optional().nullable(),
  permanent_address: addressColumn.optional().nullable(),
});

export type JobCandidateFromValues = z.infer<typeof JobCandidateFormSchema>;

export const jobCandidateColumn = z.object({
  id: z.coerce.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.string(),
  alt_phone: z.string(),
  nid_type: z.string(),
  nid_number: z.coerce.string(),
  marital_status: z.string(),
  birth_date: z.string().date(),
  // expected_salary: z.coerce.number(),
  // status: z.string(),
  religion_id: z.coerce.number(),
  gender_id: z.coerce.number(),
  religion: religionColumn.optional().nullable(),
  gender: genderColumn.optional().nullable(),
  educations: educationColumn.array().optional().nullable(),
  experiences: experienceColumn.array().optional().nullable(),
  skills: skillColumn.array().optional().nullable(),
  present_address: addressColumn.optional().nullable(),
  permanent_address: addressColumn.optional().nullable(),
});

export type JobCandidateColumn = z.infer<typeof jobCandidateColumn>;

//job-apply-status

export const jobApplyStatusColumn = z.object({
  job_apply_status: z
    .enum([
      "Pending",
      "Rejected",
      "Shortlisted",
      "Call For Interview",
      "Interviewed",
      "Selected",
    ])
    .array(),
  contract_type: z.enum(["Email", "Phone", "Message"]).array(),
});

export type JobApplyStatusColumn = z.infer<typeof jobApplyStatusColumn>;

//job-apply

export const JobApplyFormSchema = z.object({
  job_post_id: z.coerce.number(),
  job_candidate_id: z.coerce.number(),
  status: z.string(),
  expected_salary: z.coerce.number(),
});

export type JobApplyFormValues = z.infer<typeof JobApplyFormSchema>;

export const jobApplyColumn = z.object({
  id: z.coerce.number(),
  status: z.string(),
  expected_salary: z.coerce.number(),
  job_post: jobPostColumn.optional().nullable(),
  job_candidate: jobCandidateColumn.optional().nullable(),
});

// job-apply status change

export const ChangeStatusFormSchema = z.object({
  status: z.string(),
  ids: z.array(z.coerce.number()),
  interview_date: z.string().optional().nullable(),
});

export type ChangeStatusFormValues = z.infer<typeof ChangeStatusFormSchema>;

export const changeStatusColumn = z.object({
  id: z.coerce.number(),
  status: z.string(),
  expected_salary: z.coerce.number(),
  job_post: jobPostColumn.optional().nullable(),
  job_candidate: jobCandidateColumn.optional().nullable(),
});

export type ChangeStatusColumn = z.infer<typeof changeStatusColumn>;

export type JobApplyColumn = z.infer<typeof jobApplyColumn>;

//role id

export const roleColumn = z.object({
  id: z.coerce.number(),
  name: z.string(),
  permissions: z.string().array().optional().nullable(),
});

export type RoleColumn = z.infer<typeof roleColumn>;

//employee nominee

export const employeeNomineeColumn = z.object({
  id: z.coerce.number(),
  gender_id: z.coerce.number(),
  name: z.string(),
  fathers_name: z.string(),
  mothers_name: z.string(),
  relation: z.string(),
  phone_number: z.string(),
  nid_number: z.coerce.string(),
  image: z.string(),
  gender: genderColumn.optional().nullable(),
  present_address: addressColumn.optional().nullable(),
});

export type EmployeeNomineeColumn = z.infer<typeof employeeNomineeColumn>;

//blood-group

export const bloodGroupColumn = z.object({
  id: z.coerce.number(),
  name: z.string(),
});

export type BloodGroupColumn = z.infer<typeof bloodGroupColumn>;

//nominee

export const NomineeFormSchema = z.object({
  employee_id: z.coerce.number(),
  gender_id: z.coerce.number(),
  name: z.string(),
  fathers_name: z.string(),
  mothers_name: z.string(),
  relation: z.string(),
  phone_number: z.string(),
  nid_number: z.coerce.string(),
  image: z.string().optional().nullable(),
  present_address: AddressFormSchema.optional().nullable(),
});

export type NomineeFormValues = z.infer<typeof NomineeFormSchema>;

export const nomineeColumn = z.object({
  id: z.coerce.number(),
  gender_id: z.coerce.number(),
  name: z.string(),
  fathers_name: z.string(),
  mothers_name: z.string(),
  relation: z.string(),
  phone_number: z.string(),
  nid_number: z.coerce.string(),
  image: z.string(),
  gender: genderColumn.optional().nullable(),
  present_address: addressColumn.optional().nullable(),
});

export type NomineeColumn = z.infer<typeof nomineeColumn>;

//employee

export const EmployeeFormSchema = z.object({
  
  employee_unique_id: z.string({
    required_error: "Employee ID is required.",
  }),

  card_id: z.string().optional().nullable(),
  machine_id: z.string().optional().nullable(),
  first_name: z.string({
    required_error: "First name is required.",
  }),
  last_name: z.string().optional().nullable(),
  phone: z.string({
    required_error: "Phone number is required.",
  }),
  corporate_phone: z.string().optional().nullable(),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z
    .string()
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one digit.",
    })
    .min(8, { message: "Password must be at least 8 characters long." })
    .optional()
    .nullable(),
  role_id: z.string({
    required_error: "Role is required.",
  }),
  joining_date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: "Invalid joining date.",
  }),
  is_head_of_dept: z.number().optional().nullable(),
  status: z.enum(["Active", "Inactive"], {
    message: "Status must be either 'Active' or 'Inactive'.",
    required_error: "Status is required.",
  }),
  location_id: z.string({
    required_error: "Location is required.",
  }),
  organization_id: z.string({
    required_error: "Organization is required.",
  }),
  department_id: z.string({
    required_error: "Department is required.",
  }),
  designation_id: z.string({
    required_error: "Designation is required.",
  }),
  work_place_id: z.string({
    required_error: "Work place is required.",
  }),
  section_id: z.string({
    required_error: "Section is required.",
  }),
  schedule_id: z.string({
    required_error: "Schedule is required.",
  }),
  employee_class_id: z.string({
    required_error: "Employee class is required.",
  }),
  employee_grade_id: z.string({
    required_error: "Employee grade is required.",
  }),
  employment_status_id: z.string({
    required_error: "Employment status is required.",
  }),

  leave_group_id: z.string({
    required_error: "Leave group is required.",
  }),
  // reporting_to_id: z.string().optional().nullable(),
  /*   sorting_index: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Sorting index must be at least 0.",
    })
    .max(9999, {
      message: "Sorting index must be at most 9999.",
    })
    .optional()
    .nullable(), */
  gender_id: z.string({
    required_error: "Gender is required.",
  }),
  religion_id: z.string({
    required_error: "Religion is required.",
  }),
  blood_group_id: z.string({
    required_error: "Blood group is required.",
  }),
  fathers_name: z.string().optional().nullable(),
  mothers_name: z.string().optional().nullable(),
  payment_type: z.string().optional().nullable(),
  
  account_number: z.string().optional().nullable(),
  bank_name: z.string().optional().nullable(),
  bank_branch: z.string().optional().nullable(),
  nid_number: z.string().optional().nullable(),
  birth_date: z
    .string()
    .refine(
      (value) => {
        const birthDate = new Date(value);
        const now = new Date();
        const diff = now.getTime() - birthDate.getTime();
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        return age >= 10;
      },
      {
        message: "Birth date must be at least 10 years old.",
      }
    )
    .optional()
    .nullable(),
  tin_number: z.string().optional().nullable(),
  marital_status: z.enum(["Married", "Unmarried"]).optional().nullable(),
  image: z.string().optional().nullable(),
});

export type EmployeeFormValues = z.infer<typeof EmployeeFormSchema>;

//employee update schema

export const EmployeeUpdateSchema = EmployeeFormSchema.omit({
  password: true,
})


export const employeeColumn = z.object({
  id: z.coerce.number(),
  // leave_group_id: z.string(),
  // leave_group: leaveGroupRow,
  leave_group: z.object({ name: z.string(), id: z.coerce.number() }),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.string(),
  corporate_phone: z.string(),
  joining_date: z.string().date(),
  is_head_of_dept: z.coerce.number(),
  status: z.enum(["Active", "Inactive"]),
  user_id: z.coerce.number().optional().nullable(),
  user: z.object({
    role: roleColumn,
  }),
  gender_id: z.coerce.number(),
  religion_id: z.coerce.number(),
  blood_group_id: z.coerce.number(),
  location_id: z.string(),
  organization_id: z.coerce.number(),
  work_place_id: z.coerce.number(),
  department_id: z.coerce.number(),
  schedule_id: z.coerce.number(),
  designation_id: z.coerce.number(),
  section_id: z.coerce.number(),
  employee_class_id: z.coerce.number(),
  employee_grade_id: z.coerce.number(),
  employment_status_id: z.coerce.number(),
  reporting_to_id: z.coerce.number().optional().nullable(),
  employee_unique_id: z.string(),
  card_id: z.string(),
  machine_id: z.string(),
  role_id: z.coerce.number(),
  role: roleColumn,
  fathers_name: z.string(),
  mothers_name: z.string(),
  payment_type: z.enum(["Cash", "Bank"]),
  account_number: z.string(),
  bank_name: z.string(),
  bank_branch: z.string(),
  nid_number: z.string(),
  birth_date: z.string(),
  tin_number: z.string(),
  marital_status: z.enum(["Married", "Unmarried"]),
  image: z.string().optional().nullable(),
  // sorting_index: z.coerce.number(),
  religion: religionColumn,
  gender: genderColumn.optional().nullable(),
  blood_group: bloodGroupColumn.optional().nullable(),
  educations: educationColumn.array().optional().nullable(),
  present_address: addressColumn.optional().nullable(),
  permanent_address: addressColumn.optional().nullable(),
  experiences: experienceColumn.array().optional().nullable(),
  skills: skillColumn.array().optional().nullable(),
  location: locationColumn.optional().nullable(),
  organization: organizationColumn.optional().nullable(),
  department: departmentColumn.optional().nullable(),
  designation: designationColumn.optional().nullable(),
  section: sectionColumn.optional().nullable(),
  schedule: scheduleColumn.optional().nullable(),
  employee_nominee: employeeNomineeColumn.optional().nullable(),
  employee_class: employeeClassColumn.optional().nullable(),
  employee_grade: employeeGradeColumn.optional().nullable(),
  employment_status: employmentStatusColumn.optional().nullable(),
  work_place: workPlaceColumn.optional().nullable(),
});

export type EmployeeColumn = z.infer<typeof employeeColumn>;

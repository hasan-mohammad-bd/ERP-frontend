export type SalaryDepartmentColumn = {
  id: number;
  name: string;
  employees: Employee[];
};

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  employee_unique_id: string;
  designation: string;
  salaries: SalaryColumn[];
};

export type SalaryColumn = {
  id: number;
  allowance_current: number;
  allowance_total: number;
  deduction_current: number;
  deduction_total: number;
  basic_salary: number;
  net_salary: number;
  salary_details: SalaryDetail[];
};

type SalaryDetail = {
  category_id: number;
  category_name: string;
  total: number;
};

export type SalaryCategory = {
  id: number;
  name: string;
  short_code: string | null;
  type: string;
  sorting_index: number | null;
  is_default: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  user_id: number;
  organization_id: number;
};

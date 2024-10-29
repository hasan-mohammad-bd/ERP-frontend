type SalaryCategory = {
  id: number;
  name: string;
  short_code: string | null;
  type: "Allowance" | "Deduction";
  is_default: boolean;
  sorting_index: number | null;
};

type SalaryDetail = {
  salary_id: number;
  salary_category_id: number;
  amount: string;
  arrear: string;
  total: string;
  comment: string;
  salary_category: SalaryCategory;
};

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  corporate_phone: string;
  joining_date: string;
  is_head_of_dept: number;
  status: "Active" | "Inactive";
  image: string;
  user_id: number;
  gender_id: number;
  religion_id: number;
  blood_group_id: number;
  location_id: number;
  organization_id: number;
  work_place_id: number;
  department_id: number;
  designation_id: number;
  section_id: number;
  schedule_id: number;
  employee_class_id: number;
  employee_grade_id: number;
  employment_status_id: number;
  reporting_to_id: number;
  employee_unique_id: string;
  card_id: string;
  machine_id: string;
  fathers_name: string;
  mothers_name: string;
  payment_type: "Cash" | "Bank";
  account_number: string;
  bank_name: string;
  bank_branch: string;
  nid_number: string;
  birth_date: string;
  tin_number: string;
  marital_status: "Married" | "Single" | "Divorced" | "Widowed";
  is_roster_elegible: number;
  sorting_index: number;
  leave_group_id: number;
  present_address: string | null;
  permanent_address: string | null;
  salary_summery: string | null;
  designation: {
    name: string;
  };
  department: {
    name: string;
  };
};

export type EmployeeSalaryPayslipData = {
  id: number;
  employee_id: number;
  user_id: number;
  organization_id: number;
  bank_advice_no: string;
  bank_date: string;
  date_of_generation: string | null;
  salary_month: string;
  type: "Salary";
  allowance_current: string;
  allowance_arrear: string;
  allowance_total: string;
  deduction_current: string;
  deduction_arrear: string;
  deduction_total: string;
  basic_salary: string;
  net_salary: string;
  status: "Pending" | "Approved" | "Rejected";
  employee: Employee;
  salary_details: SalaryDetail[];
  organization: {
    name: string;
    address: string[];
    phone: string[];
  };
  working_days: number;
};

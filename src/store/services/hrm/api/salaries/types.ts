import { EmployeeColumn } from "@/pages/hrm/employee/employee-list/components/validators";

export type SalaryColumnDataType = {
  id: number;
  allowance_current: number;
  allowance_total: number;
  deduction_current: number;
  deduction_total: number;
  basic_salary: number;
  net_salary: number;
  salary_month: string;
  employee: EmployeeColumn; // Added Employee type as a property
};

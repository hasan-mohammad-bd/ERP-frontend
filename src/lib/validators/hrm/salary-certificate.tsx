import { EmployeeColumn } from "@/lib/validators";
import { SalaryAllowanceSchema } from "./salary-setup-types";

export type EmployeeSalaryCertificate = {
  employee_id: string;
  employee: EmployeeColumn;
  allowance: SalaryAllowanceSchema[];
  deduction: SalaryAllowanceSchema[];
  summery: {
    total_deduction_arrear: number;
    total_deduction: number;
    total_allowance_arrear: number;
    total_allowance: number;
    total: number;
  };
  basic: string;
};

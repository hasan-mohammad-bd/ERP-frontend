import { EmployeeColumn } from "@/lib/validators";
import { SalaryAllowanceSchema } from "./salary-bill-report-type";


export type EmployeeBillReport = {
  employee_id: string;
  employee: EmployeeColumn;
  allowance: SalaryAllowanceSchema;
  deduction: SalaryAllowanceSchema;
  summery: {
    total_deduction_arrear: number;
    total_deduction: number;
    total_allowance_arrear: number;
    total_allowance: number;
    total: number;
  };
  basic: string;
};
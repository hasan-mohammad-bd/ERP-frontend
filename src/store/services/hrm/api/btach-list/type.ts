import { DesignationColumn } from "@/lib/validators";

// Define the type for the entire API response
export interface SalaryBatchResponseType {
    data: SalaryBatchDataType[]; // `data` contains an array of `SalaryBatchDataType`
  }

  // Existing `SalaryBatchDataType` for individual batch items
  export interface SalaryBatchDataType {
    batch_number: string;
    salary_month: string; // ISO date format (e.g., "YYYY-MM-DD")
    employee_count: number;
    total_salary: string; // Represented as a string to preserve formatting (e.g., "20473.00")
  }




  export interface SalaryBatchMonthDataType  {
  // define other properties
  bank_date: string;
  bank_advice_no: string;
  designation:DesignationColumn;
  allowance_total: number;
  employee: {
    first_name: string;
    last_name: string;
    designation: {
      name: string;
    };
    account_number: string;
  };
  total: string;
}

// type SalaryDataResponse = {
//   data: SalaryBatchMonthDataType[]; // Make sure this is the correct structure
// };
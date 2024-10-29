import { EmployeeSalaryPayslipData } from "@/lib/validators/hrm/employee-salary-payslip";
import { hrmApi } from "../..";

const estimateSalaryApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployeesEstimateSalaryPayslip: build.query<
      { data: EmployeeSalaryPayslipData },
      string
    >({
      query: (params) => `pay-slip-report?${params}`,
      providesTags: ["employee-salary-payslip"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetEmployeesEstimateSalaryPayslipQuery } = estimateSalaryApi;

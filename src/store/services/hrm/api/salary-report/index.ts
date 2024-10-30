import { hrmApi } from "../..";
import {
  SalaryCategory,
  SalaryDepartmentColumn,
} from "@/lib/validators/hrm/salary-report";

const salaryReportAPI = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSalaryReport: build.query<
      { data: SalaryDepartmentColumn[]; salary_category: SalaryCategory[] },
      string
    >({
      query: (params) => `salary-report?${params}`,
      providesTags: ["salary-report"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSalaryReportQuery } = salaryReportAPI;

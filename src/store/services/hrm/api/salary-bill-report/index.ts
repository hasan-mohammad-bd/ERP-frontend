// import { hrmApi } from "../..";
// import { EmployeeBillReport } from "@/lib/validators/hrm/report/salary-bill-report";

// const salaryBillReportApi = hrmApi.injectEndpoints({
//   endpoints: (build) => ({
//     getSalaryReportApi: build.query<
//     EmployeeBillReport,
//       string
//     >({
//       query: (employeeId) => `salary-settings/${employeeId}`,
//       providesTags: ["salary-settings"],
//     }),
//   }),
//   overrideExisting: false,
// });

// export const { useGetSalaryReportApiQuery } = salaryBillReportApi;

// API definition in salaryBillReportApi.ts

// API definition in salaryBillReportApi.ts

import { hrmApi } from "../..";
import { EmployeeBillReport } from "@/lib/validators/hrm/report/salary-bill-report";

const salaryBillReportApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSalaryReportApi: build.query<EmployeeBillReport, string>({
      query: (employeeId) => `/salary-settings/${employeeId}`,
      providesTags: ["salary-settings"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSalaryReportApiQuery } = salaryBillReportApi;

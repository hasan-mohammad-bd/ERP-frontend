import { getToken } from "@/utils/token";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const hrmApi = createApi({
  reducerPath: "hrmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_HRM_API,
    prepareHeaders: (headers) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      // const token = (getState() as RootState).auth.token;
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "departments",
    "designations",
    "sections",
    "employee-classes",
    "employee-grades",
    "schedules",
    "vacancy-requisitions",
    "job-posts",
    "employment-status",
    "workplaces",
    "job-candidates",
    "religions",
    "genders",
    "countries",
    "cities",
    "addresses",
    "education",
    "experiences",
    "self-organization",
    "job-applies",
    "job-applies-status",
    "employees",
    "blood-groups",
    "skills",
    "nominees",
    "change-status",
    "rosters",
    "holidays",
    "attendance-policy",
    "leave-types",
    "leave-groups",
    "leaves",
    "salary-categories",
    "salary-settings",
    "salary-estimate",
    "salary-generate",
    "employee-attendance-policies",
    "attendance-check-in",
    "attendance-check-out",
    "attendance-list",
    "leave-policies",
    "deduction-policies",
    "change-leave-status",
    "attendance-check-in",
    "attendance-check-out",
    "attendance-list",
    "leave-balance",
    "leave-summary",
    "leave-usage",
    "leave-trend",
    "leave-type-summary",
    "employee-salary-payslip",
    "attendance-summary-report",
    "salary-report",
    "dashboard-reports"
  ],
  endpoints: () => ({}),
});

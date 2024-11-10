import { hrmApi } from "../..";
import { EstimateSalaryColumn } from "@/lib/validators/hrm/estimate-salary";

const estimateSalaryApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployeesEstimateSalary: build.query<{ data: EstimateSalaryColumn[] }, void>({
      query: () => `salary-estimate`,
      providesTags: ["salary-estimate"],
    }),
    estimateSalary: build.mutation<{ data: EstimateSalaryColumn[] }, { employee_ids: number[], salary_month: string }>({
      query: ({ employee_ids, salary_month }) => ({
        url: `salary-estimate`,
        method: "POST",
        body: { employee_ids, salary_month },
      }),
      invalidatesTags: ["salary-estimate"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEmployeesEstimateSalaryQuery,
  useEstimateSalaryMutation,
} = estimateSalaryApi;

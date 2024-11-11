import { hrmApi } from "../..";
import { EstimateSalaryValues } from "@/lib/validators/hrm/estimate-salary";

const salaryGenerateApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getSalaryGenerate: build.query<{ data: EstimateSalaryValues[] }, void>({
      query: () => `salary-generate`,
      providesTags: ["salary-generate"],
    }),
    salaryGenerate: build.mutation<
      { data: EstimateSalaryValues[] },
      {
        employee_ids: number[];
        bank_advice_no: string;
        bank_date: string;
        salary_month: string;
        comment: string;
      }
    >({
      query: ({
        bank_advice_no,
        bank_date,
        comment,
        employee_ids,
        salary_month,
      }) => ({
        url: `salary-generate`,
        method: "POST",
        body: {
          bank_advice_no,
          bank_date,
          comment,
          employee_ids,
          salary_month,
        },
      }),
      invalidatesTags: ["salary-generate", "salaries"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSalaryGenerateQuery, useSalaryGenerateMutation } =
  salaryGenerateApi;

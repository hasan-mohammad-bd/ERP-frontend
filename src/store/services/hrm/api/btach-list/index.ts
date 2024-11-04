import { hrmApi } from "../..";
import { SalaryBatchMonthDataType, SalaryBatchResponseType } from "./type";

const bankAdviseBatchApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    // Existing query for fetching batch numbers based on the selected month
    getSalaryBatch: build.query<{ data: SalaryBatchResponseType}, { salary_month: string }>({
      query: ({ salary_month }) => `salary-batch?salary_month=${salary_month}`,
      providesTags: ["salary-batch"],
    }),



    // New query to fetch salary data based on batch_number and salary_month
    getSalariesByBatchAndMonth: build.query<{data:SalaryBatchMonthDataType[]}, { batch_number: string; salary_month: string }>({
      query: ({ batch_number, salary_month }) => `salaries?batch_number=${batch_number}&salary_month=${salary_month}`,
      providesTags: ["salary-batch-month"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSalaryBatchQuery,      // Export the batch query hook
  useGetSalariesByBatchAndMonthQuery, // Export the salaries query hook
} = bankAdviseBatchApi;

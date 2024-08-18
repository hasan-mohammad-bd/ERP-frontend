import { accountApi } from "../..";

import { GrowthRow, IncomeVsExpensesRow, RevenueRow } from "@/lib/validators/accounts/dashboard";

const dashboardSummaryApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboardSummaries: build.query<
      { data: IncomeVsExpensesRow[]; growth: GrowthRow; revenue: RevenueRow },
      string
    >({
      query: (params) => `reports/summery?${params}`,
      providesTags: ["dashboard-summery"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetDashboardSummariesQuery } = dashboardSummaryApi;

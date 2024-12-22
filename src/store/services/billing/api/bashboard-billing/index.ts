
import { DashboardReports } from "@/lib/validators/billing/dashboard-report";
import { inventoryApi } from "../..";



const reportsApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    fetchReportsList: build.query<
      { data: DashboardReports; },
      void
    >({
      query: () => `dashboard-reports`,
      providesTags: ["dashboard-reports"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useFetchReportsListQuery,
} = reportsApi;

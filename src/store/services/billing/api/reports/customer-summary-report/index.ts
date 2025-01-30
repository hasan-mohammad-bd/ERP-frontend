import { PaginationInfo } from "@/types";
import { inventoryApi } from "../../..";
import { CustomerSummaryType } from "@/lib/validators/billing/customer-summary";

const customerBalanceSummaryReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomerBalanceSummaryReport: build.query<
      {
        data: CustomerSummaryType[];
        meta: PaginationInfo;
      },
      string
    >({
      query: (params) => `customer-balance-summary-report?${params}`,
      providesTags: ["customer-balance-summary"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCustomerBalanceSummaryReportQuery } =
  customerBalanceSummaryReportApi;

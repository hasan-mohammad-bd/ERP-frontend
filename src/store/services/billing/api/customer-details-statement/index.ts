import { PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { CustomerDetailsStatementReport } from "./type";



const CustomerDetailsStatementReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomerDetailsStatementReport: build.query<
      { data: CustomerDetailsStatementReport; meta: PaginationInfo },
      string
    >({
      query: (params) => `report/customer-details-statement?${params}`,
      providesTags: ["customer-details-statement"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCustomerDetailsStatementReportQuery } = CustomerDetailsStatementReportApi;
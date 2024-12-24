import { PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import { SupplierDetailsStatementReportData } from "./type";

const SupplierDetailsStatementReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSupplierDetailsStatementReport: build.query<
      { data: SupplierDetailsStatementReportData; meta: PaginationInfo },
      string
    >({
      query: (params) => `report/supplier-details-statement?${params}`,
      providesTags: ["supplier-details-statement"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSupplierDetailsStatementReportQuery } = SupplierDetailsStatementReportApi;
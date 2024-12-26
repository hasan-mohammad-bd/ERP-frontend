import { PaginationInfo } from "@/types";

import {  StockTransactionReportDataType } from "./type";
import { inventoryApi } from "../../..";



const StcokTransactionReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getStockTransactionReport: build.query<
      { data: StockTransactionReportDataType[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `report/stock-transaction-report?${params}`,
      providesTags: ["stock-transaction-report"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetStockTransactionReportQuery } = StcokTransactionReportApi;
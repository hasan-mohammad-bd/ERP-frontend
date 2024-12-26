import { inventoryApi } from "../../..";
import { StockItemSummaryReportType } from "./type";


const stockItemSummaryReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getStockItemSummaryReport: build.query<
    StockItemSummaryReportType,
      string
    >({
      query: (params) => `report/stock-item-summary-report?${params}`,
      providesTags: ["stock-item-summary-report"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetStockItemSummaryReportQuery } =
  stockItemSummaryReportApi;

import { inventoryApi } from "../../..";
import { StockReportItemDataType } from "./type";

const stockReportApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getStockReport: build.query<{ data: StockReportItemDataType[] }, string>({
      query: (params) => `report/stock-report?${params}`,
      providesTags: ["stock-report"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetStockReportQuery } = stockReportApi;

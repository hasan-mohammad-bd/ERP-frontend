import { inventoryApi } from "../../..";
import { StockBatchDataType } from "./type";

const stockBatchApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getStockBatch: build.query<StockBatchDataType, string>({
      query: (params) => `report/stock-batch?${params}`,
      providesTags: ["stock-batch"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetStockBatchQuery
} = stockBatchApi;

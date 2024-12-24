import { inventoryApi } from "../../..";
import { SaleWiseProfitLossDataType } from "./type";

const saleWiseProfitLossApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSaleWiseProfitLoss: build.query<
      SaleWiseProfitLossDataType,
      string
    >({
      query: (params) => `report/sale-wise-profit-loss?${params}`,
      providesTags: ["sale-wise-profit-loss"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSaleWiseProfitLossQuery
} = saleWiseProfitLossApi;

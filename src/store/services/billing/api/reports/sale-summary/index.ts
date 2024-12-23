
import { inventoryApi } from "../../..";
import { ItemSaleSummaryDataType } from "./type";


const itemSaleSummaryApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getItemSaleSummary: build.query<
      { data: ItemSaleSummaryDataType},
      string
    >({
      query: (params) => `report/item-sale-summary?${params}`,
      providesTags: ["item-sale-summary"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetItemSaleSummaryQuery
} = itemSaleSummaryApi;

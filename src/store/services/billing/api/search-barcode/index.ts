import { inventoryApi } from "../..";
import { PaginationInfo } from "@/types";
import { SearchBarcodeItem } from "@/lib/validators/billing/search-barcode-item";

const searchBarcodeItemsApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSearchBarcodeProducts: build.query<
      { data: SearchBarcodeItem[]; meta: PaginationInfo },
      string
    >({
      query: (query) => ({
        url: `search-barcode?${query}`,
        method: "GET", // No body, only query parameters
      }),
      providesTags: ["search-barcode"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetSearchBarcodeProductsQuery } = searchBarcodeItemsApi;

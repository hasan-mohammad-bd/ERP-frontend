import {
  ItemFormValues,
  ItemRow,
  SetOpeningStockFormValues,
} from "@/lib/validators/billing/items";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { ItemStockDataType, OpeningStockDataType } from "./types";

const itemApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getItem: build.query<{ data: ItemRow[]; meta: PaginationInfo }, string>({
      query: (params) => `items?${params}`,
      providesTags: ["item"],
    }),
    getItemById: build.query<{ data: ItemRow }, string>({
      query: (params) => `items/${params}`,
      providesTags: ["item"],
    }),
    createItem: build.mutation<{ data: ItemRow }, ItemFormValues>({
      query: (newItem) => ({
        url: `items`,
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["item"],
    }),
    removeItem: build.mutation<DeleteResponse, number>({
      query: (itemId) => ({
        url: `items/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["item"],
    }),
    updateItem: build.mutation<
      { data: ItemRow },
      { itemId: number; updatedItem: ItemFormValues }
    >({
      query: ({ itemId, updatedItem }) => ({
        url: `items/${itemId}`,
        method: "POST",
        body: updatedItem,
      }),
      invalidatesTags: ["item"],
    }),

    setOpeningStock: build.mutation<
      { data: OpeningStockDataType },
      SetOpeningStockFormValues
    >({
      query: (formData) => ({
        url: `set-opening-stock`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["item", "opening-stock"],
    }),
    getOpeningStock: build.query<
      { data: OpeningStockDataType[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `opening-stock?${params}`,
      providesTags: ["item", "opening-stock"],
    }),
    getItemStocks: build.query<
      { data: ItemStockDataType[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `item-stocks?${params}`,
      providesTags: ["item", "opening-stock"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetItemQuery,
  useGetItemByIdQuery,
  useCreateItemMutation,
  useRemoveItemMutation,
  useUpdateItemMutation,
  useSetOpeningStockMutation,
  useGetOpeningStockQuery,
  useGetItemStocksQuery,
} = itemApi;

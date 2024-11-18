import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { ItemRow } from "@/lib/validators/billing/item";

const itemApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getItem: build.query<{ data: ItemRow[]; meta: PaginationInfo }, string>({
      query: (params) => `items?${params}`,
      providesTags: ["item"],
    }),
    createItem: build.mutation<{ data: ItemRow }, FormData>({
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
      { itemId: number; updatedItem: FormData }
    >({
      query: ({ itemId, updatedItem }) => ({
        url: `items/${itemId}`,
        method: "POST",
        body: updatedItem,
      }),
      invalidatesTags: ["item"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetItemQuery,
  useCreateItemMutation,
  useRemoveItemMutation,
  useUpdateItemMutation,
} = itemApi;

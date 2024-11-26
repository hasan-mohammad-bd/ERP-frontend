import { ItemFormValues, ItemRow } from "@/lib/validators/billing/items";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import {
  QuotationFormDataType,
  QuotationRow,
} from "@/lib/validators/billing/quotation";

const quotationApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getQuotations: build.query<
      { data: QuotationRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `quotations?${params}`,
      providesTags: ["quotations"],
    }),
    getItemById: build.query<{ data: ItemRow }, string>({
      query: (params) => `quotations/${params}`,
      providesTags: ["quotations"],
    }),
    createQuotation: build.mutation<{ data: ItemRow }, QuotationFormDataType>({
      query: (newQuotation) => ({
        url: `quotations`,
        method: "POST",
        body: newQuotation,
      }),
      invalidatesTags: ["quotations"],
    }),
    removeItem: build.mutation<DeleteResponse, number>({
      query: (itemId) => ({
        url: `quotations/${itemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quotations"],
    }),
    updateItem: build.mutation<
      { data: ItemRow },
      { itemId: number; updatedItem: ItemFormValues }
    >({
      query: ({ itemId, updatedItem }) => ({
        url: `quotations/${itemId}`,
        method: "POST",
        body: updatedItem,
      }),
      invalidatesTags: ["quotations"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetQuotationsQuery,
  useGetItemByIdQuery,
  useCreateQuotationMutation,
  useRemoveItemMutation,
  useUpdateItemMutation,
} = quotationApi;

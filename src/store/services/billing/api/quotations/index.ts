import { ItemRow } from "@/lib/validators/billing/items";
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
    getQuotationById: build.query<{ data: QuotationRow }, number>({
      query: (quotationId) => `quotations/${quotationId}`,
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
    removeQuotation: build.mutation<DeleteResponse, number>({
      query: (quotationId) => ({
        url: `quotations/${quotationId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["quotations"],
    }),
    updateQuotation: build.mutation<
      { data: ItemRow },
      { itemId: number; updatedItem: QuotationFormDataType }
    >({
      query: ({ itemId, updatedItem }) => ({
        url: `quotations/${itemId}`,
        method: "PUT",
        body: updatedItem,
      }),
      invalidatesTags: ["quotations"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetQuotationsQuery,
  useGetQuotationByIdQuery,
  useCreateQuotationMutation,
  useRemoveQuotationMutation,
  useUpdateQuotationMutation,
} = quotationApi;

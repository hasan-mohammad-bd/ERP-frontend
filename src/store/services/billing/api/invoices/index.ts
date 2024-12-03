import { ItemRow } from "@/lib/validators/billing/items";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

import {
  InvoiceFormDataType,
  InvoicesRow,
} from "@/lib/validators/billing/invoices";

const invoicesApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSalesInvoices: build.query<
      { data: InvoicesRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `invoices?${params}`,
      providesTags: ["invoices"],
    }),
    getSalesInvoicesById: build.query<{ data: InvoicesRow }, number>({
      query: (invoiceId) => `invoices/${invoiceId}`,
      providesTags: ["invoices"],
    }),
    createSalesInvoices: build.mutation<{ data: ItemRow }, InvoiceFormDataType>(
      {
        query: (newQuotation) => ({
          url: `invoices`,
          method: "POST",
          body: newQuotation,
        }),
        invalidatesTags: ["invoices"],
      }
    ),
    removeSalesInvoices: build.mutation<DeleteResponse, number>({
      query: (invoiceId) => ({
        url: `invoices/${invoiceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["invoices"],
    }),
    updateSalesInvoices: build.mutation<
      { data: ItemRow },
      { itemId: number; updatedItem: InvoiceFormDataType }
    >({
      query: ({ itemId, updatedItem }) => ({
        url: `invoices/${itemId}`,
        method: "PUT",
        body: updatedItem,
      }),
      invalidatesTags: ["invoices"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSalesInvoicesQuery,
  useGetSalesInvoicesByIdQuery,
  useCreateSalesInvoicesMutation,
  useRemoveSalesInvoicesMutation,
  useUpdateSalesInvoicesMutation,
} = invoicesApi;

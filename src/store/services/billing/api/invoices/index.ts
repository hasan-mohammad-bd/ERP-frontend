import { ItemRow } from "@/lib/validators/billing/items";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { SaleInvoiceResponse } from "@/lib/validators/billing/billing-responses";
import { SalesInvoiceFormValues } from "@/lib/validators/billing/billing-transactions";

const invoicesApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSalesInvoices: build.query<
      { data: SaleInvoiceResponse[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `invoices?${params}`,
      providesTags: ["invoices"],
    }),
    getSalesInvoicesById: build.query<{ data: SaleInvoiceResponse }, number>({
      query: (invoiceId) => `invoices/${invoiceId}`,
      providesTags: ["invoices"],
    }),
    createSalesInvoices: build.mutation<
      { data: ItemRow },
      SalesInvoiceFormValues
    >({
      query: (newQuotation) => ({
        url: `invoices`,
        method: "POST",
        body: newQuotation,
      }),
      invalidatesTags: ["invoices"],
    }),
    removeSalesInvoices: build.mutation<DeleteResponse, number>({
      query: (invoiceId) => ({
        url: `invoices/${invoiceId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["invoices"],
    }),
    updateSalesInvoices: build.mutation<
      { data: ItemRow },
      { itemId: number; updatedItem: SalesInvoiceFormValues }
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

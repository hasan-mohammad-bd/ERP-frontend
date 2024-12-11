
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

import { InvoiceReturnRow } from "@/lib/validators/billing/return";
import { InvoiceReturnFormValues } from "@/lib/validators/billing/billing-transactions";


const invoiceReturnApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getInvoiceReturns: build.query<{ data: InvoiceReturnRow[]; meta: PaginationInfo }, string>({
      query: (params) => `invoice-return?${params}`,
      providesTags: ["invoiceReturn"],
    }),
    getInvoiceReturnById: build.query<{ data: InvoiceReturnRow }, number>({
      query: (invoiceReturnId) => `invoice-return/${invoiceReturnId}`,
      providesTags: ["invoiceReturn"],
    }),
    createInvoiceReturn: build.mutation<{ data: InvoiceReturnRow }, InvoiceReturnFormValues>({
      query: (newInvoiceReturn) => ({
        url: `invoice-return`,
        method: "POST",
        body: newInvoiceReturn,
      }),
      invalidatesTags: ["invoiceReturn", "invoices"],
    }),
    removeInvoiceReturn: build.mutation<DeleteResponse, number>({
      query: (invoiceReturnId) => ({
        url: `invoice-return/${invoiceReturnId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["invoiceReturn"],
    }),
    updateInvoiceReturn: build.mutation<
      { data: InvoiceReturnRow },
      { invoiceReturnId: number; updatedInvoiceReturn: InvoiceReturnFormValues }
    >({
      query: ({ invoiceReturnId, updatedInvoiceReturn }) => ({
        url: `invoice-return/${invoiceReturnId}`,
        method: "PUT",
        body: updatedInvoiceReturn,
      }),
      invalidatesTags: ["invoiceReturn"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetInvoiceReturnsQuery,
  useGetInvoiceReturnByIdQuery,
  useCreateInvoiceReturnMutation,
  useRemoveInvoiceReturnMutation,
  useUpdateInvoiceReturnMutation,
} = invoiceReturnApi;
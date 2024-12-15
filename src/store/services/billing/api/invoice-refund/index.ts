import {
  BillingPaymentFormType,
  BillingPaymentRow,
} from "@/lib/validators/billing/billing-payment";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const invoiceRefundApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getInvoiceRefunds: build.query<
      { data: BillingPaymentRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `invoice-refunds?${params}`,
      providesTags: ["invoice-refunds"],
    }),
    createInvoiceRefund: build.mutation<
      { data: BillingPaymentRow },
      BillingPaymentFormType | FormData
    >({
      query: (newInvoiceRefund) => ({
        url: `invoice-refunds`,
        method: "POST",
        body: newInvoiceRefund,
      }),
      invalidatesTags: [
        "invoice-refunds",
        "invoiceReturn",
        "customers",
        "invoices",
      ],
    }),
    removeInvoiceRefund: build.mutation<DeleteResponse, number>({
      query: (invoiceRefundId) => ({
        url: `invoice-refunds/${invoiceRefundId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["invoice-refunds", "invoiceReturn", "customers"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetInvoiceRefundsQuery,
  useCreateInvoiceRefundMutation,
  useRemoveInvoiceRefundMutation,
} = invoiceRefundApi;

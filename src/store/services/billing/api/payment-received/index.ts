import {
  BillingPaymentFormType,
  BillingPaymentRow,
  BillingPaymentRowDetails,
} from "@/lib/validators/billing/billing-payment";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const paymentReceivedApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPaymentReceived: build.query<
      { data: BillingPaymentRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `payment-receives?${params}`,
      providesTags: ["payment-receives"],
    }),
    getPaymentReceivedById: build.query<
      { data: BillingPaymentRowDetails },
      number
    >({
      query: (id) => `payment-receives/${id}`,
      providesTags: ["payment-receives"],
    }),
    createPaymentReceived: build.mutation<
      { data: BillingPaymentRow },
      BillingPaymentFormType | FormData
    >({
      query: (newPaymentReceived) => ({
        url: `payment-receives`,
        method: "POST",
        body: newPaymentReceived,
      }),
      invalidatesTags: ["payment-receives", "invoices", "customers"],
    }),
    removePaymentReceived: build.mutation<DeleteResponse, number>({
      query: (paymentReceivedId) => ({
        url: `payment-receives/${paymentReceivedId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["payment-receives", "invoices", "customers"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPaymentReceivedQuery,
  useGetPaymentReceivedByIdQuery,
  useCreatePaymentReceivedMutation,
  useRemovePaymentReceivedMutation,
} = paymentReceivedApi;

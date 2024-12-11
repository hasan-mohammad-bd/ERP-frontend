import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import {
  PaymentReceivedFormType,
  PaymentReceivedRow,
} from "@/lib/validators/billing/payment-received";

const paymentReceivedApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPaymentReceived: build.query<
      { data: PaymentReceivedRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `payment-receives?${params}`,
      providesTags: ["payment-receives"],
    }),
    createPaymentReceived: build.mutation<
      { data: PaymentReceivedRow },
      PaymentReceivedFormType | FormData
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
  useCreatePaymentReceivedMutation,
  useRemovePaymentReceivedMutation,
} = paymentReceivedApi;

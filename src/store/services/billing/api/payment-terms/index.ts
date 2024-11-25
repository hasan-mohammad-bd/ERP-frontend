import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import {
  PaymentTermFormType,
  PaymentTermRow,
} from "@/lib/validators/billing/payment-terms";

const paymentTermsApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPaymentTerms: build.query<
      { data: PaymentTermRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `payment-terms?${params}`,
      providesTags: ["payment-terms"],
    }),
    createPaymentTerm: build.mutation<
      { data: PaymentTermRow },
      PaymentTermFormType
    >({
      query: (newPaymentTerm) => ({
        url: `payment-terms`,
        method: "POST",
        body: newPaymentTerm,
      }),
      invalidatesTags: ["payment-terms"],
    }),
    removePaymentTerm: build.mutation<DeleteResponse, number>({
      query: (paymentTermId) => ({
        url: `payment-terms/${paymentTermId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["payment-terms"],
    }),
    updatePaymentTerm: build.mutation<
      { data: PaymentTermRow },
      { paymentTermId: number; updatedPaymentTerm: PaymentTermFormType }
    >({
      query: ({ paymentTermId, updatedPaymentTerm }) => ({
        url: `payment-terms/${paymentTermId}`,
        method: "PUT",
        body: updatedPaymentTerm,
      }),
      invalidatesTags: ["payment-terms"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPaymentTermsQuery,
  useCreatePaymentTermMutation,
  useUpdatePaymentTermMutation,
  useRemovePaymentTermMutation,
} = paymentTermsApi;

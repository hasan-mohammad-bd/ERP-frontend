import {
  BillingPaymentFormType,
  BillingPaymentRow,
  BillingPaymentRowDetails,
} from "@/lib/validators/billing/billing-payment";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const supplierPaymentApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSupplierPayments: build.query<
      { data: BillingPaymentRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `payment-mades?${params}`,
      providesTags: ["payment-mades"],
    }),
    getSupplierPaymentById: build.query<
      { data: BillingPaymentRowDetails },
      number
    >({
      query: (id) => `payment-mades/${id}`,
      providesTags: ["payment-mades"],
    }),
    createSupplierPayment: build.mutation<
      { data: BillingPaymentRow },
      BillingPaymentFormType | FormData
    >({
      query: (newPaymentReceived) => ({
        url: `payment-mades`,
        method: "POST",
        body: newPaymentReceived,
      }),
      invalidatesTags: ["payment-mades", "purchase", "suppliers"],
    }),
    removeSupplierPayment: build.mutation<DeleteResponse, number>({
      query: (paymentReceivedId) => ({
        url: `payment-mades/${paymentReceivedId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["payment-mades", "purchase", "suppliers"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSupplierPaymentsQuery,
 useGetSupplierPaymentByIdQuery, 
  useCreateSupplierPaymentMutation,
  useRemoveSupplierPaymentMutation,
} = supplierPaymentApi;

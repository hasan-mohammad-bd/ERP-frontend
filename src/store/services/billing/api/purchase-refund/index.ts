import {
  BillingPaymentFormType,
  BillingPaymentRow,
} from "@/lib/validators/billing/billing-payment";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const purchaseRefundApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPurchaseRefunds: build.query<
      { data: BillingPaymentRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `purchase-refunds?${params}`,
      providesTags: ["purchase-refunds"],
    }),
    createPurchaseRefund: build.mutation<
      { data: BillingPaymentRow },
      BillingPaymentFormType | FormData
    >({
      query: (newPurchaseRefund) => ({
        url: `purchase-refunds`,
        method: "POST",
        body: newPurchaseRefund,
      }),
      invalidatesTags: ["purchase-refunds", "purchaseReturn", "suppliers"],
    }),
    removePurchaseRefund: build.mutation<DeleteResponse, number>({
      query: (purchaseRefundId) => ({
        url: `purchase-refunds/${purchaseRefundId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["purchase-refunds", "purchaseReturn", "suppliers"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPurchaseRefundsQuery,
  useCreatePurchaseRefundMutation,
  useRemovePurchaseRefundMutation,
} = purchaseRefundApi;

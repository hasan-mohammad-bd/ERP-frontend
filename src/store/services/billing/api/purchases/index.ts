// import { PurchaseOrderFormDataType, PurchaseOrderRow } from "@/lib/validators/billing/purchase-order";

import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { PurchaseOrderFormValues } from "@/lib/validators/billing/billing-transactions";
import { PurchaseOrderResponse } from "@/lib/validators/billing/billing-responses";

const purchaseApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPurchases: build.query<{ data: PurchaseOrderResponse[]; meta: PaginationInfo }, string>({
      query: (params) => `purchases?${params}`,
      providesTags: ["purchase"],
    }),
    getPurchaseById: build.query<{ data: PurchaseOrderResponse }, number>({
      query: (purchaseId) => `purchases/${purchaseId}`,
      providesTags: ["purchase"],
    }),
    createPurchase: build.mutation<{ data: PurchaseOrderResponse }, PurchaseOrderFormValues>({
      query: (newPurchase) => ({
        url: `purchases`,
        method: "POST",
        body: newPurchase,
      }),
      invalidatesTags: ["purchase"],
    }),
    removePurchase: build.mutation<DeleteResponse, number>({
      query: (purchaseId) => ({
        url: `purchases/${purchaseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["purchase"],
    }),
    updatePurchase: build.mutation<
      { data: PurchaseOrderFormValues },
      { purchaseId: number; updatedPurchase: PurchaseOrderFormValues }
    >({
      query: ({ purchaseId, updatedPurchase }) => ({
        url: `purchases/${purchaseId}`,
        method: "PUT",
        body: updatedPurchase,
      }),
      invalidatesTags: ["purchase"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPurchasesQuery,
  useGetPurchaseByIdQuery,
  useCreatePurchaseMutation,
  useRemovePurchaseMutation,
  useUpdatePurchaseMutation,
} = purchaseApi;
// import { PurchaseOrderFormDataType, PurchaseOrderRow } from "@/lib/validators/billing/purchase-order";

import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { PurchaseFormValues } from "@/lib/validators/billing/billing-transactions";
import { PurchaseResponse } from "@/lib/validators/billing/billing-responses";

const purchaseApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPurchases: build.query<
      { data: PurchaseResponse[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `purchases?${params}`,
      providesTags: ["purchase"],
    }),
    getPurchaseById: build.query<{ data: PurchaseResponse  }, number>({
      query: (purchaseId) => `purchases/${purchaseId}`,
      providesTags: ["purchase"],
    }),
    createPurchase: build.mutation<
      { data: PurchaseResponse },
      PurchaseFormValues
    >({
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
      { data: PurchaseResponse },
      { purchaseId: number; updatedPurchase: PurchaseFormValues }
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

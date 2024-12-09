import { PurchaseOrderFormDataType, PurchaseOrderRow } from "@/lib/validators/billing/purchase-order";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const purchaseApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPurchases: build.query<{ data: PurchaseOrderRow[]; meta: PaginationInfo }, string>({
      query: (params) => `purchases?${params}`,
      providesTags: ["purchase"],
    }),
    getPurchaseById: build.query<{ data: PurchaseOrderRow }, number>({
      query: (purchaseId) => `purchases/${purchaseId}`,
      providesTags: ["purchase"],
    }),
    createPurchase: build.mutation<{ data: PurchaseOrderRow }, PurchaseOrderFormDataType>({
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
      { data: PurchaseOrderRow },
      { purchaseId: number; updatedPurchase: PurchaseOrderFormDataType }
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
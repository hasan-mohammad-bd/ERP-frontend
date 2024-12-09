
import { PurchaseReturnFormData, PurchaseReturnRow } from "@/lib/validators/billing/purchase-return";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const purchaseReturnApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPurchaseReturns: build.query<{ data: PurchaseReturnRow[]; meta: PaginationInfo }, string>({
      query: (params) => `purchase-return?${params}`,
      providesTags: ["purchaseReturn"],
    }),
    getPurchaseReturnById: build.query<{ data: PurchaseReturnRow }, number>({
      query: (purchaseReturnId) => `purchase-return/${purchaseReturnId}`,
      providesTags: ["purchaseReturn"],
    }),
    createPurchaseReturn: build.mutation<{ data: PurchaseReturnRow }, PurchaseReturnFormData>({
      query: (newPurchaseReturn) => ({
        url: `purchase-return`,
        method: "POST",
        body: newPurchaseReturn,
      }),
      invalidatesTags: ["purchaseReturn"],
    }),
    removePurchaseReturn: build.mutation<DeleteResponse, number>({
      query: (purchaseReturnId) => ({
        url: `purchase-return/${purchaseReturnId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["purchaseReturn"],
    }),
    updatePurchaseReturn: build.mutation<
      { data: PurchaseReturnRow },
      { purchaseReturnId: number; updatedPurchaseReturn: PurchaseReturnFormData }
    >({
      query: ({ purchaseReturnId, updatedPurchaseReturn }) => ({
        url: `purchase-return/${purchaseReturnId}`,
        method: "PUT",
        body: updatedPurchaseReturn,
      }),
      invalidatesTags: ["purchaseReturn"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPurchaseReturnsQuery,
  useGetPurchaseReturnByIdQuery,
  useCreatePurchaseReturnMutation,
  useRemovePurchaseReturnMutation,
  useUpdatePurchaseReturnMutation,
} = purchaseReturnApi;

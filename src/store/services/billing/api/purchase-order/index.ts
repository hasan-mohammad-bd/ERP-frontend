
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { PurchaseOrderFormValues } from "@/lib/validators/billing/billing-transactions";
import { PurchaseOrderResponse } from "@/lib/validators/billing/billing-responses";

const purchaseOrderApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPurchaseOrders: build.query<{ data: PurchaseOrderResponse[]; meta: PaginationInfo }, string>({
      query: (params) => `purchase-orders?${params}`,
      providesTags: ["purchaseOrder"],
    }),
    getPurchaseOrderById: build.query<{ data: PurchaseOrderResponse }, number>({
      query: (purchaseOrderId) => `purchase-orders/${purchaseOrderId}`,
      providesTags: ["purchaseOrder"],
    }),
    createPurchaseOrder: build.mutation<{ data: PurchaseOrderResponse }, PurchaseOrderFormValues>({
      query: (newPurchaseOrder) => ({
        url: `purchase-orders`,
        method: "POST",
        body: newPurchaseOrder,
      }),
      invalidatesTags: ["purchaseOrder"],
    }),
    removePurchaseOrder: build.mutation<DeleteResponse, number>({
      query: (purchaseOrderId) => ({
        url: `purchase-orders/${purchaseOrderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["purchaseOrder"],
    }),
    updatePurchaseOrder: build.mutation<
      { data: PurchaseOrderResponse },
      { purchaseOrderId: number; updatedPurchaseOrder: PurchaseOrderFormValues }
    >({
      query: ({ purchaseOrderId, updatedPurchaseOrder }) => ({
        url: `purchase-orders/${purchaseOrderId}`,
        method: "PUT",
        body: updatedPurchaseOrder,
      }),
      invalidatesTags: ["purchaseOrder"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPurchaseOrdersQuery,
  useGetPurchaseOrderByIdQuery,
  useCreatePurchaseOrderMutation,
  useRemovePurchaseOrderMutation,
  useUpdatePurchaseOrderMutation,
} = purchaseOrderApi;

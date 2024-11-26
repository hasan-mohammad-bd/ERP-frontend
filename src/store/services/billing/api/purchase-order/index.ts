
import { PurchaseOrderFormValues, PurchaseOrderRow } from "@/lib/validators/billing/purchase-order";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const purchaseOrderApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getPurchaseOrders: build.query<{ data: PurchaseOrderRow[]; meta: PaginationInfo }, string>({
      query: (params) => `purchase-orders?${params}`,
      providesTags: ["purchaseOrder"],
    }),
    getPurchaseOrderById: build.query<{ data: PurchaseOrderRow }, string>({
      query: (params) => `purchase-orders/${params}`,
      providesTags: ["purchaseOrder"],
    }),
    createPurchaseOrder: build.mutation<{ data: PurchaseOrderRow }, PurchaseOrderFormValues>({
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
      { data: PurchaseOrderRow },
      { purchaseOrderId: number; updatedPurchaseOrder: PurchaseOrderFormValues }
    >({
      query: ({ purchaseOrderId, updatedPurchaseOrder }) => ({
        url: `purchase-orders/${purchaseOrderId}`,
        method: "POST",
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

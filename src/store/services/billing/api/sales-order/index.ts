import { PurchaseOrderRow } from "@/lib/validators/billing/purchase-order";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { SalesOrderFormValues } from "@/lib/validators/billing/billing-transactions";
import { SaleOrderResponse } from "@/lib/validators/billing/billing-responses";

const salesOrderApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSalesOrders: build.query<{ data: []; meta: PaginationInfo }, string>({
      query: (params) => `sales-orders?${params}`,
      providesTags: ["sales-orders"],
    }),
    getSalesOrderById: build.query<{ data: SaleOrderResponse }, number>({
      query: (salesOrderId) => `sales-orders/${salesOrderId}`,
      providesTags: ["sales-order"],
    }),
    createSalesOrder: build.mutation<
      { data: PurchaseOrderRow },
      SalesOrderFormValues
    >({
      query: (newPurchaseOrder) => ({
        url: `sales-orders`,
        method: "POST",
        body: newPurchaseOrder,
      }),
      invalidatesTags: ["sales-orders"],
    }),
    removeSalesOrder: build.mutation<DeleteResponse, number>({
      query: (salesOrderId) => ({
        url: `sales-orders/${salesOrderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["sales-orders"],
    }),
    updateSalesOrder: build.mutation<
      { data: PurchaseOrderRow },
      {
        salesOrderId: number;
        updatedSalesOrder: SalesOrderFormValues;
      }
    >({
      query: ({ salesOrderId, updatedSalesOrder }) => ({
        url: `sales-orders/${salesOrderId}`,
        method: "PUT",
        body: updatedSalesOrder,
      }),
      invalidatesTags: ["sales-orders", "sales-order"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSalesOrdersQuery,
  useGetSalesOrderByIdQuery,
  useCreateSalesOrderMutation,
  useUpdateSalesOrderMutation,
  useRemoveSalesOrderMutation,
} = salesOrderApi;

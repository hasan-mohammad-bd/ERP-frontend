import {
  ExtendedPurchaseOrderRow,
  PurchaseOrderRow,
} from "@/lib/validators/billing/purchase-order";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { SalesOrderFormDataType } from "@/lib/validators/billing/sales-order";

const salesOrderApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSalesOrders: build.query<
      { data: ExtendedPurchaseOrderRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `sales-orders?${params}`,
      providesTags: ["sales-orders"],
    }),
    getSalesOrderById: build.query<{ data: ExtendedPurchaseOrderRow }, number>({
      query: (salesOrderId) => `sales-orders/${salesOrderId}`,
      providesTags: ["sales-orders"],
    }),
    createSalesOrder: build.mutation<
      { data: PurchaseOrderRow },
      SalesOrderFormDataType
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
        updatedSalesOrder: SalesOrderFormDataType;
      }
    >({
      query: ({ salesOrderId, updatedSalesOrder }) => ({
        url: `sales-orders/${salesOrderId}`,
        method: "PUT",
        body: updatedSalesOrder,
      }),
      invalidatesTags: ["sales-orders"],
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

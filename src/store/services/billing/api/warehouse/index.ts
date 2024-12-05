
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { WarehouseFormValues, WarehouseRow } from "@/lib/validators/billing/warehouse";

const warehouseApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getWarehouse: build.query<
      { data: WarehouseRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `warehouses?${params}`,
      providesTags: ["warehouses"],
    }),
    createWarehouse: build.mutation<
      { data: WarehouseRow },
      WarehouseFormValues
    >({
      query: (newWarehouse) => ({
        url: `warehouses`,
        method: "POST",
        body: newWarehouse,
      }),
      invalidatesTags: ["warehouses"],
    }),
    updateWarehouse: build.mutation<
      { data: WarehouseRow },
      { warehouseId: number, updatedWarehouse: WarehouseFormValues }
    >({
      query: ({ warehouseId, updatedWarehouse }) => ({
        url: `warehouses/${warehouseId}`,
        method: "PUT",
        body: updatedWarehouse,
      }),
      invalidatesTags: ["warehouses"],
    }),
    removeWarehouse: build.mutation<DeleteResponse, number>({
      query: (warehouseId) => ({
        url: `warehouses/${warehouseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["warehouses"],
    }),
  }),
  overrideExisting: false,
});

export const {
   useGetWarehouseQuery,
   useLazyGetWarehouseQuery,
   useCreateWarehouseMutation,
   useUpdateWarehouseMutation,
   useRemoveWarehouseMutation
} = warehouseApi;

import { DeleteResponse, PaginationInfo } from "@/types";

import { inventoryApi } from "../..";
import {
  CustomerColumn,
  CustomerFormTypeForAPI,
  CustomerShowType,
} from "@/lib/validators/billing/customer";

const supplierAPI = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getSuppliers: build.query<
      { data: CustomerColumn[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `suppliers?${params}`,
      providesTags: ["suppliers"],
    }),

    getSupplier: build.query<{ data: CustomerShowType }, number>({
      query: (supplier_id) => `suppliers/${supplier_id}`,
      providesTags: ["suppliers"],
    }),

    createSupplier: build.mutation<
      { data: CustomerColumn }, // Adjust the response type if necessary
      CustomerFormTypeForAPI // Expect FormData here as well
    >({
      query: (formData) => ({
        url: `suppliers`,
        method: "POST",
        body: formData, // FormData is sent here
      }),
      invalidatesTags: ["suppliers"],
    }),

    removeSupplier: build.mutation<DeleteResponse, number>({
      query: (supplier_id) => ({
        url: `suppliers/${supplier_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["suppliers"],
    }),
    updateSupplier: build.mutation<
      { data: CustomerColumn },
      { supplier_id: number; updatedCustomer: CustomerFormTypeForAPI }
    >({
      query: ({ supplier_id, updatedCustomer }) => ({
        url: `suppliers/${supplier_id}`,
        method: "PUT",
        body: updatedCustomer,
      }),
      invalidatesTags: ["suppliers"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSuppliersQuery,
  useGetSupplierQuery,
  useCreateSupplierMutation,
  useRemoveSupplierMutation,
  useUpdateSupplierMutation,
} = supplierAPI;

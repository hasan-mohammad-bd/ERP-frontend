import { DeleteResponse, PaginationInfo } from "@/types";

import { inventoryApi } from "../..";
import {
  CustomerColumn,
  CustomerFormTypeForAPI,
  CustomerShowType,
} from "@/lib/validators/billing/customer";

const customerAPI = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getCustomers: build.query<
      { data: CustomerColumn[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `customers?${params}`,
      providesTags: ["customers"],
    }),

    getCustomer: build.query<{ data: CustomerShowType }, number>({
      query: (customer_id) => `customers/${customer_id}`,
      providesTags: ["customers"],
    }),

    createCustomer: build.mutation<
      { data: CustomerColumn }, // Adjust the response type if necessary
      CustomerFormTypeForAPI // Expect FormData here as well
    >({
      query: (formData) => ({
        url: `customers`,
        method: "POST",
        body: formData, // FormData is sent here
      }),
      invalidatesTags: ["customers"],
    }),

    removeCustomer: build.mutation<DeleteResponse, number>({
      query: (customerId) => ({
        url: `customers/${customerId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["customers"],
    }),
    updateCustomer: build.mutation<
      { data: CustomerColumn },
      { customerId: number; updatedCustomer: CustomerFormTypeForAPI }
    >({
      query: ({ customerId, updatedCustomer }) => ({
        url: `customers/${customerId}`,
        method: "PUT",
        body: updatedCustomer,
      }),
      invalidatesTags: ["customers"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCustomersQuery,
  useGetCustomerQuery,
  useCreateCustomerMutation,
  useRemoveCustomerMutation,
  useUpdateCustomerMutation,
} = customerAPI;

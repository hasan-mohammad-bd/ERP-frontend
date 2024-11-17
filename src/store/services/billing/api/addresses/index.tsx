import { DeleteResponse, PaginationInfo } from "@/types";

import { inventoryApi } from "../..";
import {
  AddressColumn,
  AddressTypeApi,
  UpdateAddressTypeApi,
} from "@/lib/validators/billing/customer";

const addressesAPI = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getAddresses: build.query<
      { data: AddressColumn[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `contact-addresses?${params}`,
      providesTags: ["contact-addresses"],
    }),

    createAddress: build.mutation<{ data: AddressColumn }, AddressTypeApi>({
      query: (formData) => ({
        url: `contact-addresses`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["contact-addresses"],
    }),

    updateAddress: build.mutation<
      { data: AddressColumn },
      { addressId: number; updatedAddress: UpdateAddressTypeApi }
    >({
      query: ({ addressId, updatedAddress }) => ({
        url: `contact-addresses/${addressId}`,
        method: "PUT",
        body: updatedAddress,
      }),
      invalidatesTags: ["contact-addresses"],
    }),

    removeAddress: build.mutation<DeleteResponse, number>({
      query: (addressId) => ({
        url: `contact-addresses/${addressId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact-addresses"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAddressesQuery,
  useCreateAddressMutation,
  useUpdateAddressMutation,
  useRemoveAddressMutation,
} = addressesAPI;

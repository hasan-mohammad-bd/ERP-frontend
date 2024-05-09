import {
  AddressFromValues, 
  type AddressColumn, 
} from "@/lib/validators"; 
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const addressApi = hrmApi.injectEndpoints({ 
  endpoints: (build) => ({
    getAddresses: build.query<{ data: AddressColumn[] }, void>({ 
      query: () => "addresses",
      providesTags: ["addresses"], 
    }),
    createAddress: build.mutation<
      { data: AddressColumn }, 
      AddressFromValues 
    >({
      query: (newAddress) => ({
        url: `addresses`, 
        method: "POST",
        body: newAddress,
      }),
      invalidatesTags: ["addresses", "job-candidates"], 
    }),
    removeAddress: build.mutation<DeleteResponse, number>({
      query: (addressId) => ({
        url: `addresses/${addressId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["addresses"], 
    }),
    updateAddress: build.mutation<{ data: AddressColumn }, { addressId: number, updatedAddress: AddressFromValues }>({ 
      query: ({ addressId, updatedAddress }) => ({
        url: `addresses/${addressId}`,
        method: "PUT", 
        body: updatedAddress,
      }),
      invalidatesTags: ["addresses", "job-candidates"], 
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAddressesQuery, 
  useCreateAddressMutation, 
  useRemoveAddressMutation, 
  useUpdateAddressMutation 
} = addressApi; 

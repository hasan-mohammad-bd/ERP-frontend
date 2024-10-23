import {  inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { BrandFormValues, BrandRow } from "@/lib/validators/billing/brand";

const brandApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getBrand: build.query<{ data: BrandRow[]; meta: PaginationInfo }, string>({
      query: (params) => `unit?${params}`,
      providesTags: ["brand"],
    }),
    createBrand: build.mutation<{ data: BrandRow }, BrandFormValues>({
      query: (newBrand) => ({
        url: `brand`,
        method: "POST",
        body: newBrand,
      }),
      invalidatesTags: ["brand"],
    }),
    removeBrand: build.mutation<DeleteResponse, number>({
      query: (brandId) => ({
        url: `brand/${brandId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["brand"],
    }),
    updateBrand: build.mutation<
      { data: BrandRow },
      { brandId: number; updatedBrand: BrandFormValues }
    >({
      query: ({ brandId, updatedBrand }) => ({
        url: `brand/${brandId}`,
        method: "PUT",
        body: updatedBrand,
      }),
      invalidatesTags: ["brand"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBrandQuery,
  useCreateBrandMutation,
  useRemoveBrandMutation,
  useUpdateBrandMutation,
} = brandApi;

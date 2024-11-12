import {  inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import {  BrandRow } from "@/lib/validators/billing/brand";

const brandApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getBrand: build.query<{ data: BrandRow[]; meta: PaginationInfo }, string>({
      query: (params) => `brands?${params}`,
      providesTags: ["brand"],
    }),
    createBrand: build.mutation<{ data: BrandRow }, FormData>({
      query: (newBrand) => ({
        url: `brands`,
        method: "POST",
        body: newBrand,
      }),
      invalidatesTags: ["brand"],
    }),
    removeBrand: build.mutation<DeleteResponse, number>({
      query: (brandId) => ({
        url: `brands/${brandId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["brand"],
    }),
    updateBrand: build.mutation<
      { data: BrandRow },
      { brandId: number; updatedBrand: FormData }
    >({
      query: ({ brandId, updatedBrand }) => ({
        url: `brands/${brandId}`,
        method: "POST",
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

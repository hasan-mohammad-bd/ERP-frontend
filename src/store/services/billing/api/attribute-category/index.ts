import { AttributeCategoryFormValues, AttributeCategoryRow } from "@/lib/validators/billing/attribute-category";
import { inventoryApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";


const attributeCategoryApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getAttributeCategories: build.query<
      { data: AttributeCategoryRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `attribute-categories?${params}`,
      providesTags: ["attribute-categories"],
    }),
    createAttributeCategory: build.mutation<
      { data: AttributeCategoryRow },
      AttributeCategoryFormValues
    >({
      query: (newAttributeCategory) => ({
        url: `attribute-categories`,
        method: "POST",
        body: newAttributeCategory,
      }),
      invalidatesTags: ["attribute-categories"],
    }),
    updateAttributeCategory: build.mutation<
      { data: AttributeCategoryRow },
      { attributeCategoryId: number, updatedAttributeCategory: AttributeCategoryFormValues }
    >({
      query: ({ attributeCategoryId, updatedAttributeCategory }) => ({
        url: `attribute-categories/${attributeCategoryId}`,
        method: "PUT",
        body: updatedAttributeCategory,
      }),
      invalidatesTags: ["attribute-categories"],
    }),
    removeAttributeCategory: build.mutation<DeleteResponse, number>({
      query: (attributeCategoryId) => ({
        url: `attribute-categories/${attributeCategoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["attribute-categories"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAttributeCategoriesQuery,
  useLazyGetAttributeCategoriesQuery,
  useCreateAttributeCategoryMutation,
  useUpdateAttributeCategoryMutation,
  useRemoveAttributeCategoryMutation
} = attributeCategoryApi;

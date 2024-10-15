
import { billingApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

import { CategoryFormValues, CategoryRow } from "@/lib/validators/billing/category";

const categoryApi = billingApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<
      { data: CategoryRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `category?${params}`,
      providesTags: ["category"],
    }),
    createCategory: build.mutation<
      { data: CategoryRow },
      CategoryFormValues
    >({
      query: (newCategory) => ({
        url: `category`,
        method: "POST",
        body: newCategory,
      }),
      invalidatesTags: ["category"],
    }),
    removeCategory: build.mutation<DeleteResponse, number>({
      query: (categoryId) => ({
        url: `category/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: build.mutation<
      { data: CategoryRow },
      { categoryId: number, updatedCategory: CategoryFormValues }
    >({
      query: ({ categoryId, updatedCategory }) => ({
        url: `category/${categoryId}`,
        method: "PUT",
        body: updatedCategory,
      }),
      invalidatesTags: ["category"],
    }),
  }),
  overrideExisting: false,
});

export const {
 useGetCategoryQuery,
 useCreateCategoryMutation,
 useRemoveCategoryMutation,
 useUpdateCategoryMutation


} = categoryApi;

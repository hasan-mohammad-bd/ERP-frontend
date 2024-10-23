import { DeleteResponse, PaginationInfo } from "@/types";

import {
  CategoryFormValues,
  CategoryRow,
} from "@/lib/validators/billing/category";
import { inventoryApi } from "../..";

const categoryApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<
      { data: CategoryFormValues[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `categories?${params}`,
      providesTags: ["category"],
    }),

    createCategory: build.mutation<
      { data: CategoryRow }, // Adjust the response type if necessary
      FormData // Expect FormData here as well
    >({
      query: (formData) => ({
        url: `categories`,
        method: "POST",
        body: formData, // FormData is sent here
      }),
      invalidatesTags: ["category"],
    }),

    removeCategory: build.mutation<DeleteResponse, number>({
      query: (categoryId) => ({
        url: `categories/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
    updateCategory: build.mutation<
      { data: CategoryRow },
      { categoryId: number; updatedCategory: FormData }
    >({
      query: ({ categoryId, updatedCategory }) => ({
        url: `categories/${categoryId}`,
        method: "POST",
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
  useUpdateCategoryMutation,
} = categoryApi;

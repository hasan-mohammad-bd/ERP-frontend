import { DeleteResponse, PaginationInfo } from "@/types";

import {
  CategoryFormValues,
  CategoryRow,
} from "@/lib/validators/billing/category";
import { inventoryApi } from "../..";

const ExpensesCategoryApi = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getExpensesCategory: build.query<
      { data: CategoryFormValues[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `expense-categories?${params}`,
      providesTags: ["expenses-category"],
    }),

    createExpensesCategory: build.mutation<
      { data: CategoryRow }, // Adjust the response type if necessary
      FormData // Expect FormData here as well
    >({
      query: (formData) => ({
        url: `expense-categories`,
        method: "POST",
        body: formData, // FormData is sent here
      }),
      invalidatesTags: ["expenses-category"],
    }),

    removeExpensesCategory: build.mutation<DeleteResponse, number>({
      query: (expensesCategoryId) => ({
        url: `expense-categories/${expensesCategoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["expenses-category"],
    }),
    updateExpensesCategory: build.mutation<
      { data: CategoryRow },
      { expensesCategoryId: number; updatedExpensesCategory: FormData }
    >({
      query: ({ expensesCategoryId, updatedExpensesCategory }) => ({
        url: `expense-categories/${expensesCategoryId}`,
        method: "POST",
        body: updatedExpensesCategory,
      }),
      invalidatesTags: ["expenses-category"],
    }),
  }),
  overrideExisting: false,
});

export const {

 useGetExpensesCategoryQuery,
 useCreateExpensesCategoryMutation,
 useRemoveExpensesCategoryMutation,
 useUpdateExpensesCategoryMutation,
} = ExpensesCategoryApi;

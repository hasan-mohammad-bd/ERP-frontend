import { DeleteResponse, PaginationInfo } from "@/types";
import { inventoryApi } from "../..";
import {
  Expense,
  ExpensesFormValuesAPI,
} from "@/lib/validators/billing/expenses";

const ExpensesAPI = inventoryApi.injectEndpoints({
  endpoints: (build) => ({
    getExpenses: build.query<{ data: Expense[]; meta: PaginationInfo }, string>(
      {
        query: (params) => `expenses?${params}`,
        providesTags: ["expenses"],
      }
    ),
    getExpense: build.query<{ data: Expense }, number>({
      query: (expenseId) => `expenses/${expenseId}`,
      providesTags: ["expenses"],
    }),

    createExpense: build.mutation<
      { data: Expense },
      ExpensesFormValuesAPI | FormData
    >({
      query: (formData) => ({
        url: `expenses`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["expenses"],
    }),

    removeExpense: build.mutation<DeleteResponse, number>({
      query: (expenseId) => ({
        url: `expenses/${expenseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["expenses"],
    }),
    updateExpense: build.mutation<
      { data: Expense },
      {
        expenseId: number;
        updatedExpense: ExpensesFormValuesAPI | FormData;
      }
    >({
      query: ({ expenseId, updatedExpense }) => ({
        url: `expenses/${expenseId}`,
        method: "PUT",
        body: updatedExpense,
      }),
      invalidatesTags: ["expenses"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetExpensesQuery,
  useGetExpenseQuery,
  useCreateExpenseMutation,
  useRemoveExpenseMutation,
  useUpdateExpenseMutation,
} = ExpensesAPI;

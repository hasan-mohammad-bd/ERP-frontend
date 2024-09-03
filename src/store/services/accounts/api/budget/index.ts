// import {
//   OpeningBalanceFromValues,
//   OpeningBalanceRow,
// } from "@/lib/validators/accounts/opening-balance";
import { BudgetFromValues, BudgetRow } from "@/lib/validators/accounts/budget";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const budgetsApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getBudgets: build.query<
      { data: BudgetRow[]; meta: PaginationInfo },
      string
    >({
      query: () => `budgets`,

      providesTags: ["budgets"],
    }),
    getBudgetById: build.query<
      { data: BudgetRow; meta: PaginationInfo },
      string
    >({
      query: (params) => `budgets/${params}`,

      providesTags: ["budgets"],
    }),
    createBudget: build.mutation<
      { data: BudgetRow },
      BudgetFromValues
    >({
      query: (newBudget) => ({
        url: `budgets`,
        method: "POST",
        body: newBudget,
      }),
      invalidatesTags: ["budgets"],
    }),
    removeBudget: build.mutation<DeleteResponse, number>({
      query: (budgetId) => ({
        url: `budgets/${budgetId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["budgets"],
    }),
    updateBudget: build.mutation<
      { data: BudgetRow },
      { budgetId: number; updatedBudget: BudgetFromValues }
    >({
      query: ({ budgetId, updatedBudget }) => ({
        url: `budgets/${budgetId}`,
        method: "PUT",
        body: updatedBudget,
      }),
      invalidatesTags: ["budgets"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBudgetsQuery,
  useGetBudgetByIdQuery,
  useCreateBudgetMutation,
  useRemoveBudgetMutation,
  useUpdateBudgetMutation,
} = budgetsApi;

import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { LoanRow, LoanFormValues } from "@/lib/validators/hrm/loan";

const loanApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLoans: build.query<{ data: LoanRow[]; meta: PaginationInfo }, string>({
      query: (params) => `loan?${params}`,
      providesTags: ["loans"],
    }),
    getLoanById: build.query<{ data: LoanRow }, string>({
      query: (params) => `loan/${params}`,
      providesTags: ["loans"],
    }),
    createLoan: build.mutation<{ data: LoanRow }, LoanFormValues>({
      query: (newLoan) => ({
        url: `loan`,
        method: "POST",
        body: newLoan,
      }),
      invalidatesTags: ["loans"],
    }),
    removeLoan: build.mutation<DeleteResponse, number>({
      query: (loanId) => ({
        url: `loan/${loanId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["loans"],
    }),
    updateLoan: build.mutation<
      { data: LoanRow },
      { loanId: number; updatedLoan: LoanFormValues }
    >({
      query: ({ loanId, updatedLoan }) => ({
        url: `loan/${loanId}`,
        method: "PUT",
        body: updatedLoan,
      }),
      invalidatesTags: ["loans"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLoansQuery,
  useGetLoanByIdQuery,
  useLazyGetLoansQuery,
  useCreateLoanMutation,
  useRemoveLoanMutation,
  useUpdateLoanMutation,
} = loanApi;

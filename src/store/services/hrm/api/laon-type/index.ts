import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { LoanTypeColumn, LoanTypeFromValues } from "@/lib/validators/hrm/loan-type";

const loanTypeApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLoanType: build.query<
    { data: LoanTypeColumn[]; meta: PaginationInfo },
    string
  >({ 
      query: (params) => `loan-types?${params}`, 
      providesTags: ["loan-types"], 
    }),
    createLoanType: build.mutation<
      { data: LoanTypeColumn },
      LoanTypeFromValues
    >({
      query: (newLoanType) => ({
        url: `loan-types`,
        method: "POST",
        body: newLoanType,
      }),
      invalidatesTags: ["loan-types"], 
    }),
    removeLoanType: build.mutation<DeleteResponse, number>({
      query: (loanTypeId) => ({
        url: `loan-types/${loanTypeId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["loan-types"], 
    }),
    updateLoanType: build.mutation<{ data: LoanTypeColumn }, { loanTypeId: number, updatedLoanType: LoanTypeFromValues }>({
      query: ({ loanTypeId, updatedLoanType }) => ({
        url: `loan-types/${loanTypeId}`, 
        method: "PUT", 
        body: updatedLoanType,
      }),
      invalidatesTags: ["loan-types"],
    }),
  }),
  overrideExisting: false,
});

export const {
    useGetLoanTypeQuery,
    useCreateLoanTypeMutation,
    useRemoveLoanTypeMutation,
    useUpdateLoanTypeMutation
} = loanTypeApi;

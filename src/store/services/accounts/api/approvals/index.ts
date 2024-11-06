import { accountApi } from "../..";
import { PaginationInfo } from "@/types";
import { ApprovalRequestRow } from "./types";
import { ApprovalBulkUpdateFormValues } from "@/lib/validators/approvals";

const approvalsApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getAccountsApprovals: build.query<
      { data: ApprovalRequestRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `approvals?${params}`,
      providesTags: ["accounts-approvals"],
    }),
    changeBulkApprovalStatus: build.mutation<
      { data: ApprovalRequestRow[] },
      ApprovalBulkUpdateFormValues
    >({
      query: (payload) => ({
        url: `approvals`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["accounts-approvals"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAccountsApprovalsQuery,
  useLazyGetAccountsApprovalsQuery,
  useChangeBulkApprovalStatusMutation,
} = approvalsApi;

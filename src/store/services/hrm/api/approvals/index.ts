import { PaginationInfo } from "@/types";
import { ApprovalRequestRow } from "./types";
import { ApprovalBulkUpdateFormValues } from "@/lib/validators/approvals";
import { hrmApi } from "../..";

const approvalsApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    get_HRM_Approvals: build.query<
      { data: ApprovalRequestRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `approvals?${params}`,
      providesTags: ["hrm-approvals"],
    }),
    change_HRM_BulkApprovalStatus: build.mutation<
      { data: ApprovalRequestRow[] },
      ApprovalBulkUpdateFormValues
    >({
      query: (payload) => ({
        url: `approvals`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["hrm-approvals"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGet_HRM_ApprovalsQuery,
  useLazyGet_HRM_ApprovalsQuery,
  useChange_HRM_BulkApprovalStatusMutation,
} = approvalsApi;

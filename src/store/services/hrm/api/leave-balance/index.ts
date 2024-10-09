import { LeaveBalanceColumn } from "@/lib/validators/hrm/leave-balance";
import { hrmApi } from "../..";
import { PaginationInfo } from "@/types";

const leaveGroupApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveBalance: build.query<
      { data: LeaveBalanceColumn[]; meta: PaginationInfo },
      { page: number; per_page: number } // Accept page and per_page as params
    >({
      query: ({ page, per_page }) => ({
        url: `leave-reports/balance`,
        params: {
          page,
          per_page,
        },
      }),
      providesTags: ["leave-balance"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetLeaveBalanceQuery } = leaveGroupApi;

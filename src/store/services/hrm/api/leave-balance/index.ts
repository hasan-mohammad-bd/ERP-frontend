import { LeaveBalanceColumn } from "@/lib/validators/hrm/leave-balance";
import { hrmApi } from "../..";
import { PaginationInfo } from "@/types";

const leaveGroupApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveBalance: build.query<
      { data: LeaveBalanceColumn[]; meta: PaginationInfo },
      string 
    >({
      query: (params) => `leave-reports/balance?${params}`,
      providesTags: ["leave-balance"],
    }),
   

  }),
  overrideExisting: false,
});

export const { useGetLeaveBalanceQuery } = leaveGroupApi;

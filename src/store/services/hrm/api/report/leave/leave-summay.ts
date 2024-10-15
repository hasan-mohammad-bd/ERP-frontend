import { LeaveSummaryRow, LeaveTypeSummaryRow } from "@/lib/validators/hrm/report/leave/leave-summary";
import { hrmApi } from "../../..";
import { PaginationInfo } from "@/types";



const leaveSummaryApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveSummary: build.query<
      { data: LeaveSummaryRow[]; meta: PaginationInfo; leaves_type_summary: LeaveTypeSummaryRow[]  },
      string
    >({
      query: (params) => `leave-reports/summary?${params}`,
      providesTags: ["leave-summary"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeaveSummaryQuery,
} = leaveSummaryApi; 

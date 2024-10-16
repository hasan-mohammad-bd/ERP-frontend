
import { LeaveUsagesRow } from "@/lib/validators/hrm/report/leave/leave-usages";
import { hrmApi } from "../../..";
import { PaginationInfo } from "@/types";

const leaveUsageApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveUsage: build.query<
      { data: LeaveUsagesRow[]; meta: PaginationInfo;  },
      string
    >({
      query: (params) => `leave-reports/usages?${params}`,  
      providesTags: ["leave-usage"], 
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeaveUsageQuery,  
} = leaveUsageApi;

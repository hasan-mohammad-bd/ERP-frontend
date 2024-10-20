import { hrmApi } from "../..";
import { PaginationInfo } from "@/types";
import { LeaveTreadType } from "./type";
// import { LeaveTrendColumn } from "@/lib/validators/hrm/report/leave/leave-trend";

const leaveTrendApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveTrend: build.query<
      { data: LeaveTreadType[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `leave-reports/trend?${params}`,
      providesTags: ["leave-trend"],
    }),
   

  }),
  overrideExisting: false,
});

export const { useGetLeaveTrendQuery } = leaveTrendApi;

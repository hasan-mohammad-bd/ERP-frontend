import { hrmApi } from "../..";
import { PaginationInfo } from "@/types";
import {LeaveTypeSummary } from "./type";

const leaveTypeSummaryApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveTypeSummary: build.query<
      { data: LeaveTypeSummary[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `leave-reports/type-summary?${params}`,
      providesTags: ["leave-type-summary"],
    }),


  }),
  overrideExisting: false,
});

export const { useGetLeaveTypeSummaryQuery } = leaveTypeSummaryApi;

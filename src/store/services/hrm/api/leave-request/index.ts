import {  LeaveRequestRow } from "@/lib/validators/hrm/leave";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const leaveRequestApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveRequests: build.query<
      { data: LeaveRequestRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `leaves?${params}`,
      providesTags: ["leaves"],
    }),
    createLeaveRequest: build.mutation<
      { data: LeaveRequestRow },
      FormData
    >({
      query: (newLeaveRequest) => ({
        url: `leaves`,
        method: "POST",
        body: newLeaveRequest,
      }),
      invalidatesTags: ["leaves"],
    }),
    removeLeaveRequest: build.mutation<DeleteResponse, number>({
      query: (leaveRequestId) => ({
        url: `leaves/${leaveRequestId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["leaves"],
    }),
    updateLeaveRequest: build.mutation<
      { data: LeaveRequestRow },
      { leaveRequestId: number, updatedLeaveRequest: FormData }
    >({
      query: ({ leaveRequestId, updatedLeaveRequest }) => ({
        url: `leaves/${leaveRequestId}`,
        method: "POST",
        body: updatedLeaveRequest,
      }),
      invalidatesTags: ["leaves"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeaveRequestsQuery,
  useCreateLeaveRequestMutation,
  useRemoveLeaveRequestMutation,
  useUpdateLeaveRequestMutation,
} = leaveRequestApi;

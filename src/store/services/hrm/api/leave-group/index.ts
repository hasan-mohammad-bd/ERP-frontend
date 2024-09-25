
import { LeaveGroupFormValues, LeaveGroupRow } from "@/lib/validators/hrm/leave";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const leaveGroupApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveGroups: build.query<
      { data: LeaveGroupRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `leave-groups?${params}`,
      providesTags: ["leave-groups"],
    }),
    createLeaveGroup: build.mutation<
      { data: LeaveGroupRow },
      LeaveGroupFormValues
    >({
      query: (newLeaveGroup) => ({
        url: `leave-groups`,
        method: "POST",
        body: newLeaveGroup,
      }),
      invalidatesTags: ["leave-groups"],
    }),
    removeLeaveGroup: build.mutation<DeleteResponse, number>({
      query: (leaveGroupId) => ({
        url: `leave-groups/${leaveGroupId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["leave-groups"],
    }),
    updateLeaveGroup: build.mutation<
      { data: LeaveGroupRow },
      { leaveGroupId: number, updatedLeaveGroup: LeaveGroupFormValues }
    >({
      query: ({ leaveGroupId, updatedLeaveGroup }) => ({
        url: `leave-groups/${leaveGroupId}`,
        method: "PUT",
        body: updatedLeaveGroup,
      }),
      invalidatesTags: ["leave-groups"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeaveGroupsQuery,
  useCreateLeaveGroupMutation,
  useRemoveLeaveGroupMutation,
  useUpdateLeaveGroupMutation,
} = leaveGroupApi;


import { LeaveTypeFormValues, LeaveTypeRow } from "@/lib/validators/hrm/leave";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const leaveTypeApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaveTypes: build.query<
      { data: LeaveTypeRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `leave-types?${params}`,
      providesTags: ["leave-types"],
    }),
    createLeaveType: build.mutation<
      { data: LeaveTypeRow },
      LeaveTypeFormValues
    >({
      query: (newLeaveType) => ({
        url: `leave-types`,
        method: "POST",
        body: newLeaveType,
      }),
      invalidatesTags: ["leave-types"],
    }),
    removeLeaveType: build.mutation<DeleteResponse, number>({
      query: (leaveTypeId) => ({
        url: `leave-types/${leaveTypeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["leave-types"],
    }),
    updateLeaveType: build.mutation<
      { data: LeaveTypeRow },
      { leaveTypeId: number, updatedLeaveType: LeaveTypeFormValues }
    >({
      query: ({ leaveTypeId, updatedLeaveType }) => ({
        url: `leave-types/${leaveTypeId}`,
        method: "PUT",
        body: updatedLeaveType,
      }),
      invalidatesTags: ["leave-types"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeaveTypesQuery,
  useCreateLeaveTypeMutation,
  useRemoveLeaveTypeMutation,
  useUpdateLeaveTypeMutation,
} = leaveTypeApi;

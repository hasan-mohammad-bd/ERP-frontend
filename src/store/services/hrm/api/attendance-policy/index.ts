
import { AttendancePolicyFormValues, AttendancePolicyRow } from "@/lib/validators/hrm/attendance.vatidator";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const attendancePolicyApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getAttendancePolicies: build.query<
      { data: AttendancePolicyRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `attendance-policy?${params}`, 
      providesTags: ["attendance-policy"], 
    }),
    createAttendancePolicy: build.mutation<
      { data: AttendancePolicyRow },
      AttendancePolicyFormValues
    >({
      query: (newAttendancePolicy) => ({
        url: `attendance-policy`,
        method: "POST",
        body: newAttendancePolicy,
      }),
      invalidatesTags: ["attendance-policy"], 
    }),
    removeAttendancePolicy: build.mutation<DeleteResponse, number>({
      query: (attendancePolicyId) => ({
        url: `attendance-policy/${attendancePolicyId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["attendance-policy"], 
    }),
    updateAttendancePolicy: build.mutation<
      { data: AttendancePolicyRow },
      { attendancePolicyId: number, updatedAttendancePolicy: AttendancePolicyFormValues }
    >({
      query: ({ attendancePolicyId, updatedAttendancePolicy }) => ({
        url: `attendance-policy/${attendancePolicyId}`, 
        method: "PUT", 
        body: updatedAttendancePolicy,
      }),
      invalidatesTags: ["attendance-policy"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAttendancePoliciesQuery, 
  useCreateAttendancePolicyMutation, 
  useRemoveAttendancePolicyMutation, 
  useUpdateAttendancePolicyMutation 
} = attendancePolicyApi;


import { EmployeeAttendancePolicyFormValues, EmployeeAttendancePolicyRow } from "@/lib/validators/hrm/attendance-policy-mapping";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const employeeAttendancePolicyApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeAttendancePolicies: build.query<
      { data: EmployeeAttendancePolicyRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `employee-attendance-policies?${params}`, 
      providesTags: ["employee-attendance-policies"], 
    }),
    createEmployeeAttendancePolicy: build.mutation<
      { data: EmployeeAttendancePolicyRow },
    EmployeeAttendancePolicyFormValues
    >({
      query: (newAttendancePolicy) => ({
        url: `employee-attendance-policies`, 
        method: "POST",
        body: newAttendancePolicy,
      }),
      invalidatesTags: ["employee-attendance-policies"], 
    }),
    removeEmployeeAttendancePolicy: build.mutation<DeleteResponse, number>({
      query: (attendancePolicyId) => ({
        url: `employee-attendance-policies/${attendancePolicyId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["employee-attendance-policies"], 
    }),
    updateEmployeeAttendancePolicy: build.mutation<
      { data: EmployeeAttendancePolicyRow },
      { attendancePolicyId: number; updatedAttendancePolicy: EmployeeAttendancePolicyFormValues }
    >({
      query: ({ attendancePolicyId, updatedAttendancePolicy }) => ({
        url: `employee-attendance-policies/${attendancePolicyId}`, 
        method: "PUT",
        body: updatedAttendancePolicy,
      }),
      invalidatesTags: ["employee-attendance-policies"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEmployeeAttendancePoliciesQuery, 
  useCreateEmployeeAttendancePolicyMutation, 
  useRemoveEmployeeAttendancePolicyMutation, 
  useUpdateEmployeeAttendancePolicyMutation 
} = employeeAttendancePolicyApi;

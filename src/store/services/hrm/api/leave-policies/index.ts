import {
  leavePolicyFormData,
  leavePolicyType,
} from "@/lib/validators/hrm/leave-policy";
import { hrmApi } from "../..";
const leavePolicyApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeavePolicies: build.query<{ data: leavePolicyType }, void>({
      query: () => `leave-policies`,
      providesTags: ["leave-policies"],
    }),
    updateLeavePolicy: build.mutation<
      { data: leavePolicyFormData },
      {
        updateLeavePolicyFormData: leavePolicyFormData;
      }
    >({
      query: ({ updateLeavePolicyFormData }) => ({
        url: `leave-policies`,
        method: "POST",
        body: updateLeavePolicyFormData,
      }),
      invalidatesTags: ["leave-policies"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetLeavePoliciesQuery, useUpdateLeavePolicyMutation } =
  leavePolicyApi;

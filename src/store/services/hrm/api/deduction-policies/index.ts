import { hrmApi } from "../..";
import {
  DeductionPolicyFormData,
  DeductionPolicyWithoutData,
} from "@/lib/validators/hrm/deduction-policy";

const deductionPolicyApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getDeductionPolicies: build.query<
      { data: DeductionPolicyWithoutData },
      void
    >({
      query: () => `deduction-policies`,
      providesTags: ["deduction-policies"],
    }),
    updateDeductionPolicy: build.mutation<
      { data: DeductionPolicyWithoutData },
      {
        updateDeductionPolicyFormData: DeductionPolicyFormData;
      }
    >({
      query: ({ updateDeductionPolicyFormData }) => ({
        url: `deduction-policies`,
        method: "POST",
        body: updateDeductionPolicyFormData,
      }),
      invalidatesTags: ["deduction-policies"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetDeductionPoliciesQuery,
  useUpdateDeductionPolicyMutation,
} = deductionPolicyApi;

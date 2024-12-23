import { crmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { LeadActivityTypes, LeadActivityRow } from "./type";
import { LeadActivityFormValues } from "@/lib/validators/crm/lead-activities";

const leadActivityApi = crmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeadActivities: build.query<{ data: LeadActivityRow[]; meta: PaginationInfo }, string>({
      query: (params) => `lead-activities?${params}`,
      providesTags: ["lead-activities"],
    }),
    getLeadActivityById: build.query<{ data: LeadActivityTypes }, string>({
      query: (leadActivityId) => `lead-activities/${leadActivityId}`,
      providesTags: ["lead"],
    }),
    createLeadActivity: build.mutation<{ data: LeadActivityRow }, LeadActivityFormValues>({
      query: (newLeadActivity) => ({
        url: `lead-activities`,
        method: "POST",
        body: newLeadActivity,
      }),
      invalidatesTags: ["lead-activities", "lead"],
    }),
    updateLeadActivity: build.mutation<
      { data: LeadActivityRow },
      { leadActivityId: number; updatedLeadActivity: LeadActivityFormValues }
    >({
      query: ({ leadActivityId, updatedLeadActivity }) => ({
        url: `lead-activities/${leadActivityId}`,
        method: "PUT",
        body: updatedLeadActivity,
      }),
      invalidatesTags: ["lead-activities", "lead"],
    }),
    removeLeadActivity: build.mutation<DeleteResponse, number>({
      query: (leadActivityId) => ({
        url: `lead-activities/${leadActivityId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["lead-activities", "lead"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeadActivitiesQuery,
  useGetLeadActivityByIdQuery,
  useLazyGetLeadActivityByIdQuery,
  useCreateLeadActivityMutation,
  useRemoveLeadActivityMutation,
  useUpdateLeadActivityMutation,
} = leadActivityApi;

import { crmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { LeadDetailsType, LeadRow } from "./type";
import { LeadFormValues } from "@/lib/validators/crm/lead";

const leadApi = crmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeads: build.query<{ data: LeadRow[]; meta: PaginationInfo }, string>({
      query: (params) => `leads?${params}`,
      providesTags: ["leads"],
    }),
    getLeadById: build.query<{ data: LeadDetailsType }, string>({
      query: (leadId) => `leads/${leadId}`,
      providesTags: ["lead"],
    }),
    createLead: build.mutation<{ data: LeadRow }, LeadFormValues>({
      query: (newLead) => ({
        url: `leads`,
        method: "POST",
        body: newLead,
      }),
      invalidatesTags: ["leads", "lead"],
    }),
    updateLead: build.mutation<
      { data: LeadRow },
      { leadId: number; updatedLead: LeadFormValues }
    >({
      query: ({ leadId, updatedLead }) => ({
        url: `leads/${leadId}`,
        method: "PUT",
        body: updatedLead,
      }),
      invalidatesTags: ["leads", "lead"],
    }),
    removeLead: build.mutation<DeleteResponse, number>({
      query: (leadId) => ({
        url: `leads/${leadId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["leads", "lead"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeadsQuery,
  useGetLeadByIdQuery,
  useLazyGetLeadByIdQuery,
  useCreateLeadMutation,
  useRemoveLeadMutation,
  useUpdateLeadMutation,
} = leadApi;

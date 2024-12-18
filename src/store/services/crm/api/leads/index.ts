// import { crmApi } from "../..";
// import { PaginationInfo } from "@/types";
// import { LeadRow } from "./type";

// const leadsApi = crmApi.injectEndpoints({
//   endpoints: (build) => ({
//     getLeads: build.query<{ data: LeadRow[]; meta: PaginationInfo }, string>({
//       query: (params) => `leads?${params}`,
//       providesTags: ["leads"],
//     }),
//   }),
//   overrideExisting: false,
// });

// export const { useGetLeadsQuery, useLazyGetLeadsQuery } = leadsApi;
import { crmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { LeadRow } from "./type";
import { LeadFormValues } from "@/lib/validators/crm/lead";

const leadApi = crmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeads: build.query<
      { data: LeadRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `leads?${params}`,
      providesTags: ["leads"],
    }),
    getLeadById: build.query<{ data: LeadRow }, number>({
      query: (leadId) => `leads/${leadId}`,
      providesTags: ["leads"],
    }),
    createLead: build.mutation<
      { data: LeadRow },
      LeadFormValues
    >({
      query: (newLead) => ({
        url: `leads`,
        method: "POST",
        body: newLead,
      }),
      invalidatesTags: ["leads"],
    }),
    removeLead: build.mutation<DeleteResponse, number>({
      query: (leadId) => ({
        url: `leads/${leadId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["leads"],
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
      invalidatesTags: ["leads"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeadsQuery,
  useGetLeadByIdQuery,
  useCreateLeadMutation,
  useRemoveLeadMutation,
  useUpdateLeadMutation,
} = leadApi;


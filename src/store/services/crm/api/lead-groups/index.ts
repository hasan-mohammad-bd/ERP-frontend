
import { crmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";
import { LeadGroupFormValues, LeadGroupRow } from "@/lib/validators/crm/lead-groups";

const leadGroupApi = crmApi.injectEndpoints({
  endpoints: (build) => ({
    getLeadGroups: build.query<
      { data: LeadGroupRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `lead-groups?${params}`,
      providesTags: ["lead-groups"],
    }),
    createLeadGroup: build.mutation<
      { data: LeadGroupRow },
      LeadGroupFormValues
    >({
      query: (newLeadGroup) => ({
        url: `lead-groups`,
        method: "POST",
        body: newLeadGroup,
      }),
      invalidatesTags: ["lead-groups"],
    }),
    updateLeadGroup: build.mutation<
      { data: LeadGroupRow },
      { leadGroupId: number, updatedLeadGroup: LeadGroupFormValues }
    >({
      query: ({ leadGroupId, updatedLeadGroup }) => ({
        url: `lead-groups/${leadGroupId}`,
        method: "PUT",
        body: updatedLeadGroup,
      }),
      invalidatesTags: ["lead-groups"],
    }),
    removeLeadGroup: build.mutation<DeleteResponse, number>({
      query: (leadGroupId) => ({
        url: `lead-groups/${leadGroupId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["lead-groups"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLeadGroupsQuery,
  useLazyGetLeadGroupsQuery,
  useCreateLeadGroupMutation,
  useUpdateLeadGroupMutation,
  useRemoveLeadGroupMutation

} = leadGroupApi;

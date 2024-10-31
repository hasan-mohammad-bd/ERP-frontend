import {
  ApprovalGroupFormValues,
  ApprovalGroupRow,
  DetailsApprovalGroupRow,
} from "@/lib/validators/web/approval-group";
import { authApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const approvalGroupApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getApprovalGroups: build.query<
      { data: ApprovalGroupRow[]; meta: PaginationInfo },
      string
    >({
      query: (params) => `setting/approval-groups?${params}`,
      providesTags: ["approval-groups"],
    }),

    //catalog
    getCatalog: build.query<
      { "approval-type": {id: number; name: string}[]; },
      string
    >({
      query: (params) => `catalog?${params}`,
      providesTags: ["approval-groups"],
    }),

    getApprovalGroupById: build.query<{data: DetailsApprovalGroupRow}, string>({
      query: (params) => `setting/approval-groups/${params}`,
      providesTags: ["approval-groups"],
    }),
    createApprovalGroup: build.mutation<
      { data: ApprovalGroupRow },
      ApprovalGroupFormValues
    >({
      query: (newApprovalGroup) => ({
        url: `setting/approval-groups`,
        method: "POST",
        body: newApprovalGroup,
      }),
      invalidatesTags: ["approval-groups"],
    }),
    removeApprovalGroup: build.mutation<DeleteResponse, number>({
      query: (approvalGroupId) => ({
        url: `setting/approval-groups/${approvalGroupId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["approval-groups"],
    }),
    updateApprovalGroup: build.mutation<
      { data: ApprovalGroupRow },
      { approvalGroupId: number; updatedApprovalGroup: ApprovalGroupFormValues }
    >({
      query: ({ approvalGroupId, updatedApprovalGroup }) => ({
        url: `setting/approval-groups/${approvalGroupId}`,
        method: "PUT",
        body: updatedApprovalGroup,
      }),
      invalidatesTags: ["approval-groups"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetApprovalGroupsQuery,
  useGetCatalogQuery,
  useGetApprovalGroupByIdQuery,
  useCreateApprovalGroupMutation,
  useRemoveApprovalGroupMutation,
  useUpdateApprovalGroupMutation,
} = approvalGroupApi;

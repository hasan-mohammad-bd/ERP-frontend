import {
  LedgerGroupArrayColumn,
  LedgerGroupFromValues,
  type LedgerGroupColumn,
} from "@/lib/validators";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const ledgerGroupApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getLedgerGroups: build.query<
      { data: LedgerGroupColumn[]; meta: PaginationInfo },
      string | void
    >({
      query: () => `ledger-groups?tree=1`,
      providesTags: ["ledger-groups-tree"],
    }),
    getLedgerGroupsArray: build.query<
      { data: LedgerGroupArrayColumn[]; meta: PaginationInfo },
      string | void
    >({
      query: () => `ledger-groups`,
      providesTags: ["ledger-groups-array"],
    }),
    createLedgerGroup: build.mutation<
      { data: LedgerGroupColumn },
      LedgerGroupFromValues
    >({
      query: (newLedgerGroup) => ({
        url: `ledger-groups`,
        method: "POST",
        body: newLedgerGroup,
      }),
      invalidatesTags: ["ledger-groups", "ledger-groups-tree", "ledger-groups-array"],
    }),
    removeLedgerGroup: build.mutation<DeleteResponse, number>({
      query: (ledgerGroupId) => ({
        url: `ledger-groups/${ledgerGroupId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ledger-groups"],
    }),
    updateLedgerGroup: build.mutation<
      { data: LedgerGroupColumn },
      { ledgerGroupId: number; updatedLedgerGroup: LedgerGroupFromValues }
    >({
      query: ({ ledgerGroupId, updatedLedgerGroup }) => ({
        url: `ledger-groups/${ledgerGroupId}`,
        method: "PUT",
        body: updatedLedgerGroup,
      }),
      invalidatesTags: ["ledger-groups"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLedgerGroupsQuery,
  useGetLedgerGroupsArrayQuery,
  useCreateLedgerGroupMutation,
  useRemoveLedgerGroupMutation,
  useUpdateLedgerGroupMutation,
} = ledgerGroupApi;

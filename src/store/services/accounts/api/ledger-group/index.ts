import {
  LedgerGroupArrayRow,
  LedgerGroupFromValues,
  type LedgerGroupRow,
} from "@/lib/validators/accounts";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const ledgerGroupApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getLedgerGroups: build.query<
      { data: LedgerGroupRow[]; meta: PaginationInfo },
      string | void
    >({
      query: () => `ledger-groups?tree=1`,
      providesTags: ["ledger-groups-tree"],
    }),
    getLedgerGroupsArray: build.query<
      { data: LedgerGroupArrayRow[]; meta: PaginationInfo },
      string | void
    >({
      query: (query) => `ledger-groups?${query}`,
      providesTags: ["ledger-groups-array"],
    }),
    createLedgerGroup: build.mutation<
      { data: LedgerGroupRow },
      LedgerGroupFromValues
    >({
      query: (newLedgerGroup) => ({
        url: `ledger-groups`,
        method: "POST",
        body: newLedgerGroup,
      }),
      invalidatesTags: [
        "ledger-groups",
        "ledger-groups-tree",
        "ledger-groups-array",
      ],
    }),
    removeLedgerGroup: build.mutation<DeleteResponse, number>({
      query: (ledgerGroupId) => ({
        url: `ledger-groups/${ledgerGroupId}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        "ledger-groups",
        "ledger-groups-tree",
        "ledger-groups-array",
      ],
    }),
    updateLedgerGroup: build.mutation<
      { data: LedgerGroupRow },
      { ledgerGroupId: number; updatedLedgerGroup: LedgerGroupFromValues }
    >({
      query: ({ ledgerGroupId, updatedLedgerGroup }) => ({
        url: `ledger-groups/${ledgerGroupId}`,
        method: "PUT",
        body: updatedLedgerGroup,
      }),
      invalidatesTags: [
        "ledger-groups",
        "ledger-groups-tree",
        "ledger-groups-array",
      ],
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

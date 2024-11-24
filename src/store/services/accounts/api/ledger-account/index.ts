import { LedgerFromValues, type LedgerRow } from "@/lib/validators/accounts";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const ledgerAccountApi = accountApi.injectEndpoints({
  endpoints: (build) => ({
    getLedgerAccounts: build.query<
      { data: LedgerRow[]; meta: PaginationInfo },
      string | void
    >({
      query: (query) => `ledger-accounts?${query}`,
      providesTags: ["ledger-accounts"],
    }),
    createLedgerAccount: build.mutation<{ data: LedgerRow }, LedgerFromValues>({
      query: (newLedgerAccount) => ({
        url: `ledger-accounts`,
        method: "POST",
        body: newLedgerAccount,
      }),
      invalidatesTags: [
        "ledger-accounts",
        "ledger-groups-tree",
        "ledger-groups-array",
      ],
    }),
    removeLedgerAccount: build.mutation<DeleteResponse, number>({
      query: (ledgerAccountId) => ({
        url: `ledger-accounts/${ledgerAccountId}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        "ledger-accounts",
        "ledger-groups-tree",
        "ledger-groups-array",
      ],
    }),
    updateLedgerAccount: build.mutation<
      { data: LedgerRow },
      { ledgerAccountId: number; updatedLedgerAccount: LedgerFromValues }
    >({
      query: ({ ledgerAccountId, updatedLedgerAccount }) => ({
        url: `ledger-accounts/${ledgerAccountId}`,
        method: "PUT",
        body: updatedLedgerAccount,
      }),
      invalidatesTags: [
        "ledger-accounts",
        "ledger-groups-tree",
        "ledger-groups-array",
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLedgerAccountsQuery,
  useCreateLedgerAccountMutation,
  useRemoveLedgerAccountMutation,
  useUpdateLedgerAccountMutation,
} = ledgerAccountApi;

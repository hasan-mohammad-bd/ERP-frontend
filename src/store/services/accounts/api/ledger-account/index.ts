import {
	LedgerFromValues,
	type LedgerColumn,
} from "@/lib/validators";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const ledgerAccountApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getLedgerAccounts: build.query<
			{ data: LedgerColumn[]; meta: PaginationInfo },
			string | void
		>({
			query: () => `ledger-accounts`,
			providesTags: ["ledger-accounts"],
		}),
		createLedgerAccount: build.mutation<
			{ data: LedgerColumn },
			LedgerFromValues
		>({
			query: (newLedgerAccount) => ({
				url: `ledger-accounts`,
				method: "POST",
				body: newLedgerAccount,
			}),
			invalidatesTags: ["ledger-accounts"],
		}),
		removeLedgerAccount: build.mutation<DeleteResponse, number>({
			query: (ledgerAccountId) => ({
				url: `ledger-accounts/${ledgerAccountId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["ledger-accounts"],
		}),
		updateLedgerAccount: build.mutation<
			{ data: LedgerColumn },
			{ ledgerAccountId: number; updatedLedgerAccount: LedgerFromValues }
		>({
			query: ({ ledgerAccountId, updatedLedgerAccount }) => ({
				url: `ledger-accounts/${ledgerAccountId}`,
				method: "PUT",
				body: updatedLedgerAccount,
			}),
			invalidatesTags: ["ledger-accounts"],
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

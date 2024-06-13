import {
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
			query: () => `ledger-groups`,
			providesTags: ["ledger-groups"],
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
			invalidatesTags: ["ledger-groups"],
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
	useCreateLedgerGroupMutation,
	useRemoveLedgerGroupMutation,
	useUpdateLedgerGroupMutation,
} = ledgerGroupApi;

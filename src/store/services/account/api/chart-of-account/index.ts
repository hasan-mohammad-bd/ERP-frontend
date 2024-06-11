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
			string
		>({
			query: (params) => `ledger-groups?${params}`,
			providesTags: ["ledgerGroups"],
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
			invalidatesTags: ["ledgerGroups"],
		}),
		removeLedgerGroup: build.mutation<DeleteResponse, number>({
			query: (ledgerGroupId) => ({
				url: `ledger-groups/${ledgerGroupId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["ledgerGroups"],
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
			invalidatesTags: ["ledgerGroups"],
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
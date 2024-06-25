import {
	SubAccountFromValues,
	type SubAccountRow,
} from "@/lib/validators/accounts";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const subAccountApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getSubAccounts: build.query<
			{ data: SubAccountRow[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `sub-accounts?${params}`,
			providesTags: ["sub-accounts"],
		}),
		createSubAccount: build.mutation<
			{ data: SubAccountRow },
			SubAccountFromValues
		>({
			query: (newSubAccount) => ({
				url: `sub-accounts`,
				method: "POST",
				body: newSubAccount,
			}),
			invalidatesTags: ["sub-accounts"],
		}),
		removeSubAccount: build.mutation<DeleteResponse, number>({
			query: (subAccountId) => ({
				url: `sub-accounts/${subAccountId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["sub-accounts"],
		}),
		updateSubAccount: build.mutation<
			{ data: SubAccountRow },
			{ subAccountId: number; updatedSubAccount: SubAccountFromValues }
		>({
			query: ({ subAccountId, updatedSubAccount }) => ({
				url: `sub-accounts/${subAccountId}`,
				method: "PUT",
				body: updatedSubAccount,
			}),
			invalidatesTags: ["sub-accounts"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetSubAccountsQuery,
	useCreateSubAccountMutation,
	useRemoveSubAccountMutation,
	useUpdateSubAccountMutation,
} = subAccountApi;

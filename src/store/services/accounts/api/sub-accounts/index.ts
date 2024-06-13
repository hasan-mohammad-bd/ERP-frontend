import {
	SubAccountFromValues,
	type SubAccountColumn,
} from "@/lib/validators";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const subAccountApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getSubAccounts: build.query<
			{ data: SubAccountColumn[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `sub-accounts?${params}`,
			providesTags: ["sub-accounts"],
		}),
		createSubAccount: build.mutation<
			{ data: SubAccountColumn },
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
			{ data: SubAccountColumn },
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

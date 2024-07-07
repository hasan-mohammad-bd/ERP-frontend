
import { OpeningBalanceFromValues, OpeningBalanceRow } from "@/lib/validators/accounts/opening-balance";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const openingBalanceApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
			getOpeningBalances: build.query<
					{ data: OpeningBalanceRow[]; meta: PaginationInfo },
					string
			>({
					query: () => `opening-balance`,
					
					providesTags: ["opening-balance"],
			}),
			getOpeningBalanceById: build.query<
					{ data: OpeningBalanceRow; meta: PaginationInfo },
					string
			>({
					query: (params) => `opening-balance/${params}`,
					
					providesTags: ["opening-balance"],
			}),
			createOpeningBalance: build.mutation<
					{ data: OpeningBalanceRow },
					OpeningBalanceFromValues
			>({
					query: (newOpeningBalance) => ({
							url: `opening-balance`,
							method: "POST",
							body: newOpeningBalance,
					}),
					invalidatesTags: ["opening-balance"],
			}),
			removeOpeningBalance: build.mutation<DeleteResponse, number>({
					query: (openingBalanceId) => ({
							url: `opening-balance/${openingBalanceId}`,
							method: "DELETE",
					}),
					invalidatesTags: ["opening-balance"],
			}),
			updateOpeningBalance: build.mutation<
					{ data: OpeningBalanceRow },
					{ openingBalanceId: number; updatedOpeningBalance: OpeningBalanceFromValues }
			>({
					query: ({ openingBalanceId, updatedOpeningBalance }) => ({
							url: `opening-balance/${openingBalanceId}`,
							method: "PUT",
							body: updatedOpeningBalance,
					}),
					invalidatesTags: ["opening-balance"],
			}),
	}),
	overrideExisting: false,
});

export const {
	useGetOpeningBalancesQuery,
	useGetOpeningBalanceByIdQuery,
	useCreateOpeningBalanceMutation,
	useRemoveOpeningBalanceMutation,
	useUpdateOpeningBalanceMutation,
} = openingBalanceApi;

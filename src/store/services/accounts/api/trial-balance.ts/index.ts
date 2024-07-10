// import { accountApi } from "../..";
// import { PaginationInfo } from "@/types";
// // import { TrialBalanceRow } from "@/lib/validators/accounts/trial-balance";

// const trialBalanceApi = accountApi.injectEndpoints({
// 	endpoints: (build) => ({
// 		getTrialBalances: build.query<
// 			{ data: TrialBalanceRow[]; meta: PaginationInfo },
// 			string
// 		>({
// 			query: (params) => `reports/trial-balance?${params}`,
// 			providesTags: ["trial-balance"],
// 		}),
// 	}),
// 	overrideExisting: false,
// });

// export const {
// 	useGetTrialBalancesQuery,
// } = trialBalanceApi;

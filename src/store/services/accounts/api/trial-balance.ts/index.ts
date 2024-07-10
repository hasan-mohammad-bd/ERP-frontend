import { TrialBalanceRow } from "@/lib/validators/accounts/trial-balance";
import { accountApi } from "../..";


const trialBalanceApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getTrialBalances: build.query<
			{ data: TrialBalanceRow; dr_balance: number; cr_balance: number;  },
			string
		>({
			query: (params) => `reports/trial-balance?${params}`,
			providesTags: ["trial-balance"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetTrialBalancesQuery,
} = trialBalanceApi;

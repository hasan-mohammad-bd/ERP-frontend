
import { BalanceSheetRow } from "@/lib/validators/accounts/balance-sheet";
import { accountApi } from "../..";

const balanceSheetApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getBalanceSheets: build.query<
			{ data: BalanceSheetRow[];   },
			string
		>({
			query: (params) => `reports/balance-sheet?${params}`,
			providesTags: ["balance-sheet"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetBalanceSheetsQuery,
} = balanceSheetApi;

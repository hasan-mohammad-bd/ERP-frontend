import { IncomeStatementRow } from "@/lib/validators/accounts/income-statement";
import { accountApi } from "../..";

const incomeStatementApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getIncomeStatement: build.query<
			{ data: IncomeStatementRow[]  },
			string
		>({
			query: (params) => `reports/income-statement?${params}`,
			providesTags: ["trial-balance"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetIncomeStatementQuery
} = incomeStatementApi;

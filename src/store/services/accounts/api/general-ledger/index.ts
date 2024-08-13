
import { accountApi } from "../..";
import {PaginationInfo } from "@/types";
import { DetailedGeneralLedgerRow, GeneralLedgerRow, SummeryRow } from "@/lib/validators/accounts/general-ledger";

const generalLedgerApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getGeneralLedgers: build.query<
			{ data: GeneralLedgerRow[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `reports/general-ledger?${params}`,
			providesTags: ["general-ledger"],
		}),
		getDetailGeneralLedgers: build.query<
			{ data: DetailedGeneralLedgerRow[]; meta: PaginationInfo; summery: SummeryRow },
			string
		>({
			query: (params) => `reports/detailed-general-ledger?${params}`,
			providesTags: ["detailed-general-ledger"],
		}),

	}),
	overrideExisting: false,
});

export const {
	useGetGeneralLedgersQuery,
	useGetDetailGeneralLedgersQuery
} = generalLedgerApi;

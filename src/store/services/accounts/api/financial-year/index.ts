import {
	FinancialYearFromValues,
	type FinancialYearRow,
} from "@/lib/validators/accounts";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const financialYearApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getFinancialYears: build.query<
			{ data: FinancialYearRow[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `financial-years?${params}`,
			providesTags: ["financial-years"],
		}),
		createFinancialYear: build.mutation<
			{ data: FinancialYearRow },
			FinancialYearFromValues
		>({
			query: (newFinancialYear) => ({
				url: `financial-years`,
				method: "POST",
				body: newFinancialYear,
			}),
			invalidatesTags: ["financial-years"],
		}),
		removeFinancialYear: build.mutation<DeleteResponse, number>({
			query: (financialYearId) => ({
				url: `financial-years/${financialYearId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["financial-years"],
		}),
		updateFinancialYear: build.mutation<
			{ data: FinancialYearRow },
			{ financialYearId: number; updatedFinancialYear: FinancialYearFromValues }
		>({
			query: ({ financialYearId, updatedFinancialYear }) => ({
				url: `financial-years/${financialYearId}`,
				method: "PUT",
				body: updatedFinancialYear,
			}),
			invalidatesTags: ["financial-years"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetFinancialYearsQuery,
	useCreateFinancialYearMutation,
	useRemoveFinancialYearMutation,
	useUpdateFinancialYearMutation,
} = financialYearApi;

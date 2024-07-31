
import { CostCategoryFromValues, CostCategoryRow } from "@/lib/validators/accounts/cost-categories";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const costCategoryApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getCostCategories: build.query<
			{ data: CostCategoryRow[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `cost-categories?${params}`,
			providesTags: ["cost-categories"],
		}),
		createCostCategory: build.mutation<
			{ data: CostCategoryRow },
			CostCategoryFromValues
		>({
			query: (newCostCategory) => ({
				url: `cost-categories`,
				method: "POST",
				body: newCostCategory,
			}),
			invalidatesTags: ["cost-categories"],
		}),
		removeCostCategory: build.mutation<DeleteResponse, number>({
			query: (costCategoryId) => ({
				url: `cost-categories/${costCategoryId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["cost-categories"],
		}),
		updateCostCategory: build.mutation<
			{ data: CostCategoryRow },
			{ costCategoryId: number; updatedCostCategory: CostCategoryFromValues }
		>({
			query: ({ costCategoryId, updatedCostCategory }) => ({
				url: `cost-categories/${costCategoryId}`,
				method: "PUT",
				body: updatedCostCategory,
			}),
			invalidatesTags: ["cost-categories"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetCostCategoriesQuery,
	useCreateCostCategoryMutation,
	useRemoveCostCategoryMutation,
	useUpdateCostCategoryMutation,
} = costCategoryApi;


import { CostCenterFromValues, CostCenterRow } from "@/lib/validators/accounts/cost-centers";
import { accountApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const costCenterApi = accountApi.injectEndpoints({
	endpoints: (build) => ({
		getCostCenters: build.query<
			{ data: CostCenterRow[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `cost-centers?${params}`,
			providesTags: ["cost-centers"],
		}),
		createCostCenter: build.mutation<
			{ data: CostCenterRow },
			CostCenterFromValues
		>({
			query: (newCostCenter) => ({
				url: `cost-centers`,
				method: "POST",
				body: newCostCenter,
			}),
			invalidatesTags: ["cost-centers"],
		}),
		removeCostCenter: build.mutation<DeleteResponse, number>({
			query: (costCenterId) => ({
				url: `cost-centers/${costCenterId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["cost-centers"],
		}),
		updateCostCenter: build.mutation<
			{ data: CostCenterRow },
			{ costCenterId: number; updatedCostCenter: CostCenterFromValues }
		>({
			query: ({ costCenterId, updatedCostCenter }) => ({
				url: `cost-centers/${costCenterId}`,
				method: "PUT",
				body: updatedCostCenter,
			}),
			invalidatesTags: ["cost-centers"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetCostCentersQuery,
	useCreateCostCenterMutation,
	useRemoveCostCenterMutation,
	useUpdateCostCenterMutation,
} = costCenterApi;

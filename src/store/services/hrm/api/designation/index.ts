import {
	DesignationFromValues,
	type DesignationColumn,
} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const designationApi = hrmApi.injectEndpoints({
	endpoints: (build) => ({
		getDesignation: build.query<
			{ data: DesignationColumn[]; meta: PaginationInfo },
			string
		>({
			query: (params) => `designations?${params}`,
			providesTags: ["designations"],
		}),
		createDesignation: build.mutation<
			{ data: DesignationColumn },
			DesignationFromValues
		>({
			query: (newDesignation) => ({
				url: `designations`,
				method: "POST",
				body: newDesignation,
			}),
			invalidatesTags: ["designations"],
		}),
		removeDesignation: build.mutation<DeleteResponse, number>({
			query: (designationId) => ({
				url: `designations/${designationId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["designations"],
		}),
		updateDesignation: build.mutation<
			{ data: DesignationColumn },
			{ designationId: number; updatedDesignation: DesignationFromValues }
		>({
			query: ({ designationId, updatedDesignation }) => ({
				url: `designations/${designationId}`,
				method: "PUT",
				body: updatedDesignation,
			}),
			invalidatesTags: ["designations"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetDesignationQuery,
	useCreateDesignationMutation,
	useRemoveDesignationMutation,
	useUpdateDesignationMutation,
} = designationApi;

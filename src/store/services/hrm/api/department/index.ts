import { DepartmentFromValues, type DepartmentColumn } from "@/lib/validators";
import { hrmApi } from "../..";

const departmentApi = hrmApi.injectEndpoints({
	endpoints: (build) => ({
		getDepartments: build.query<{ data: DepartmentColumn[] }, void>({
			query: () => "departments",
			providesTags: ["departments"],
		}),
		createDepartment: build.mutation<
			{ data: DepartmentColumn },
			DepartmentFromValues
		>({
			query: (newDepartment) => ({
				url: `departments`,
				method: "POST",
				body: newDepartment,
			}),
			invalidatesTags: ["departments"],
		}),
		removeDepartment: build.mutation<any, number>({
			query: (departmentId) => ({
				url: `departments/${departmentId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["departments"],
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetDepartmentsQuery,
	useCreateDepartmentMutation,
	useRemoveDepartmentMutation,
} = departmentApi;

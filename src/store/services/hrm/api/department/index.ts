import { type DepartmentColumn } from "@/lib/validators";
import { hrmApi } from "../..";

const departmentApi = hrmApi.injectEndpoints({
	endpoints: (build) => ({
		getDepartments: build.query<{ data: DepartmentColumn[] }, void>({
			query: () => "departments",
			providesTags: ["departments"],
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

export const { useGetDepartmentsQuery, useRemoveDepartmentMutation } =
	departmentApi;

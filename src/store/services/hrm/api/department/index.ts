import { type DepartmentColumn } from "@/lib/validators";
import { hrmApi } from "../..";

const departmentApi = hrmApi.injectEndpoints({
	endpoints: (build) => ({
		getDepartments: build.query<{ data: DepartmentColumn[] }, void>({
			query: () => "departments",
			providesTags: ["departments"],
		}),
	}),
	overrideExisting: false,
});

export const { useGetDepartmentsQuery } = departmentApi;

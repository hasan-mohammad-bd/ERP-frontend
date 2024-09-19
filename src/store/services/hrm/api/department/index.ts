import {
  DepartmentFromValues,
  type DepartmentColumn,
} from "@/lib/validators"; 
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const departmentApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query<
    { data: DepartmentColumn[]; meta: PaginationInfo },
    string
  >({
      query: (params) => `departments?${params}`, 
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
    removeDepartment: build.mutation<DeleteResponse, number>({
      query: (departmentId) => ({
        url: `departments/${departmentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["departments"], 
    }),
    updateDepartment: build.mutation<{ data: DepartmentColumn }, { departmentId: number, updatedDepartment: DepartmentFromValues }>({ 
      query: ({ departmentId, updatedDepartment }) => ({
        url: `departments/${departmentId}`,
        method: "PUT", 
        body: updatedDepartment,
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
  useUpdateDepartmentMutation 
} = departmentApi;

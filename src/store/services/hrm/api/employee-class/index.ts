import {
  EmployeeClassFromValues,
  type EmployeeClassColumn,
} from "@/lib/validators"; 
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const employeeClassApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeClasses: build.query<
    { data: EmployeeClassColumn[]; meta: PaginationInfo },
    string
  >({ 
      query: (params) => `employee-classes?${params}`, 
      providesTags: ["employee-classes"], 
    }),
    createEmployeeClass: build.mutation<
      { data: EmployeeClassColumn },
      EmployeeClassFromValues
    >({
      query: (newEmployeeClass) => ({
        url: `employee-classes`,
        method: "POST",
        body: newEmployeeClass,
      }),
      invalidatesTags: ["employee-classes"], 
    }),
    removeEmployeeClass: build.mutation<DeleteResponse, number>({
      query: (employeeClassId) => ({
        url: `employee-classes/${employeeClassId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["employee-classes"], 
    }),
    updateEmployeeClass: build.mutation<{ data: EmployeeClassColumn }, { employeeClassId: number, updatedEmployeeClass: EmployeeClassFromValues }>({
      query: ({ employeeClassId, updatedEmployeeClass }) => ({
        url: `employee-classes/${employeeClassId}`, 
        method: "PUT", 
        body: updatedEmployeeClass,
      }),
      invalidatesTags: ["employee-classes"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEmployeeClassesQuery, 
  useCreateEmployeeClassMutation, 
  useRemoveEmployeeClassMutation, 
  useUpdateEmployeeClassMutation 
} = employeeClassApi;

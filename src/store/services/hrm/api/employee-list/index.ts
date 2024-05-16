import {
  EmployeeFormValues,
  EmployeeColumn,

} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const employeeApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployees: build.query<{ data: EmployeeColumn[] }, void>({
      query: () => "employees",
      providesTags: ["employees"],
    }),
    createEmployee: build.mutation<
      { data: EmployeeColumn },
      EmployeeFormValues
    >({
      query: (newEmployee) => ({
        url: `employees`,
        method: "POST",
        body: newEmployee,
      }),
      invalidatesTags: ["employees"],
    }),
    removeEmployee: build.mutation<DeleteResponse, number>({
      query: (employeeId) => ({
        url: `employees/${employeeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employees"],
    }),
    updateEmployee: build.mutation<{ data: EmployeeColumn }, { employeeId: number, updatedEmployee: EmployeeFormValues }>({
      query: ({ employeeId, updatedEmployee }) => ({
        url: `employees/${employeeId}`,
        method: "PUT",
        body: updatedEmployee,
      }),
      invalidatesTags: ["employees"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEmployeesQuery,
  useCreateEmployeeMutation,
  useRemoveEmployeeMutation,
  useUpdateEmployeeMutation
} = employeeApi;

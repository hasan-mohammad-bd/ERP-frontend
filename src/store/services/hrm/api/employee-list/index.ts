import {
  EmployeeFormValues,
  EmployeeColumn,


} from "@/lib/validators";
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const employeeApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployees: build.query<
    { data: EmployeeColumn[]; meta: PaginationInfo },
    string
  >({
      query: (params) => `employees?${params}`,
      providesTags: ["employees"],
    }),
    getEmployeeById: build.query<{ data: EmployeeColumn;}, string>({
      query: (params) => `employees/${params}`,
    
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
    updateEmployee: build.mutation<{ data: EmployeeColumn }, { employeeId: number, updatedEmployee: FormData }>({
      query: ({ employeeId, updatedEmployee }) => ({
        url: `employees/${employeeId}`,
        method: "POST",
        body: updatedEmployee,
      }),
      invalidatesTags: ["employees"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useLazyGetEmployeesQuery,
  useCreateEmployeeMutation,
  useRemoveEmployeeMutation,
  useUpdateEmployeeMutation
} = employeeApi;

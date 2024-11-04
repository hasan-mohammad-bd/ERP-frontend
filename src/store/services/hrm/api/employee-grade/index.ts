
import {
  EmployeeGradeFromValues,
  type EmployeeGradeColumn,
} from "@/lib/validators"; 
import { hrmApi } from "../..";
import { DeleteResponse, PaginationInfo } from "@/types";

const employeeGradeApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeGrades: build.query<
    { data: EmployeeGradeColumn[]; meta: PaginationInfo },
    string
  >({ 
      query: (params) => `employee-grades?${params}`, 
      providesTags: ["employee-grades"], 
    }),
    createEmployeeGrade: build.mutation<
      { data: EmployeeGradeColumn },
      EmployeeGradeFromValues
    >({
      query: (newEmployeeGrade) => ({
        url: `employee-grades`,
        method: "POST",
        body: newEmployeeGrade,
      }),
      invalidatesTags: ["employee-grades"], 
    }),
    removeEmployeeGrade: build.mutation<DeleteResponse, number>({
      query: (employeeGradeId) => ({
        url: `employee-grades/${employeeGradeId}`, 
        method: "DELETE",
      }),
      invalidatesTags: ["employee-grades"], 
    }),
    updateEmployeeGrade: build.mutation<{ data: EmployeeGradeColumn }, { employeeGradeId: number, updatedEmployeeGrade: EmployeeGradeFromValues }>({
      query: ({ employeeGradeId, updatedEmployeeGrade }) => ({
        url: `employee-grades/${employeeGradeId}`, 
        method: "PUT",
        body: updatedEmployeeGrade,
      }),
      invalidatesTags: ["employee-grades"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetEmployeeGradesQuery, 
  useLazyGetEmployeeGradesQuery,
  useCreateEmployeeGradeMutation, 
  useRemoveEmployeeGradeMutation, 
  useUpdateEmployeeGradeMutation 
} = employeeGradeApi;

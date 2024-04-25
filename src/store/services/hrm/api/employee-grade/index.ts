import {
  EmployeeGradeFromValues,
  type EmployeeGradeColumn,
} from "@/lib/validators"; 
import { hrmApi } from "../..";
import { DeleteResponse } from "@/types";

const employeeGradeApi = hrmApi.injectEndpoints({
  endpoints: (build) => ({
    getEmployeeGrades: build.query<{ data: EmployeeGradeColumn[] }, void>({ 
      query: () => "employee-grades", 
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
  useCreateEmployeeGradeMutation, 
  useRemoveEmployeeGradeMutation, 
  useUpdateEmployeeGradeMutation 
} = employeeGradeApi;

import{aA as r}from"./index-e05f5e98.js";const s=r.injectEndpoints({endpoints:a=>({getEmployeeGrades:a.query({query:e=>`employee-grades?${e}`,providesTags:["employee-grades"]}),createEmployeeGrade:a.mutation({query:e=>({url:"employee-grades",method:"POST",body:e}),invalidatesTags:["employee-grades"]}),removeEmployeeGrade:a.mutation({query:e=>({url:`employee-grades/${e}`,method:"DELETE"}),invalidatesTags:["employee-grades"]}),updateEmployeeGrade:a.mutation({query:({employeeGradeId:e,updatedEmployeeGrade:o})=>({url:`employee-grades/${e}`,method:"PUT",body:o}),invalidatesTags:["employee-grades"]})}),overrideExisting:!1}),{useGetEmployeeGradesQuery:d,useCreateEmployeeGradeMutation:m,useRemoveEmployeeGradeMutation:p,useUpdateEmployeeGradeMutation:y}=s;export{m as a,y as b,p as c,d as u};

import{bo as r}from"./index-1d5a1686.js";const s=r.injectEndpoints({endpoints:a=>({getEmployeeGrades:a.query({query:e=>`employee-grades?${e}`,providesTags:["employee-grades"]}),createEmployeeGrade:a.mutation({query:e=>({url:"employee-grades",method:"POST",body:e}),invalidatesTags:["employee-grades"]}),removeEmployeeGrade:a.mutation({query:e=>({url:`employee-grades/${e}`,method:"DELETE"}),invalidatesTags:["employee-grades"]}),updateEmployeeGrade:a.mutation({query:({employeeGradeId:e,updatedEmployeeGrade:o})=>({url:`employee-grades/${e}`,method:"PUT",body:o}),invalidatesTags:["employee-grades"]})}),overrideExisting:!1}),{useGetEmployeeGradesQuery:d,useLazyGetEmployeeGradesQuery:m,useCreateEmployeeGradeMutation:y,useRemoveEmployeeGradeMutation:p,useUpdateEmployeeGradeMutation:l}=s;export{l as a,p as b,d as c,m as d,y as u};

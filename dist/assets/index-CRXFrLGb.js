import{h as o}from"./index-CwtkdAoF.js";const l=o.injectEndpoints({endpoints:s=>({getEmployeeClasses:s.query({query:e=>`employee-classes?${e}`,providesTags:["employee-classes"]}),createEmployeeClass:s.mutation({query:e=>({url:"employee-classes",method:"POST",body:e}),invalidatesTags:["employee-classes"]}),removeEmployeeClass:s.mutation({query:e=>({url:`employee-classes/${e}`,method:"DELETE"}),invalidatesTags:["employee-classes"]}),updateEmployeeClass:s.mutation({query:({employeeClassId:e,updatedEmployeeClass:a})=>({url:`employee-classes/${e}`,method:"PUT",body:a}),invalidatesTags:["employee-classes"]})}),overrideExisting:!1}),{useGetEmployeeClassesQuery:m,useCreateEmployeeClassMutation:p,useRemoveEmployeeClassMutation:y,useUpdateEmployeeClassMutation:i}=l;export{p as a,i as b,y as c,m as u};

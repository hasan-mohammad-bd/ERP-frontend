import{dr as t}from"./index-5e0f2197.js";const p=t.injectEndpoints({endpoints:s=>({getExpenses:s.query({query:e=>`expenses?${e}`,providesTags:["expenses"]}),getExpense:s.query({query:e=>`expenses/${e}`,providesTags:["expenses"]}),createExpense:s.mutation({query:e=>({url:"expenses",method:"POST",body:e}),invalidatesTags:["expenses"]}),removeExpense:s.mutation({query:e=>({url:`expenses/${e}`,method:"DELETE"}),invalidatesTags:["expenses"]}),updateExpense:s.mutation({query:({expenseId:e,updatedExpense:n})=>({url:`expenses/${e}`,method:"PUT",body:n}),invalidatesTags:["expenses"]})}),overrideExisting:!1}),{useGetExpensesQuery:o,useGetExpenseQuery:r,useCreateExpenseMutation:x,useRemoveExpenseMutation:u,useUpdateExpenseMutation:i}=p;export{o as a,x as b,i as c,r as d,u};

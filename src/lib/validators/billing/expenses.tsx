import { z } from "zod";

export const expensesSchema = z.object({
//    name: z.string().min(2, {
//          message: "Name must be at least 2 characters.",
//        }),
//   company_name: z.string().min(2, {
//     message: "Company name must be at least 2 characters.",
//   }),
//   company_id: z.coerce
//     .number()
//     .int()
//     .min(0, {
//       message: "Company ID must be at least 0.",
//     })
//     .max(9999, {
//       message: "Company ID must be at most 9999.",
//     }),

  payfrom: z.string().min(2, {
         message: "payfrom must be at least 2 characters.",
            }),

  date: z.date({
    invalid_type_error: "Invalid date format.",
  }),
  note: z.string().optional(),

  expenses: z.array(
    z.object({
      expenses_category: z.string(),
      note: z.string(),
      amount: z.string(),
      attachment: z.string()
    })
  ),


});

export type ExpensesFormValues = z.infer<typeof expensesSchema>;

export const expenseRow = expensesSchema.extend({
  id: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Id must be at least 0.",
    })
    .max(9999, {
      message: "Id must be at most 9999.",
    }),
});

export type ExpensesRow = z.infer<typeof expenseRow>;

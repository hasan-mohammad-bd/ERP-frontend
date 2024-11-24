import { z } from "zod";

type ExpenseDetail = {
  id: number;
  amount: string;
  note: string;
  expense_category_id: number;
};

export type Expense = {
  id: number;
  date: string;
  total: string;
  note: string;
  invoice_prifix: string;
  invoice_suffix: number;
  invoice_number: string;
  payment_account_id: number;
  ledger_account_id: number;
  details: ExpenseDetail[];
};

export const expensesSchema = z.object({
  ledger_account_id: z.string({ required_error: "Account is required" }),

  date: z.string({ required_error: "Date is required" }).date(),
  note: z.string().optional(),
  total: z.number(),
  details: z
    .array(
      z.object({
        expense_category_id: z
          .string({ required_error: "Category is required" })
          .min(1, "Category is required"),
        note: z.string().optional(),
        amount: z.string({ required_error: "Amount is required" }),
        attachment: z.string().optional(),
      })
    )
    .min(1, "At least one expense detail is required"),
});

export type ExpensesFormValues = z.infer<typeof expensesSchema>;

export type ExpensesFormValuesAPI = Omit<
  ExpensesFormValues,
  "ledger_account_id" | "details"
> & {
  ledger_account_id: number;
  details: {
    expense_category_id: number;
    note?: string;
    amount: number;
  }[];
};

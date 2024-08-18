import { z } from "zod";

export const IncomeVsExpensesRow = z.object({
  full_name: z.string(),
  income: z.number(),
  expense: z.number(),
  sales: z.number(),
});

export type IncomeVsExpensesRow = z.infer<typeof IncomeVsExpensesRow>;

export const GrowthRow = z.object({
  income: z.number(),
  expence: z.number(),
  net_profit: z.number(),
});

export type GrowthRow = z.infer<typeof GrowthRow>;

export const RevenueRow = z.object({
  accounts_receivable: z.number(),
  accounts_payable: z.number(),
  difference: z.number(),
});

export type RevenueRow = z.infer<typeof RevenueRow>;

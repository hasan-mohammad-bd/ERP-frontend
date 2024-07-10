import {z} from "zod";

export const trialBalanceFields = z.object({
  id: z.coerce.number(),
  code: z.string(),
  type: z.string(),
  name: z.string(),
  nature: z.string(),
  sub_type: z.string(),
  cr_amount: z.coerce.number(),
  dr_amount: z.coerce.number(),
  balance: z.coerce.number(),
  dr_balance: z.coerce.number(),
  cr_balance: z.coerce.number(),
});

export const trialBalanceRow = z.object({
  Assets: trialBalanceFields.array(),
  Liabilities: trialBalanceFields.array(),
  Income: trialBalanceFields.array(),
  Expenses: trialBalanceFields.array(),
  Equity: trialBalanceFields.array(),


});

export type TrialBalanceRow = z.infer<typeof trialBalanceRow>;


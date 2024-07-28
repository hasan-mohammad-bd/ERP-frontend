import { z } from "zod";

// Define the base structure without the child groups first
const baseIncomeStatementFields = z.object({
  id: z.coerce.number(),
  code: z.string(),
  name: z.string(),
  // type: z.string(),
  nature: z.string(),
  sub_type: z.string(),
  cr_amount: z.coerce.number(),
  dr_amount: z.coerce.number(),
  balance: z.coerce.number(),
  dr_balance: z.coerce.number(),
  cr_balance: z.coerce.number(),
});

// Define the child groups schema referencing
const incomeStatementFields = baseIncomeStatementFields.extend({
  childs_groups: z.array(baseIncomeStatementFields),
  
});

export type IncomeStatementRow = z.infer<typeof incomeStatementFields>;



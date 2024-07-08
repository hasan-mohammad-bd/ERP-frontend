import { z } from "zod";

export const enumRow = z.object({
  account_type: z.enum([
    "Assets",
    "Liabilities",
    "Equities",
    "Income",
    "Expenses",
  ]),
  account_nature: z.enum([
    "Account Receivable",
    "Account Payable",
    "cash",
    "Bank Accounts",
    "Stock/Inventory Assets",
    "Sales Revenue",
    "Cost of Goods Sold",
    "Equity Accounts",
    "Expense Accounts",
    "Prepaid Expenses",
    "Accrued Liabilities",
    "Depreciation",
    "Vat payable"
  ]),
  sub_account_type: z.enum([
    "None",
    "Employee",
    "Customer",
    "Supporter",
    "Supplier",
    "Agent",
  ]),
});

export type EnumRow = z.infer<typeof enumRow>;

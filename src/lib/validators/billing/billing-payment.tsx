import { z } from "zod";
import { files } from "../accounts/entry";

export type BillingPaymentRow = {
  id: number;
  invoice_prifix: string;
  invoice_suffix: number;
  invoice_number: string;
  date: string;
  amount: number;
  note: string;
  contact: {
    id: number;
    name: string;
    company_name: string;
    company_id: string;
    work_phone: string;
    phone: string;
    email: string;
    type: string;
    opening_balance: string;
    date: string;
    note: string;
    parent_id: number | null;
  };
  created_at: string;
};

export const billingPaymentSchema = z.object({
  files: files,
  date: z.string({ required_error: "Date is required" }),
  ledger_account_id: z.string({ required_error: "Account is required" }),
  note: z.string().optional(),
});

export type BillingPaymentFormType = z.infer<typeof billingPaymentSchema>;

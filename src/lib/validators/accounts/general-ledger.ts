import { z } from "zod";
import { entryRow } from "./entry";
import { ledgerRow } from "./ledger";


export const generalLedgerRow = z.object({
  id: z.coerce.number(),
  code: z.string(),
  name: z.string(),
  type: z.string(),
  nature: z.string(),
  sub_type: z.string(),
  cr_amount: z.coerce.number(),
  dr_amount: z.coerce.number(),
  balance: z.coerce.number(),
  dr_balance: z.coerce.number(),
  cr_balance: z.coerce.number(),

})


export type GeneralLedgerRow = z.infer<typeof generalLedgerRow>;

export const generalLedgerDetailRow = z.object({
  id: z.coerce.number(),
  entry: entryRow.extend({ total: z.coerce.number() }).omit({
    details: true,
    organization: true,
    user: true,
    location: true,
    financial_year: true,
  }),
  ledger_account: ledgerRow,
  contact: z.string(),
  note: z.string(),
  dr_amount: z.coerce.number(),
  cr_amount: z.coerce.number(),
  total: z.coerce.number(),
  created_at: z.string().datetime(),
  date: z.string().date(),
});

export type GeneralLedgerDetailRow = z.infer<typeof generalLedgerDetailRow>;

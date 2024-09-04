import { z } from "zod";
import { ledgerRow } from "./ledger";

export const checkBookSchema = z.object({
  ledger_account_id: z.coerce.number(),
  book_number: z.string(),
  prefix: z.string(),
  number_start: z.coerce.number(),
  number_end: z.coerce.number(),
  issue_date: z.string().date(),
});

export type CheckBookFormValues = z.infer<typeof checkBookSchema>;

export const checkBookRow = checkBookSchema.extend({
  id: z.coerce.number(),
  ledger_account: ledgerRow,
});

export type CheckBookRow = z.infer<typeof checkBookRow>;

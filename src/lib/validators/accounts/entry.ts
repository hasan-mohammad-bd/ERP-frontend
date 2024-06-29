import { financialYearRow } from './financial-year';

import { locationColumn, organizationColumn } from "@/lib/validators";
import { z } from "zod";

export const userRow = z.object({
  id: z.number().int(),
  name: z.string(),
  phone: z.string().regex(/^\d+$/), // assuming phone is a string of digits
  organization_id: z.number().int(),
  location_id: z.number().int(),
  role_id: z.number().int(),
  email: z.string().email(),
  email_verified_at: z.string().datetime(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime()
});


const entryTypeSchema = z.object({
  ledger_account_id: z.number(),
  dr_amount: z.number(),
  cr_amount: z.number(),
  sub_account_id: z.number().nullable(),
});

export const entrySchema = z.object({
  type: z.string(),
  date: z.string().date(),
  entry_number: z.string(),
  details: entryTypeSchema.array(),
  note: z.string(),
  file: z.string(),

});

export type EntryFromValues = z.infer<typeof entrySchema>


const entryRow = entrySchema.extend({
  id: z.coerce.number(),
  organization: organizationColumn,
  financial_year: financialYearRow,
  user: userRow,
  location: locationColumn.omit({organization: true}),

})

export type EntryRow = z.infer<typeof entryRow>
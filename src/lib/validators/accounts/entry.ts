import { financialYearRow } from './financial-year';

import { locationColumn, organizationColumn } from "@/lib/validators";
import { z } from "zod";


export const constCenterRow = z.object({
  cost_center_id: z.coerce.number(),
  amount: z.coerce.number(),
});

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


export const entryTypeSchema = z.object({
  ledger_account_id: z.coerce.number(),
  account: z.object({name: z.string(), code: z.string()}).optional().nullable(),
  dr_amount: z.coerce.number(),
  cr_amount: z.coerce.number(),
  sub_account_id: z.coerce.number().optional().nullable(),
  note: z.string().optional().nullable(),
  total: z.coerce.number().optional().nullable(),
  cost_centers: constCenterRow.array().optional().nullable(),
});



export const entrySchema = z.object({
  type: z.string(),
  location_id: z.coerce.number().optional().nullable(),
  date: z.string().date(),
  entry_number: z.string(),
  details: entryTypeSchema.array(),
  note: z.string(),
  file: z.string(),

});

export type  EntryFromValues = z.infer<typeof entrySchema>

export const entryRow = entrySchema.extend({
  id: z.coerce.number(),
  organization: organizationColumn,
  financial_year: financialYearRow,
  user: userRow,
  location: locationColumn.omit({organization: true}),
  total: z.coerce.number().optional().nullable(),

})


export type EntryRow = z.infer<typeof entryRow>
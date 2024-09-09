import { z } from "zod";
import { entryRow, entryTypeSchema } from "./entry";



export const openingBalanceSchema = z.object({
  type: z.string(),
  location_id: z.coerce.number().optional().nullable(),
  date: z.string().date(),
  details: entryTypeSchema.array(),
  note: z.string().optional().nullable(),
  file: z.string().optional().nullable(),
  // entry_number: z.string(),

});

export type OpeningBalanceFromValues = z.infer<typeof openingBalanceSchema>

export const openingBalanceRow = entryRow

export type OpeningBalanceRow = z.infer<typeof openingBalanceRow>


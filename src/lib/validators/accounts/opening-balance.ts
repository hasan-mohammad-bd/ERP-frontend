import { z } from "zod";
import { entryRow, entryTypeSchema } from "./entry";



export const openingBalanceSchema = z.object({
  type: z.string(),
  location_id: z.coerce.number(),
  date: z.string().date(),
  details: entryTypeSchema.array(),
  note: z.string(),
  file: z.string(),
  entry_number: z.string(),

});

export type OpeningBalanceFromValues = z.infer<typeof openingBalanceSchema>

export const openingBalanceRow = entryRow

export type OpeningBalanceRow = z.infer<typeof openingBalanceRow>


import { z } from "zod";
import { entryRow, entrySchema } from "./entry";

export const openingBalanceSchema = entrySchema.omit({entry_number: true})

export type OpeningBalanceFromValues = z.infer<typeof openingBalanceSchema>

export const openingBalanceRow = entryRow

export type OpeningBalanceRow = z.infer<typeof openingBalanceRow>


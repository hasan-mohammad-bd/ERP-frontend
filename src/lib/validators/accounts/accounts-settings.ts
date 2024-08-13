
import {z} from "zod";
import { currencyRow } from "./currency";

const currencyRowWithId = currencyRow.pick({
  id: true,
})


export const AccountsSettingsSchema = z.object({
  currency_id: z.coerce.number({required_error: "Currency is required"}),
  multi_currency: z.coerce.number().optional().nullable(),
  currencies: currencyRowWithId.array().optional().nullable(),

});

export type AccountsSettingsFromValues = z.infer<typeof AccountsSettingsSchema>;

const  accountsSettingsRow = z.object({
  currency: currencyRow,
  currency_id: z.coerce.number(),
  multi_currency: z.coerce.number(),
  currencies: currencyRow.array(),
})

export type AccountsSettingsRow = z.infer<typeof accountsSettingsRow>;











import { z } from "zod";

export const currencyRow = z.object({
  id: z.coerce.number(),
  symbol: z.string(), 
  name: z.string(),
  symbol_native: z.string(),
  decimal_digits: z.coerce.number(),
  rounding: z.coerce.number(),
  code: z.string(),
  name_plural: z.string(),
  rate: z.coerce.number(),
});

export type CurrencyRow = z.infer<typeof currencyRow>;


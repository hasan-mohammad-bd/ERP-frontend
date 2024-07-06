import { z } from "zod";
import { currencyRow } from "./currency";

export const subAccountSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	type: z.enum(["None", "Employee", "Customer", "Supplier", "Agent"]),
	phone: z.string().min(10, {
		message: "Phone number must be at least 10 characters.",
	}),
});

export type SubAccountFromValues = z.infer<typeof subAccountSchema>;

const subAccountRow = subAccountSchema.extend({
	id: z.coerce.number(),
	currency: currencyRow
});

export type SubAccountRow = z.infer<typeof subAccountRow>;

import { z } from "zod";

export const financialYearSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	start_date: z.string().date(),
	end_date: z.string().date(),
});

export type FinancialYearFromValues = z.infer<typeof financialYearSchema>;

const financialYearRow = financialYearSchema.extend({
	id: z.coerce.number(),
	is_active: z.coerce.number(),
	is_closed: z.coerce.number(),
});

export type FinancialYearRow = z.infer<typeof financialYearRow>;

import { z } from "zod";

export const purchaseReportSchema = z.object({
	// name: z.string().min(2, {
	// 	message: "Name must be at least 2 characters.",
	// }),
	start_date: z.string().date(),
	end_date: z.string().date(),
});

export type PurchaseReportFromValues = z.infer<typeof purchaseReportSchema>;

export const purchaseReportRow = purchaseReportSchema.extend({
	id: z.coerce.number(),

});

export type PurchaseReportRow = z.infer<typeof purchaseReportRow>;

import { z } from "zod";



export const ledgerRow = z.object({
	id: z.coerce.number(),
	code: z.string(),
	name: z.string(),
	parent_id: z.coerce.number(),
	is_active: z.coerce.number().optional().nullable(),
	is_ledger: z.coerce.number().optional().nullable(),
	type: z.string().optional().nullable(),
	nature: z.string().optional().nullable(),
	is_sub_type: z.coerce.number().optional().nullable(),
	sub_type: z.string().optional().nullable(),
	sorting_index: z.coerce.number().optional().nullable(),
	description: z.string().optional().nullable(),
});

export type LedgerRow = z.infer<typeof ledgerRow>;

// ledger Group

export const LedgerGroupSchema = z.object({
	code: z.string().optional().nullable(),
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	parent_id: z.coerce.number(),
});

export type LedgerGroupFromValues = z.infer<typeof LedgerGroupSchema>;

// Explicitly annotate the type to handle recursion
type LedgerGroupRowType = {
	id: number;
	code: string;
	name: string;
	parent_id: number;
	description?: string | null;
	is_active?: number | null;
	is_default?: number | null;
	sorting_index?: number | null;
	childs_group: LedgerGroupRowType[];
	ledgers: LedgerRow[];
	balance: number;
};

export const balanceSheet: z.ZodType<LedgerGroupRowType> = z.lazy(() =>
	z.object({
		id: z.coerce.number(),
		code: z.string(),
		name: z.string(),
		parent_id: z.coerce.number(),
		description: z.string().optional().nullable(),
		is_active: z.coerce.number().optional().nullable(),
		is_default: z.coerce.number().optional().nullable(),
		sorting_index: z.coerce.number().optional().nullable(),
    nature: z.string().optional().nullable(),
    cr_amount: z.number(),
    dr_amount: z.number(),
    balance: z.number(),
    dr_balance: z.number(),
    cr_balance: z.number(),
		childs_group: z.array(balanceSheet),
		ledgers: z.array(ledgerRow),

	})
);

export type BalanceSheetRow = z.infer<typeof balanceSheet>;

// ledger group Array

/* export const ledgerGroupArrayRow = z.object({
	id: z.coerce.number(),
	code: z.string(),
	name: z.string(),
	type: z.string(),
	parent_id: z.coerce.number(),
	description: z.string().optional().nullable(),
	is_active: z.coerce.number().optional().nullable(),
	is_default: z.coerce.number().optional().nullable(),
	sorting_index: z.coerce.number().optional().nullable(),
});

export type LedgerGroupArrayRow = z.infer<typeof ledgerGroupArrayRow>; */

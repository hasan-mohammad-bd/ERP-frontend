
import { type ColumnDef } from "@tanstack/react-table";


import { GeneralLedgerRow } from "@/lib/validators/accounts/general-ledger";

export const generalLedgerColumns: ColumnDef<GeneralLedgerRow>[] = [

	{
		accessorKey: "name",
		header: "Account",
	}
	,

	{
		accessorKey: "dr_amount",
		header: "Debit",
	},
	{
		accessorKey: "cr_amount",
		header: "Credit",
	},

	{
		accessorKey: "balance",
		header: "Balance",
	},
	{
		accessorKey: "cr_balance",
		header: "Credit Balance",
	},
	{
		accessorKey: "dr_balance",
		header: "Debit Balance",
	}



];

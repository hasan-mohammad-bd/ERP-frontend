
import { type ColumnDef } from "@tanstack/react-table";


import { GeneralLedgerRow } from "@/lib/validators/accounts/general-ledger";

import { CellActionDynamicGeneralRoute } from "./cell-action-dynamc-route";

export const generalLedgerColumns: ColumnDef<GeneralLedgerRow>[] = [

	{
		accessorKey: "code",
		header: "Account Code",
	}
	,
	{
		accessorKey: "name",
		header: "Account",
		cell: ({ row }) => <CellActionDynamicGeneralRoute rowData={row.original} />,
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

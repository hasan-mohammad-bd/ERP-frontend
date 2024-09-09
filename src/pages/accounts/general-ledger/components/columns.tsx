
import { type ColumnDef } from "@tanstack/react-table";


import { GeneralLedgerRow } from "@/lib/validators/accounts/general-ledger";

import { CellActionDynamicGeneralRoute } from "./cell-action-dynamc-route";
import { FormatIndianCurrency } from "@/utils/indian-formate";

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
		cell: ({ row }) => <FormatIndianCurrency amount={row.original.dr_amount} />,
	},
	{
		accessorKey: "cr_amount",
		header: "Credit",
		cell: ({ row }) => <FormatIndianCurrency amount={row.original.cr_amount} />,
	},

	{
		accessorKey: "balance",
		header: "Balance",
		cell: ({ row }) => <FormatIndianCurrency amount={row.original.balance} />,
	},
	{
		accessorKey: "cr_balance",
		header: "Credit Balance",
		cell: ({ row }) => <FormatIndianCurrency amount={row.original.cr_balance} />,

	},
	{
		accessorKey: "dr_balance",
		header: "Debit Balance",
		cell: ({ row }) => <FormatIndianCurrency amount={row.original.dr_balance} />,
	}



];

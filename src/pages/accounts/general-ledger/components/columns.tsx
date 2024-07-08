import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

import { GeneralLedgerRow } from "@/lib/validators/accounts/general-ledger";

export const subAccountColumns: ColumnDef<GeneralLedgerRow>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
				className="translate-y-[2px]"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
				className="translate-y-[2px]"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: "Name",
	}
	,
	{
		accessorKey: "type",
		header: "Type",
	},

/* 	{
		accessorKey: "nature",
		header: "Default Account Type",
	},
	{
		accessorKey: "sub_type",
		header: "Contact",
	}, */
	{
		accessorKey: "cr_amount",
		header: "Credit",
	},
	{
		accessorKey: "dr_amount",
		header: "Debit",
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
	,





/* 	{
		header: "Location",
		accessorFn: (row) => row.location.name,
	},

	{
		header: "User",
		accessorFn: (row) => row.user.name,
	},

	{
		header: "Financial Year",
		accessorFn: (row) => row.financial_year.name,
	}, */

/* 	{
		accessorKey: "is_active",
		header: "Active",
		cell: ({ row }) => {
			const active = row.getValue("is_active");
			if (active === 1) {
				return (
					<Checkbox
						aria-readonly
						checked
						aria-label="Active"
						className="translate-y-[2px]"
					/>
				);
			}
			return (
				<Checkbox disabled aria-label="Active" className="translate-y-[2px]" />
			);
		},
	},
	{
		accessorKey: "is_closed",
		header: "Closed",
		cell: ({ row }) => {
			const closed = row.getValue("is_closed");
			if (closed === 1) {
				return (
					<Checkbox
						aria-readonly
						checked
						aria-label="Closed"
						className="translate-y-[2px]"
					/>
				);
			}
			return (
				<Checkbox disabled aria-label="Closed" className="translate-y-[2px]" />
			);
		},
	}, */
	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction rowData={row.original} />,
	},
];

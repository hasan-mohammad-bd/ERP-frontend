import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { EntryRow } from "@/lib/validators/accounts";
import { CellAction } from "./cell-action";
import { CellActionVoucherDetails } from "@/components/common/accounts/entry/cell-action-voucher-details";

export const subAccountColumns: ColumnDef<EntryRow>[] = [
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
		accessorKey: "entry_number",
		header: "PV No.",
		cell: ({ row }) => <CellActionVoucherDetails rowData={row.original} />,
	},
	{
		accessorKey: "type",
		header: "Type",
	},
	{
		accessorKey: "date",
		header: "Date",
	},
	{
		accessorKey: "total",
		header: "Total",
	},

	{
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
	},

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

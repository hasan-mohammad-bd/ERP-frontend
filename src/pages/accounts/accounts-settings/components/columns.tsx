import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { AccountsSettingsRow, CurrencyRow } from "@/lib/validators/accounts";

export const accountSettingsColumns: ColumnDef<AccountsSettingsRow>[] = [
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
		accessorKey: "",
		header: "Financial Year Name",
		accessorFn: ({currency}) => currency?.code
	},
	{
		accessorKey: "",
		header: "Currencies",
		cell: ({ row }) => {
			const currencies: CurrencyRow[] = row.getValue("currencies");
			const currencyCodes = currencies.map((currency: CurrencyRow) => currency?.code).join(", ");
			return (
				<div>{currencyCodes}</div>
			);
		},
	},


	{
		accessorKey: "currency_id",
		header: "currency_id",
	},
	{
		accessorKey: "type",
		header: "Type",
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
	},
/* 	{
		id: "actions",
		enableSorting: false,
		cell: ({ row }) => <CellAction rowData={row.original} />,
	}, */
];

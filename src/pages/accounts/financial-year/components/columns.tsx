import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { FinancialYearRow } from "@/lib/validators/accounts";
import { CellAction } from "./cell-action";



export const financialYearColumns: ColumnDef<FinancialYearRow>[] = [
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
		header: "Financial Year Name",
	},
	{
		accessorKey: "start_date",
		header: "Start Date",
	},
	{
		accessorKey: "end_date",
		header: "End Date",
	},
	{
		accessorKey: "is_active",
		header: "Status",
		cell: ({ row }) => {
			const active = row.getValue("is_active");
			if (active === 1) {
				return (
					<span className="text-green-600  text-[12px] py-1 px-2 bg-green-100 rounded-xl">Active</span>
				);
			}
			return (
				<span className="text-red-600 text-[12px] py-1 px-2 bg-red-100 rounded-xl">Inactive</span>
			);
		},
	},
	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction rowData={row.original} />,
	},
];

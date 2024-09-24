import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { LeaveTypeRow } from "@/lib/validators/hrm/leave";

export const attendanceColumns: ColumnDef<LeaveTypeRow>[] = [
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
		header: "Leave name",
	},

	{
		accessorKey: "short_code",
		header: "Short code",
	},
	{
		accessorKey: "maternity_leave",
		header: "Maternity Leave",
		cell: ({ row }) => row.original.maternity_leave ? "Yes" : "No",
	},

	{
		accessorKey: "unpaid_leave",
		header: "Unpaid Leave",
		cell: ({ row }) => row.original.unpaid_leave ? "Yes" : "No",
	},




	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];

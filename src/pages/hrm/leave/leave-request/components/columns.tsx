import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { LeaveRequestRow } from "@/lib/validators/hrm/leave";
import { getFormattedDateTime } from "@/utils/format-dates";


export const attendanceColumns: ColumnDef<LeaveRequestRow>[] = [
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
	// {
	// 	accessorKey: "date",
	// 	header: "Date",
	// },

	{
		accessorKey: "name",
		header: "Employee name",
		cell: ({ row }) => row.original.employee.first_name + " " + row.original.employee.last_name
	},
	{
		accessorKey: "leave_type",
		header: "Leave type",
		cell: ({ row }) => row.original.leave_type.name
	},
	{
		accessorKey: "start_date_time",
		header: "Start Date",
		cell: ({ row }) => getFormattedDateTime(row.original.start_date_time)
	},
	{
		accessorKey: "end_date_time",
		header: "End Date",
		cell: ({ row }) => getFormattedDateTime(row.original.end_date_time)
	},
	{
		accessorKey: "status",
		header: "Status",
	},
	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];

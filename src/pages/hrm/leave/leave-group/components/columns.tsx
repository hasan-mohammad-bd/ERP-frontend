import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { AttendancePolicyRow } from "@/lib/validators/hrm/attendance.vatidator";

export const attendanceColumns: ColumnDef<AttendancePolicyRow>[] = [
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
		accessorKey: "leave_group_name",
		header: "Leave group name",
	},

	{
		accessorKey: "number_of_leave_type",
		header: "Number of leave type",
	},
	{
		accessorKey: "total_leave",
		header: "Total Leave",
	},

	{
		accessorKey: "employee_count",
		header: "Employee Count",
	},




	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];

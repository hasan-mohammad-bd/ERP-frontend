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
		accessorKey: "leave_name",
		header: "Leave name",
	},

	{
		accessorKey: "short_code",
		header: "Short code",
	},
	{
		accessorKey: "maternity_leave",
		header: "Maternity Leave",
	},

	{
		accessorKey: "unpaid_leave",
		header: "Unpaid Leave",
	},




	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];

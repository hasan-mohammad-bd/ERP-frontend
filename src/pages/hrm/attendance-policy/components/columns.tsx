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
		accessorKey: "policy_name",
		header: "Policy Name",
	},

	{
		accessorKey: "in_time",
		header: "In Time",
	},
	{
		accessorKey: "delay_buffer",
		header: "Delay Buffer",
	},
	{
		accessorKey: "ex_delay_buffer",
		header: "Ex Delay Buffer",
	},
	{
		accessorKey: "last_in_time",
		header: "Last In Time",
	},
	{
		accessorKey: "ignore_from_att_report",
		header: "Ignore from att report",
	},
	{
		accessorKey: "discard_attendance_on_weekend",
		header: "Discard attendance on weekend",
	},


	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];

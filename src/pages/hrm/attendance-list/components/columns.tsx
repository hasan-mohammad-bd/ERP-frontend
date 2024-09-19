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
		accessorKey: "employee_id",
		header: "Employee ID",
	},

	{
		accessorKey: "employee_name",
		header: "Employee Name",
	},
	{
		accessorKey: "department",
		header: "Department",
	},
	{
		accessorKey: "branch",
		header: "Branch",
	},
	{
		accessorKey: "date",
		header: "Date",
	},
	{
		accessorKey: "day",
		header: "Day",
	},
	{
		accessorKey: "out_time",
		header: "Out Time",
	},
	{
		accessorKey: "status",
		header: "Status",
	},

	// {
	// 	accessorKey: "employee_count",
	// 	header: "Employee Count",
	// },




	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];

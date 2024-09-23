import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { AttendancePolicyRow } from "@/lib/validators/hrm/attendance-policy";



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
		accessorKey: "name",
		header: "Policy Name",
	},

	{
		accessorKey: "in_time",
		header: "In Time",
	},
	{
		accessorKey: "delay_buffer_time",
		header: "Delay Buffer",
	},
	{
		accessorKey: "ex_delay_buffer_time",
		header: "Ex Delay Buffer",
	},
	{
		accessorKey: "break_time",
		header: "Break Time",
	},
	// {
	// 	accessorKey: "effective_from",
	// 	header: "Effective From",
	// }
	// ,
	{
		accessorKey: "working_hour",
		header: "Working Hours",
	},
	{
		accessorKey: "out_time",
		header: "Out Time",
	}
	,
	{
		accessorKey: "ignore_overtime",
		header: "Ignore Overtime",
		//if the value is 1 then yes if 0 then no
		cell: ({ row }) => {
			if (row.original.ignore_overtime === 1) {
				return "Yes";
			} else {
				return "No";
			}
		}
	},
	{
		accessorKey: "exclude_attendance_report",
		header: "Ignore from att report",
		//if the value is 1 then yes if 0 then no
		cell: ({ row }) => {
			if (row.original.exclude_attendance_report === 1) {
				return "Yes";
			} else {
				return "No";
			}
		}
	},
	{
		accessorKey: "discard_weekend_attendance",
		header: "Discard attendance on weekend",
		//if the value is 1 then yes if 0 then no
		cell: ({ row }) => {
			if (row.original.discard_weekend_attendance === 1) {
				return "Yes";
			} else {
				return "No";
			}
		}
	},


	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];

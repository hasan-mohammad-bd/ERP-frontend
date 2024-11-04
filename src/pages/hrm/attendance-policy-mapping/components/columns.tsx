import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { EmployeeAttendancePolicyRow } from "@/lib/validators/hrm/attendance-policy-mapping";

export const attendanceColumns: ColumnDef<EmployeeAttendancePolicyRow>[] = [
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
    accessorKey: "effective_date",
    header: "Effective Date",
  },
  {
    // accessorKey: "maternity_leave",
    header: "Policy Name",
    cell: ({ row }) => row.original.attendance_policy.name,
  },

  {
    accessorKey: "",
    header: "Employee Name",
    cell: ({ row }) =>
      row.original?.employee?.first_name + " " + row.original?.employee?.last_name,
  },
  // {
  //   header: "Department",
  //   cell: ({ row }) => row.original.employee.department?.name,
  // },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

import { Checkbox } from "@/components/ui/checkbox";
import { LeaveGroupRow } from "@/lib/validators/hrm/leave";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const attendanceColumns: ColumnDef<LeaveGroupRow>[] = [
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
    header: "Leave group name",
  },
  {
    accessorKey: "Leave Types",
    cell: ({ row }) =>
      row.original.leave_group_types.map((leave_type) => (
        <div className="py-1">{leave_type.leave_type.name}</div>
      )),
  },
  {
    accessorKey: "Leave Count",
    cell: ({ row }) =>
      row.original.leave_group_types.map((leave_type) => (
        <div className="py-1">{leave_type.leave_count}</div>
      )),
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

import { Checkbox } from "@/components/ui/checkbox";
import { ScheduleColumn } from "@/lib/validators";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { getFormattedTime } from "@/utils/format-dates";

export const scheduleColumns: ColumnDef<ScheduleColumn>[] = [
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
    header: "Shift Name",
  },
  {
    accessorKey: "start_time",
    header: "Start Time",
    cell: ({ row }) => <span>{getFormattedTime(row.original.start_time)}</span>,
  },
  {
    accessorKey: "end_time",
    header: "End Time",
    cell: ({ row }) => <span>{getFormattedTime(row.original.end_time)}</span>,
  },
  {
    accessorKey: "hour",
    header: "Hour",
  },
  {
    accessorKey: "",
    accessorFn: ({ organization }) => organization?.name,
    header: "Organization",
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

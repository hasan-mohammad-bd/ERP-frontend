import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { HolidayFormRows } from "@/lib/validators/hrm/holidays";

// Define columns for the holidays table
export const holidayColumns: ColumnDef<HolidayFormRows>[] = [
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
    header: "Name",
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    cell: ({ row }) => {
      const startDate = row.original.start_date;
      return startDate ? new Date(startDate).toLocaleDateString() : "N/A"; // Handle undefined case
    },
  },
  {
    accessorKey: "end_date",
    header: "End Date",
    cell: ({ row }) => {
      const endDate = row.original.end_date;
      return endDate ? new Date(endDate).toLocaleDateString() : "N/A"; // Handle undefined case
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "note",
    header: "Note",
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

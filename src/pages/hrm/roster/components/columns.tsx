import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { RosterColumn } from "@/lib/validators";
import { CellAction } from "./cell-action";

export const rosterColumns: ColumnDef<RosterColumn>[] = [
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

/*   {
    accessorKey: "hour",
    header: "Hour",
  }, */

  {
    accessorKey: "",
    accessorFn: ({ date }) => date?.date,
    header: "Date",
  },
  {
    accessorKey: "",
    accessorFn: ({ schedule }) => schedule?.start_time,
    header: "Schedule Start time",
  },
  {
    accessorKey: "",
    accessorFn: ({ schedule }) => schedule?.end_time,
    header: "Schedule End time",
  },
  {
    accessorKey: "",
    accessorFn: ({ schedule }) => schedule?.hour,
    header: "Schedule Hour",
  },
  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

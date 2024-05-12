import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { ExperienceColumn } from "@/lib/validators";
import { CellActionExperience } from "./cell-action-experience";

export const experienceColumns: ColumnDef<ExperienceColumn>[] = [
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
    accessorKey: "institution",
    header: "Institution",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "start_date",
    header: "Start date",
  },



  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => <CellActionExperience data={row.original} />,
  },
];

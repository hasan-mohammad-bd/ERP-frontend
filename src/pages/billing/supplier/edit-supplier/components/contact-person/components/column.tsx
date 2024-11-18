import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { CustomerColumn } from "@/lib/validators/billing/customer";

export const contactPersonColumn: ColumnDef<CustomerColumn>[] = [
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
    cell: ({ row }) => <>{row.original.name}</>, // Displaying actual customer name
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <>{row.original.email}</>, // Displaying email
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <>{row.original.phone}</>, // Displaying phone
  },
  {
    accessorKey: "note",
    header: "Note",
    cell: ({ row }) => <>{row.original.note}</>, // Displaying phone
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />, // Actions for each row
  },
];

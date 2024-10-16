import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { EmployeeColumn } from "@/lib/validators";
import { CellAction } from "./cell-action";

export const itemColumns: ColumnDef<EmployeeColumn>[] = [
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
    header: "Item Name",
    cell: () => <>Demo Product</>
  },
  {
    accessorKey: "sku",
    header: "SKU",
    cell: () => <>sk-123</>,
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: () => <>Demo Brand</>,
  },

  {
    accessorKey: "primary_unit",
    header: "Primary Unit",
    cell: () => <>Pcs</>,
  },
  {
    accessorKey: "type",
    header: "Item Type",
    cell: () => <>Demo Type</>,
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

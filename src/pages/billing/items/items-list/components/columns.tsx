import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { ItemRow } from "@/lib/validators/billing/items";

export const itemRows: ColumnDef<ItemRow>[] = [
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
    
  },
  {
    accessorKey: "sku",
    header: "SKU",

  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({row}) => row.original.brand.name
  },

  {
    accessorKey: "primary_unit",
    header: "Primary Unit",
    cell: ({row}) => row.original.primary_unit.name
  },
  {
    accessorKey: "type",
    header: "Item Type",
    cell: ({row}) => row.original.item_nature
    
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

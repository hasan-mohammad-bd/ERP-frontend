import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { ItemStockDataType } from "@/store/services/billing/api/items/types";

export const stockColumns: ColumnDef<ItemStockDataType>[] = [
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
    accessorKey: "item_name",
    header: "Item Name",
    cell: ({ row }) => <div className="py-2">{row.original.item_name}</div>,
  },
  {
    accessorKey: "warehouse_name",
    header: "Warehouse Name",
    cell: ({ row }) => <>{row.original.warehouse_name}</>,
  },
  {
    accessorKey: "stock_quantity",
    header: "Stock Quantity",
  },
  {
    accessorKey: "avg_price",
    header: "Price",
  },
];

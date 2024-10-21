import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { FormatIndianCurrency } from "@/utils/indian-formate";

export const salesReceiptColumns: ColumnDef<any>[] = [
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
    accessorKey: "paymentNo", // Change this to match your data structure
    header: "Payment No",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "mode",
    header: "Mode", // Assuming 'mode' is a relevant column
  },
  {
    accessorKey: "customerName",
    header: "Customer Name", // Adjusted to match your data
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => <FormatIndianCurrency amount={parseFloat(row.original.amount)} />, // Ensure the amount is parsed as a number
  },
  {
    accessorKey: "unusedAmount",
    header: "Unused Amount", // Optional: if you want to display this column
    cell: ({ row }) => <FormatIndianCurrency amount={parseFloat(row.original.unusedAmount)} />, // Ensure the amount is parsed as a number
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

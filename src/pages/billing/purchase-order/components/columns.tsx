import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { PurchaseOrderResponse } from "@/lib/validators/billing/billing-responses";
import { getFormattedDate } from "@/utils/format-dates";

export const purchaseOrderColumns: ColumnDef<PurchaseOrderResponse>[] = [
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
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => getFormattedDate(row.original.date || ""),
  },
  {
    accessorKey: "invoice_number",
    header: "Invoice Number",
    cell: ({ row }) => <>{row.original.invoice_number}</>,
  },
  {
    accessorKey: "contact.name",
    header: "Supplier Name",
  },
  {
    accessorKey: "contact.phone",
    header: "Supplier Phone",
  },

  {
    accessorKey: "delivery_date",
    header: "Delivery Date",
    cell: ({ row }) => (
      <>{getFormattedDate(row.original?.delivery_date || "")}</>
    ),
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => (
      <>{getFormattedDate(row?.original?.delivery_date || "")}</>
    ),
  },
  {
    accessorKey: "total",
    header: "Total",
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

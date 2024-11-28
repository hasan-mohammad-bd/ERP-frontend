import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
// import { FormatIndianCurrency } from "@/utils/indian-formate";
// import { QuotationRow } from "@/lib/validators/billing/quotation";
import { PurchaseOrderRow } from "@/lib/validators/billing/purchase-order";

export const purchaseOrderColumns: ColumnDef<PurchaseOrderRow>[] = [
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
    cell: ({ row }) => <>{row.original.date}</>,
  },
  {
    accessorKey: "invoice_number",
    header: "Invoice Number",
    cell: ({ row }) => <>{row.original.invoice_number}</>,
  },
  {
    accessorKey: "delivery_date",
    header: "Delivery Date",
    // cell: ({ row }) => <>{row.original.reference}</>,
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    // cell: ({ row }) => <>{row?.original?.contacts?.name}</>,
  },
  {
    accessorKey: "discount",
    header: "Discount",
    // cell: ({ row }) => <>{row?.original?.contacts?.name}</>,
  },
  {
    accessorKey: "shipping_charges",
    header: "Shipping Charges",
    // cell: ({ row }) => <>{row?.original?.contacts?.name}</>,
  },
  {
    accessorKey: "total",
    header: "Total",
    // cell: ({ row }) => <>{row?.original?.contacts?.name}</>,
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

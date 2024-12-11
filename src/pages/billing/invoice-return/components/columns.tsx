import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
// import { FormatIndianCurrency } from "@/utils/indian-formate";
// import { QuotationRow } from "@/lib/validators/billing/quotation";

import { PurchaseReturnRow } from "@/lib/validators/billing/return";

export const purchaseOrderColumns: ColumnDef<PurchaseReturnRow>[] = [
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
    accessorKey: "return_reason",
    header: "Supplier",
    cell: ({ row }) => <>{row.original.contact.name}</>,
  },
  {
    accessorKey: "total",
    header: "Total Amount",
    // cell: ({ row }) => <>{row.original.reference}</>,
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

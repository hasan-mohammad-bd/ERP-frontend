import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { FormatIndianCurrency } from "@/utils/indian-formate";
import { BillingPaymentRow } from "@/lib/validators/billing/billing-payment";

export const supplierPaymentColumns: ColumnDef<BillingPaymentRow>[] = [
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
    accessorKey: "invoice_number",
    header: "Invoice No",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "contact",
    header: "Supplier Name",
    cell: ({ row }: { row: { original: { contact: { name: string } } } }) =>
      row.original.contact.name,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <FormatIndianCurrency amount={parseFloat(String(row.original.amount))} />
    ),
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

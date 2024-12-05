import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { FormatIndianCurrency } from "@/utils/indian-formate";
import { renderStatus } from "@/lib/render-status";
import { Link } from "react-router-dom";

export const invoiceColumns: ColumnDef<any>[] = [
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
  },
  {
    accessorKey: "invoice_number",
    header: "Invoice Number",
    cell: ({ row }) => (
      <Link
        to={`/billing/invoices/view/${row.original.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.original.invoice_number}
      </Link>
    ),
  },
  {
    accessorKey: "subject",
    header: "Subject",
  },
  {
    accessorKey: "reference",
    header: "Reference No",
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
  },
  {
    accessorKey: "total",
    header: "Amount",
    cell: ({ row }) => (
      <FormatIndianCurrency amount={Number(row.original.total)} />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => renderStatus(row.original?.status),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

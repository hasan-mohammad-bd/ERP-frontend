import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { FormatIndianCurrency } from "@/utils/indian-formate";
import { QuotationRow } from "@/lib/validators/billing/quotation";
import { Link } from "react-router-dom";

export const quotesColumns: ColumnDef<QuotationRow>[] = [
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
    accessorKey: "quote_number",
    header: "Quote Number",
    cell: ({ row }) => (
      <Link
        to={`/billing/quotation-details-ui/${row.original.id}`}
        className="text-blue-600 hover:underline"
      >
        {row.original.invoice_number}
      </Link>
    ),
  },
  {
    accessorKey: "reference",
    header: "Reference Number",
    cell: ({ row }) => <>{row.original.reference}</>,
  },
  {
    accessorKey: "contacts",
    header: "Customer Name",
    cell: ({ row }) => <>{row.original.contact.name}</>,
  },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  // },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <FormatIndianCurrency amount={Number(row.original.total)} />
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

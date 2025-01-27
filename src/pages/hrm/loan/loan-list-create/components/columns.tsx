import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { LoanRow } from "@/lib/validators/hrm/loan";

export const loanColumns: ColumnDef<LoanRow>[] = [
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
  // {
  // 	accessorKey: "date",
  // 	header: "Date",
  // },

  {
    accessorKey: "name",
    header: "Employee name",
    cell: ({ row }) =>
      row.original?.employee?.first_name + " " + row.original?.employee?.last_name,
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => row.original.subject,
  },
  {
    accessorKey: "loan_request_amount",
    header: "Loan Request Amount",
    // cell: ({ row }) => getFormattedDateTime(row.original?.loan_request_amount),
  },
  {
    accessorKey: "refundable_amount",
    header: "Refundable Amount",
    // cell: ({ row }) => getFormattedDateTime(row.original?.refundable_amount),
  },
  {
    accessorKey: "installment_amount",
    header: "Installment Amount",
    // cell: ({ row }) => getFormattedDateTime(row.original?.refundable_amount),
  },
  {
    accessorKey: "total_installments",
    header: "Total Installments",
    // cell: ({ row }) => getFormattedDateTime(row.original?.refundable_amount),
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

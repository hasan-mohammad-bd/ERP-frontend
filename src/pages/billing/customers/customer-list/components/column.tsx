import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
// import { CustomerColumn } from "@/lib/validators"; // Changed to CustomerColumn for accuracy
import { CellAction } from "./cell-action";
import { CustomerColumn } from "@/lib/validators/billing/customer";

export const customerColumn: ColumnDef<CustomerColumn>[] = [
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
    header: "Name",
    cell: ({ row }) => <>{row.original.name}</>, // Displaying actual customer name
  },
  {
    accessorKey: "companyName",
    header: "Company Name",
    cell: ({ row }) => <>{row.original.company_name}</>, // Displaying company name
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <>{row.original.email}</>, // Displaying email
  },
  {
    accessorKey: "workPhone",
    header: "Work Phone",
    cell: ({ row }) => <>{row.original.work_phone}</>, // Displaying work phone
  },
  // {
  //   accessorKey: "receivablesBCY",
  //   header: "Receivables (BCY)",
  //   cell: ({ row }) => <FormatIndianCurrency amount={row.original.id} />, // Format currency
  // },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />, // Actions for each row
  },
];

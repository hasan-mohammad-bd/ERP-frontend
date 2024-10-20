import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { EmployeeColumn } from "@/lib/validators";
import { CellAction } from "./cell-action";

export const SupplierColumns: ColumnDef<EmployeeColumn>[] = [
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
    cell: () => <>Demo Name</>,
  },
  {
    accessorKey: "company_name",
    header: "Company Name",
    cell: () => <>Demo Company</>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: () => <>10/20/2024</>,
  },
  {
    accessorKey: "mobile_number",
    header: "Mobile Number",
    cell: () => <>01645958942</>,
  },

  {
    accessorKey: "email",
    header: "Email Address",
    cell: () => <>Demo@Email.com</>,
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

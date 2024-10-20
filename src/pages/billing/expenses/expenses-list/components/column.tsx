import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { EmployeeColumn } from "@/lib/validators";
import { CellAction } from "./cell-action";

export const ExpensesColumns: ColumnDef<EmployeeColumn>[] = [
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
    accessorKey: "expenses_category",
    header: "Expenses Category",
    cell: () => <>Demo Category</>,
  },
  //   {
  //     accessorKey: "sku",
  //     header: "SKU",
  //     cell: () => <>sk-123</>,
  //   },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: () => <>Demo amount</>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: () => <>10/20/2024</>,
  },

  {
    accessorKey: "note",
    header: "Note",
    cell: () => <>Demo note</>,
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

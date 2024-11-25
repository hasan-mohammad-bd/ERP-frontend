import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { PaymentTermRow } from "@/lib/validators/billing/payment-terms";
import { renderStatus } from "@/lib/render-status";

export const PaymentTermsColumns: ColumnDef<PaymentTermRow>[] = [
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
    cell: ({ row }) => <>{row.original.name}</>,
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => <>{row.original.value}</>,
  },

  {
    accessorKey: "is_default",
    header: "Is Default",
    cell: ({ row }) => renderStatus(row.getValue("is_default") ? 1 : 0),
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

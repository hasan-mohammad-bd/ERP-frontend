import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { renderStatus } from "@/lib/render-status";

import { AttributeRow } from "@/lib/validators/billing/attributes";

export const attributeColumn: ColumnDef<AttributeRow>[] = [
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
        className="translate-y-[2px] my-3"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: "Attribute Name",
  },
  {
    header: "Attribute Category Name",
    cell: ({ row }) => row.original.attribute_category.name,
  },

  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div className="w-[400px]">{row.original.description}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => renderStatus(row.getValue("status")),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { LedgerGroupColumn } from "@/lib/validators";

// Recursive component to render nested items


export const chartOfAccountColumns: ColumnDef<LedgerGroupColumn>[] = [
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
  },
/*   {
    accessorKey: "childs_group",
    header: "Items",
    cell: ({ row }) => {
      const items = row.getValue("childs_group");
      return <NestedChild items={items} />;
    },
  }, */

  {
    accessorKey: "is_active",
    header: "Active",
    cell: ({ row }) => {
      const active = row.getValue("is_active");
      return (
        <Checkbox
          aria-readonly
          checked={active === 1}
          aria-label="Active"
          className="translate-y-[2px]"
          disabled={active !== 1}
        />
      );
    },
  },

  {
    accessorKey: "is_default",
    header: "Default",
    cell: ({ row }) => {
      const isDefault = row.getValue("is_default");
      return (
        <Checkbox
          aria-readonly
          checked={isDefault === 1}
          aria-label="Default"
          className="translate-y-[2px]"
          disabled={isDefault !== 1}
        />
      );
    },
  },
  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

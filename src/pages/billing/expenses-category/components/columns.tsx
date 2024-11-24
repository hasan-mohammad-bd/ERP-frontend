import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CategoryFormValues, CategoryRow } from "@/lib/validators/billing/category";

export const categoryColumns: ColumnDef<CategoryRow>[] = [
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
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Avatar className="h-9 w-9">
        <AvatarImage src={row.getValue("image")} alt="Category Image" />
        <AvatarFallback>CI</AvatarFallback> {/* Fallback if image fails */}
      </Avatar>
    ),
  },

  {
    accessorKey: "name",
    header: "Category Name",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const statusValue = row.getValue("status");

      return statusValue === 1 ? (
        <Badge variant="secondary">Active</Badge>
      ) : (
        <Badge variant="destructive">Inactive</Badge>
      );
    },
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Attachment } from "@/lib/validators/billing/customer-supplier";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const contactPersonColumn: ColumnDef<Attachment>[] = [
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
    accessorKey: "thumbnail",
    header: "Image",
    cell: ({ row }) => (
      <Avatar className="h-9 w-9">
        <AvatarImage
          src={row.getValue("thumbnail")}
          alt="Customer Attachment Image"
        />
        <AvatarFallback>CI</AvatarFallback> {/* Fallback if image fails */}
      </Avatar>
    ),
  },

  {
    accessorKey: "file_name",
    header: "File Name",
    cell: ({ row }) => (
      <>
        <a
          href={row.original.path} // Assuming file.file_url contains the URL to the file
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          {row.original.file_name}
        </a>
      </>
    ), // Displaying actual customer name
  },
  {
    accessorKey: "file_type",
    header: "File Type",
    cell: ({ row }) => <>{row.original.file_type}</>, // Displaying email
  },

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />, // Actions for each row
  },
];

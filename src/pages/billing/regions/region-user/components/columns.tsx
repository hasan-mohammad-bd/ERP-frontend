import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import {
  RegionUserDataType,
  RegionUserType,
} from "@/store/services/billing/api/region-user/type";

export const regionUserColumns: ColumnDef<RegionUserDataType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue("image");
      return image ? (
        <img
          src={image as string}
          alt="image"
          className="h-8 w-8 rounded-full"
        />
      ) : null;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "region_user",
    header: "Region Name",
    cell: ({ row }) => {
      const regionUser = row.getValue("region_user") as RegionUserType | null;
      return regionUser?.region?.name;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "user_target.target_amount",
    header: "Target",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./cell-action";
import { RoleRow } from "@/lib/validators/web/user-role";
import RoleBadge from "./badge";

export const subAccountColumns: ColumnDef<RoleRow>[] = [
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
    header: "Role Name",
  },

  {
    accessorKey: "permissions",
    header: "Permissions",
    //map the array of permissions to a string
    cell: ({ row }) => <RoleBadge rowData={row.original} />,
  },

  /* 	{
		accessorKey: "",
		header: "Currency",
	accessorFn: ({currency}) => {
		currency.name
	},
		
	}, */
  /* 	{
		accessorKey: "is_active",
		header: "Status",
		cell: ({ row }) => {
			const active = row.getValue("is_active");
			if (active === 1) {
				return (
					<Badge>Active</Badge>
				);
			}
			return (
				<Badge variant="destructive">Inactive</Badge>
			);
		},
	},
	{
		accessorKey: "is_closed",
		header: "Closed",
		cell: ({ row }) => {
			const closed = row.getValue("is_closed");
			if (closed === 1) {
				return (
					<Checkbox
						aria-readonly
						checked
						aria-label="Closed"
						className="translate-y-[2px]"
					/>
				);
			}
			return (
				<Checkbox disabled aria-label="Closed" className="translate-y-[2px]" />
			);
		},
	}, */
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

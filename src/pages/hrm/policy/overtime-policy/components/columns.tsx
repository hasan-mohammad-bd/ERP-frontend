// import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { HolidayColumn } from "@/lib/validators";
import { CellAction } from "./cell-action";

export const otPolicyColumns: ColumnDef<HolidayColumn>[] = [
  // {
  // 	id: "select",
  // 	header: ({ table }) => (
  // 		<Checkbox
  // 			checked={
  // 				table.getIsAllPageRowsSelected() ||
  // 				(table.getIsSomePageRowsSelected() && "indeterminate")
  // 			}
  // 			onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  // 			aria-label="Select all"
  // 			className="translate-y-[2px]"
  // 		/>
  // 	),
  // 	cell: ({ row }) => (
  // 		<Checkbox
  // 			checked={row.getIsSelected()}
  // 			onCheckedChange={(value) => row.toggleSelected(!!value)}
  // 			aria-label="Select row"
  // 			className="translate-y-[2px]"
  // 		/>
  // 	),
  // 	enableSorting: false,
  // 	enableHiding: false,
  // },

  {
    header: "Policy Name",
    accessorKey: "name",
  },
  {
    header: "Monthly Allowed OT",
    cell: () => <span>50.00</span>,
    // accessorKey: "ss",
  },
  {
    header: "Minimum countable minutes",
    cell: () => <span>10</span>,
    // accessorKey: "ds",
  },
  {
    header: "Count from actual intime",
    cell: () => <span>False</span>,
    // accessorKey: "ss",
  },

  {
    header: "Is Active",
    cell: () => <span>True</span>,
    // accessorKey: "",
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

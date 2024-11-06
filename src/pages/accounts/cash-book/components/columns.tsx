// import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { EntryRow } from "@/lib/validators/accounts";
import { CellActionVoucherDetails } from "@/components/common/accounts/entry/cell-action-voucher-details";
import { FormatIndianCurrency } from "@/utils/indian-formate";



export const cashBookColumns: ColumnDef<EntryRow>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
		
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "entry_number",
    header: "Entry Number",
    cell: ({ row }) => <CellActionVoucherDetails rowData={row.original} />,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => row.original.type === "Receipt Voucher" ? "Received Voucher" : row.original.type,
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => <FormatIndianCurrency amount={row.original.total as number} />,
  },

  {
    header: "Location",
    accessorFn: (row) => row?.location?.name,
  },

  // {
  //   header: "User",
  //   accessorFn: (row) => row?.user?.name,
  // },

  // {
  //   id: "actions",
  //   header: () => <div className="text-center">Actions</div>,
  //   enableSorting: false,
  //   cell: ({ row }) => <CellAction rowData={row.original} />,
  // },
];

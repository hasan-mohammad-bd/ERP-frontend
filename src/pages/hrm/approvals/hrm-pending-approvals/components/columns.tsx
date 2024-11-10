import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { ApprovalRequestRow } from "@/store/services/accounts/api/approvals/types";
import { CellAction } from "./cell-action";
// import { CellActionVoucherDetails } from "@/components/common/accounts/entry/cell-action-voucher-details";

export const approvalColumns: ColumnDef<ApprovalRequestRow>[] = [
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
    // accessorKey: "approval.module",
    header: "Module",
    cell: ({ row }) => (
      <div className="flex gap-2">
        {row.original.approval.module}{""}
        {/* <CellActionVoucherDetails rowData={row.original.approval?.sorce} /> */}
      </div>
    ),
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    // accessorKey: "user.username",
    header: "Requested By",
    cell: ({ row }) => (
      <span>
        {row.original.approval.user.name ?? row.original.approval.user.username}
      </span>
    ),
  },
  {
    // accessorKey: "level",
    header: "Approver Level",
	cell: ({ row }) => <div className="pl-4">{row.original.level}</div>
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const active = row.getValue("status");
      if (active === 1) {
        return (
          <span className="text-green-600  text-[12px] py-1 px-2 bg-green-100 rounded-xl">
            Approved
          </span>
        );
      }
      return (
        <span className="text-red-600 text-[12px] py-1 px-2 bg-red-100 rounded-xl">
          Not-Approved
        </span>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction rowData={row.original} />,
  },
];

import { type ColumnDef } from "@tanstack/react-table";
import { ApprovalRequestRow } from "@/store/services/accounts/api/approvals/types";

export const approvalColumns: ColumnDef<ApprovalRequestRow>[] = [
  {
    accessorKey: "approval.module",
    header: "Module",
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
    cell: ({ row }) => (
      <div className="pl-4 min-h-10 flex items-center">{row.original.level}</div>
    ),
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
];

import { LeaveBalanceColumn } from "@/lib/validators/hrm/leave-balance";
import { type ColumnDef } from "@tanstack/react-table";

// Helper function to format days and hours
const formatDaysAndHours = (days: number, hours: number) => {
  const formattedDays = days ? `${days} days` : "";
  const formattedHours = hours ? `${hours} hours` : "";
  return `${formattedDays} ${formattedHours}`.trim(); // Remove any trailing spaces
};

export const leaveBalanceColumns: ColumnDef<LeaveBalanceColumn>[] = [
  {
    id: "select",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "employee_unique_id",
    header: "Employee ID",
  },
  {
    accessorKey: "employee_name",
    header: "Employee Name",
    cell: ({ row }) => `${row.original.first_name} ${row.original.last_name}`,
  },
  {
    accessorKey: "available.total_days",
    header: "Total Entitlement (Days)",
    cell: ({ row }) => {
      const totalDays = row.original.available.total_days;
      return `${totalDays} days`; // Append "days" to the total days value
    },
  },
  {
    accessorKey: "taken",
    header: "Leave Taken (Days)",
    cell: ({ row }) => {
      const { total_days, total_hours } = row.original.taken;
      return formatDaysAndHours(total_days, total_hours);
    },
  },
  {
    accessorKey: "remaining_balance",
    header: "Remaining Balance (Days)",
    cell: ({ row }) => {
      const remainingDays =
        row.original.available.total_days - row.original.taken.total_days;
      const remainingHours =
        row.original.available.total_hours - row.original.taken.total_hours;
      return formatDaysAndHours(remainingDays, remainingHours);
    },
  },
];

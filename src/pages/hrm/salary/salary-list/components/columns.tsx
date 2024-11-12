import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { SalariesRow } from "@/store/services/hrm/api/salaries/types";
import { renderApprovalStatus } from "@/lib/render-status";
import { getFormattedMonthYear } from "@/utils/format-dates";

export const salaryListColumns: ColumnDef<SalariesRow>[] = [
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
        className="translate-y-[2px] my-3"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "salary_month",
    header: "Salary Month",
    cell: ({ row }) => getFormattedMonthYear(row.original?.salary_month),
  },
  {
    accessorKey: "date_of_generation",
    header: "Date of Generation",
  },
  {
    // accessorKey: "employee.first_name",
    header: "Employee Name",
    cell: ({ row }) =>
      row.original.employee.first_name + " " + row.original.employee.last_name,
  },
  {
    // accessorKey: "employee.first_name",
    header: "Employee ID",
    cell: ({ row }) => row.original.employee.employee_unique_id,
  },
  {
    header: "Approval Status",
    cell: ({ row }) => renderApprovalStatus(row.original.approval?.status),
  },
];

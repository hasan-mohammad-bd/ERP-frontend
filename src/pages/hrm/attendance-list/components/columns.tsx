import { type ColumnDef } from "@tanstack/react-table";
import { AttendanceRow } from "@/lib/validators/hrm/attendance-list";
import { getFormattedDateTime, getFormattedTime } from "@/utils/format-dates";

export const attendanceColumns: ColumnDef<AttendanceRow>[] = [
  {
    accessorKey: "employee.name",
    header: "Employee Name",
  },
  {
    accessorKey: "employee.location.name",
    header: "Location",
  },
  {
    // accessorKey: "employee.designation.name",
    header: "Shift",
    cell: ({ row }) => (
      <span>
        {getFormattedTime(row.original?.employee?.schedule?.start_time)} {" - "}
        {getFormattedTime(row.original?.employee?.schedule?.end_time)}
      </span>
    ),
  },
  {
    accessorKey: "employee.department.name",
    header: "Department",
  },
  {
    accessorKey: "employee.section.name",
    header: "Section",
  },

  {
    accessorKey: "employee.designation.name",
    header: "Designation",
  },
  {
    accessorKey: "check_in",
    header: "Check In",
    cell: ({ row }) =>
      row.original.check_in && getFormattedDateTime(row.original?.check_in),
  },
  {
    accessorKey: "check_out",
    header: "Check out",
    cell: ({ row }) =>
      row.original.check_out && getFormattedDateTime(row.original?.check_out),
  },
  {
    accessorKey: "note",
    header: "Note",
  },
];

import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { VacancyRequisitionColumn } from "@/lib/validators";
import { CellAction } from "./cell-action";

export const vacancyRequisitionColumns: ColumnDef<VacancyRequisitionColumn>[] = [
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
    header: "Schedule Name",
  },
  {
    accessorKey: "sorting_index",
    header: "Sorting Index",
  },
  {
    accessorKey: "vacancy_number",
    header: "Vacancy Number",
  },

  {
    accessorKey: "",
    accessorFn: ({ organization }) => organization?.name,
    header: "Organization",
  },
  {
    accessorKey: "",
    accessorFn: ({ department }) => department?.name,
    header: "Department",
  },
  {
    accessorKey: "",
    accessorFn: ({ designation }) => designation?.name,
    header: "Designation",
  },
  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

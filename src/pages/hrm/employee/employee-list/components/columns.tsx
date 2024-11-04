import { Checkbox } from "@/components/ui/checkbox";
import { EmployeeColumn } from "@/lib/validators";
import { type ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const employeeColumns: ColumnDef<EmployeeColumn>[] = [
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
    accessorKey: "image",
    header: " Image",
    cell: ({ row }) => {
      const image = row.getValue("image");
      if (image) {
        return (
          <img
            src={image as string}
            alt="image"
            className="h-8 w-8 rounded-full"
          />
        );
      }
      return null;
    },
  },

  {
    accessorKey: "first_name",
    header: "First name",
  },
  {
    accessorKey: "last_name",
    header: "Last name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    // accessorKey: "joining_date",
    // header: "Joining date",
    accessorFn: ({ department }) => department?.name,
    header: "Department",
  },
  {
    accessorFn: ({ designation }) => designation?.name,
    header: "Designation",
  },
  /*   {
    accessorKey: "location",
    accessorFn: ({ location }) => location?.name,
    header: "Location",
  }, */
  //   {
  //     accessorKey: "birth_date",
  //     header: "Birth date",
  //   },
  //   {
  //     accessorKey: "marital_status",
  //     header: "Marital status",
  //   },

  /*   {
    accessorKey: "",
    accessorFn: ({ department }) => department?.name,
    header: "Department",
  },


  {
    accessorKey: "",
    accessorFn: ({ organization }) => organization?.name,
    header: "Organization",
  },

  {
    accessorKey: "",
    accessorFn: ({ designation }) => designation?.name,
    header: "Designation",
  },
  {
    accessorKey: "vacancy_requisition",
    accessorFn: ({ vacancy_requisition }) => vacancy_requisition?.name,
    header: "Vacancy requisition",
  },
  {
    accessorKey: "vacancy_number",
    header: "Vacancy number",
  },
  {
    accessorKey: "employment_status",
    accessorFn: ({ employment_status }) => employment_status?.name,
    header: "Employment status",
  },
  {
    accessorKey: "work_place",
    accessorFn: ({ work_place }) => work_place?.name,
    header: "Work place",
  }, */

  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableSorting: false,
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

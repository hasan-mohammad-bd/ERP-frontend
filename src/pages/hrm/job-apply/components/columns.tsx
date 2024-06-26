import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { JobApplyColumn } from "@/lib/validators";
import { CellAction } from "./cell-action";

export const jobApplyColumns: ColumnDef<JobApplyColumn>[] = [
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
		accessorKey: "status",
		header: "Status",
	},

	{
		accessorKey: "expected_salary",
		header: "Expected salary",
	},
	{
		accessorKey: "",
		accessorFn: ({ job_post }) => job_post?.title,
		header: "Job post title",
	},
	{
		accessorKey: "",
		accessorFn: ({ job_candidate }) => job_candidate?.first_name,
		header: "Job candidate name",
	},

	/*   {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
  }, */
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
    accessorKey: "location",
    accessorFn: ({ location }) => location?.name,
    header: "Location",
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

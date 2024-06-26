import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { SkillColumn } from "@/lib/validators";
import { CellActionSkill } from "./cell-action-skill";

export const skillColumns: ColumnDef<SkillColumn>[] = [
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
		header: "Skill Name",
	},
	{
		accessorKey: "type",
		header: "Proficiency level",
	},
	{
		accessorKey: "description",
		header: "Description",
	},
	{
		accessorKey: "start_date",
		header: "Start date",
	},

	{
		id: "actions",
		header: () => <div className="text-center">Actions</div>,
		enableSorting: false,
		cell: ({ row }) => <CellActionSkill data={row.original} />,
	},
];

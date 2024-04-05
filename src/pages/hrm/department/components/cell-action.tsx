import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { Pencil, Trash2 } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { type DepartmentColumn } from "@/lib/validators";
import { useNavigate } from "react-router-dom";

interface CellActionProps {
	data: DepartmentColumn;
}

export function CellAction({ data }: CellActionProps) {
	const navigate = useNavigate();
	const [alertModalOpen, setAlertModalOpen] = useState(false);

	// const { mutate: deleteEmployee, isLoading: deleteEmployeeIsLoading } =
	//   api.employee.delete.useMutation({
	//     onError: (err) => {
	//       toast.error(err.message);
	//     },
	//     onSuccess: async (data) => {
	//       toast.success("Delete Employee success");
	//       await refetch();
	//     },
	//   });

	return (
		<div className="flex justify-center space-x-2">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="hover:bg-secondary"
							onClick={() => {
								navigate(`/example/employees/${data.id}`);
							}}
						>
							<Pencil className="h-4 w-4 text-foreground" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Update Department</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="hover:bg-secondary"
							onClick={() => {
								setAlertModalOpen(true);
							}}
						>
							<Trash2 className="h-4 w-4 text-foreground" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Delete Department</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<AlertModal
				title="Are you sure?"
				description="This action cannot be undone."
				name={data.name}
				isOpen={alertModalOpen}
				onClose={() => setAlertModalOpen(false)}
				onConfirm={() => alert("Confirm")}
				loading={false}
			/>
		</div>
	);
}

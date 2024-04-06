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
import { useRemoveDepartmentMutation } from "@/store/services/hrm/api/department";
import { toast } from "sonner";

interface CellActionProps {
	data: DepartmentColumn;
}

export function CellAction({ data }: CellActionProps) {
	const navigate = useNavigate();
	const [alertModalOpen, setAlertModalOpen] = useState(false);
	const [deleteDepartment] = useRemoveDepartmentMutation();

	const handleDepartmentDelete = async (id: number) => {
		try {
			await deleteDepartment(id);
			toast.success("Department deleted successfully");
			setAlertModalOpen(false);
		} catch (error) {
			console.log(error);
		}
	};

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
				onConfirm={() => handleDepartmentDelete(data.id)}
				loading={false}
			/>
		</div>
	);
}

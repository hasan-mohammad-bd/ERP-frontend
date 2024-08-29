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
import { toast } from "sonner";
import { Modal } from "@/components/common/modal";
import { RoleRow } from "@/lib/validators/web/user-role";
import { AddUserRoleForm } from "./add-user-role-form";
import { useRemoveRoleMutation } from "@/store/services/erp-main/api/user-role";

interface CellActionProps {
	rowData: RoleRow;
}

export function CellAction({ rowData }: CellActionProps) {
	const [alertModalOpen, setAlertModalOpen] = useState(false);
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [deleteRole, { isLoading: deleteLoading }] =
		useRemoveRoleMutation();

	const handleDepartmentDelete = async (id: number) => {
		try {
			await deleteRole(id);
			toast.success("Role deleted successfully");
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
							onClick={() => setUpdateModalOpen(true)}

							// onClick={() => toggleModal()}
						>
							<Pencil className="h-4 w-4 text-foreground" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Update Role</p>
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
						<p>Delete Role</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<AlertModal
				title="Are you sure?"
				description="This action cannot be undone."
				name={rowData.name}
				isOpen={alertModalOpen}
				onClose={() => setAlertModalOpen(false)}
				onConfirm={() => handleDepartmentDelete(rowData.id)}
				loading={deleteLoading}
			/>
			<Modal
				title="Update Role"
				isOpen={updateModalOpen}
				toggleModal={() => setUpdateModalOpen(false)}
			>
				<AddUserRoleForm
					rowData={rowData}
					modalClose={() => setUpdateModalOpen(false)}
				/>
			</Modal>
		</div>
	);
}

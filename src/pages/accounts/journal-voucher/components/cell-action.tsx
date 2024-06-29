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
import { SubAccountRow } from "@/lib/validators/accounts";
import { toast } from "sonner";
import { AddSubAccountForm } from "./add-sub-account-form";
import { Modal } from "@/components/common/modal";
import { useRemoveSubAccountMutation } from "@/store/services/accounts/api/sub-accounts";

interface CellActionProps {
	rowData: SubAccountRow;
}

export function CellAction({ rowData }: CellActionProps) {
	const [alertModalOpen, setAlertModalOpen] = useState(false);
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [deleteSubAccount, { isLoading: deleteLoading }] =
		useRemoveSubAccountMutation();

	const handleDepartmentDelete = async (id: number) => {
		try {
			await deleteSubAccount(id);
			toast.success("Sub account deleted successfully");
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
						<p>Update Sub Account</p>
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
						<p>Delete Sub Account</p>
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
				title="Update Sub Account"
				isOpen={updateModalOpen}
				toggleModal={() => setUpdateModalOpen(false)}
			>
				<AddSubAccountForm
					rowData={rowData}
					modalClose={() => setUpdateModalOpen(false)}
				/>
			</Modal>
		</div>
	);
}

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
import { FinancialYearRow } from "@/lib/validators/accounts";
import { toast } from "sonner";
import { AddFinancialYearForm } from "./add-ficancial-year-form";
import { Modal } from "@/components/common/modal";
import { useRemoveFinancialYearMutation } from "@/store/services/accounts/api/financial-year";

interface CellActionProps {
	rowData: FinancialYearRow;
}

export function CellAction({ rowData }: CellActionProps) {
	const [alertModalOpen, setAlertModalOpen] = useState(false);
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [deleteFinancialYear, { isLoading: deleteLoading }] =
		useRemoveFinancialYearMutation();

	const handleDepartmentDelete = async (id: number) => {
		try {
			await deleteFinancialYear(id);
			toast.success("Financial year deleted successfully");
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
						<p>Update Financial Year</p>
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
						<p>Delete Financial Year</p>
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
				title="Update Financial Year"
				isOpen={updateModalOpen}
				toggleModal={() => setUpdateModalOpen(false)}
			>
				<AddFinancialYearForm
					rowData={rowData}
					modalClose={() => setUpdateModalOpen(false)}
				/>
			</Modal>
		</div>
	);
}

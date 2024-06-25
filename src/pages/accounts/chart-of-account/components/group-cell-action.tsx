import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { FilePlus2, FolderPlus } from "lucide-react";
import { AddLedgerGroupForm } from "./add-ledger-group-form";
import { Modal } from "@/components/common/modal";
import { AddLedgerForm } from "./add-ledger-form";
import { LedgerGroupRow } from "@/lib/validators/accounts";

interface CellActionProps {
	rowData: LedgerGroupRow;
	coaType: string;
}

export function GroupCellAction({ rowData, coaType }: CellActionProps) {
	const [ledgerGroupModalOpen, setLedgerGroupModalOpen] = useState(false);
	const [ledgerModalOpen, setLedgerModalOpen] = useState(false);

	return (
		<div className="flex justify-end items-center space-x-2">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="hover:bg-secondary"
							onClick={() => setLedgerGroupModalOpen(true)}
						>
							<FolderPlus className="text-foreground" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Add child Group</p>
					</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="hover:bg-secondary"
							onClick={() => setLedgerModalOpen(true)}
						>
							<FilePlus2 className="text-foreground" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Add Account </p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			{ledgerGroupModalOpen && (
				<Modal
					title="Add Group"
					isOpen={ledgerGroupModalOpen}
					toggleModal={() => setLedgerGroupModalOpen(false)}
				>
					<AddLedgerGroupForm
						rowData={rowData}
						modalClose={() => setLedgerGroupModalOpen(false)}
					/>
				</Modal>
			)}
			{ledgerModalOpen && (
				<Modal
					title="Add Account"
					isOpen={ledgerModalOpen}
					toggleModal={() => setLedgerModalOpen(false)}
				>
					<AddLedgerForm
						rowData={rowData}
						coaType={coaType}
						modalClose={() => setLedgerModalOpen(false)}
					/>
				</Modal>
			)}
		</div>
	);
}

import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { FilePenLine, ScanEye } from "lucide-react";
import { LedgerRow } from "@/lib/validators/accounts";

interface CellActionProps {
	rowData: LedgerRow;
}

export function LedgerCellAction({ rowData }: CellActionProps) {
	console.log(rowData);
	return (
		<div className="flex justify-end items-center space-x-2">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="hover:bg-secondary"
							onClick={() => alert("Not Implemented")}
						>
							<ScanEye className="text-foreground" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>View Account</p>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="hover:bg-secondary"
							onClick={() => alert("Not Implemented")}
						>
							<FilePenLine className="text-foreground" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Edit Account</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}

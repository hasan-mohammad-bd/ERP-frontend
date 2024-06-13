import { TableCell, TableRow } from "@/components/ui/table";
import { LedgerGroupColumn } from "@/lib/validators";
import {
	File,
	FilePenLine,
	FilePlus2,
	Folder,
	FolderPlus,
	ScanEye,
} from "lucide-react";

interface ChartOfAccountItemProps {
	group: LedgerGroupColumn;
}

const ChartOfAccountChild = ({ group }: ChartOfAccountItemProps) => {
	return group.childs_group.map((item) => (
		<>
			<TableRow key={item.id}>
				<TableCell>{item.code}</TableCell>
				<TableCell className="inline-flex items-center gap-2">
					&nbsp;&nbsp;&nbsp;&nbsp;
					<Folder />
					{item.name}
				</TableCell>
				<TableCell className="text-right">
					<div className="inline-flex items-center justify-end gap-2">
						<FolderPlus className="cursor-pointer" />
						<FilePlus2 className="cursor-pointer" />
					</div>
				</TableCell>
			</TableRow>
			{item.childs_group.length > 0 && <ChartOfAccountChild group={item} />}
			{item.ledgers.map((ledger) => (
				<TableRow key={ledger.id}>
					<TableCell>{ledger.code}</TableCell>
					<TableCell className="inline-flex items-center gap-2">
						&nbsp;&nbsp;&nbsp;&nbsp;
						<File />
						{ledger.name}
					</TableCell>
					<TableCell className="text-right">
						<div className="inline-flex items-center justify-end gap-2">
							<ScanEye className="cursor-pointer" />
							<FilePenLine className="cursor-pointer" />
						</div>
					</TableCell>
				</TableRow>
			))}
		</>
	));
};

export default ChartOfAccountChild;

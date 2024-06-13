import { TableCell, TableRow } from "@/components/ui/table";
import { LedgerGroupColumn } from "@/lib/validators";
import { File, Folder } from "lucide-react";
import { GroupCellAction } from "./group-cell-action";
import { LedgerCellAction } from "./ledger-cell-action";

interface ChartOfAccountItemProps {
	group: LedgerGroupColumn;
	coaType: string;
}

const ChartOfAccountChild = ({ group, coaType }: ChartOfAccountItemProps) => {
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
					<GroupCellAction rowData={item} coaType={coaType} />
				</TableCell>
			</TableRow>
			{item.childs_group.length > 0 && (
				<ChartOfAccountChild group={item} coaType={coaType} />
			)}
			{item.ledgers.map((ledger) => (
				<TableRow key={ledger.id}>
					<TableCell>{ledger.code}</TableCell>
					<TableCell className="inline-flex items-center gap-2">
						&nbsp;&nbsp;&nbsp;&nbsp;
						<File />
						{ledger.name}
					</TableCell>
					<TableCell className="text-right">
						<LedgerCellAction rowData={ledger} />
					</TableCell>
				</TableRow>
			))}
		</>
	));
};

export default ChartOfAccountChild;

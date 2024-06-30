import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { LedgerGroupRow } from "@/lib/validators/accounts";
// import { File, Folder } from "lucide-react";
import { Link } from "react-router-dom";
// import { GroupCellAction } from "./group-cell-action";
// import { LedgerCellAction } from "./ledger-cell-action";

interface ChartOfAccountItemProps {
	group: LedgerGroupRow;
	coaType: string;
}

const ChartOfAccountChild = ({ group, coaType }: ChartOfAccountItemProps) => {
	return group.childs_group.map((item) => (
		<>
			<TableRow key={item.id}>
				<TableCell className="py-2.5 col-span-2 w-2/3 font-medium">
					&nbsp;&nbsp;&nbsp;&nbsp;
					{item.name}
				</TableCell>
				<TableCell className="py-2.5">{item.code}</TableCell>
				<TableCell className="py-2.5">Group</TableCell>
				<TableCell className="py-2.5">
					{/* <Badge variant="outline">Active</Badge> */}
				</TableCell>
				<TableCell className="py-2.5"></TableCell>
				<TableCell className="py-2.5"></TableCell>
			</TableRow>
			{item.childs_group.length > 0 && (
				<ChartOfAccountChild group={item} coaType={coaType} />
			)}
			{item.ledgers.map((ledger) => (
				<TableRow key={ledger.id}>
					<TableCell className="py-0 col-span-2 w-2/3">
						<Link
							className={buttonVariants({
								variant: "link",
								size: "sm",
								className: "text-blue-400 hover:no-underline",
							})}
							to={`/accounts/${coaType}/${ledger.id}`}
						>
							&nbsp;&nbsp;&nbsp;&nbsp;
							{ledger.name}
						</Link>
					</TableCell>
					<TableCell className="py-2.5">{ledger.code}</TableCell>
					<TableCell className="py-2.5">Account</TableCell>
					<TableCell className="py-2.5">
						<Badge variant="outline">active</Badge>
					</TableCell>
					<TableCell className="py-2.5">700</TableCell>
					<TableCell className="py-2.5">500</TableCell>
				</TableRow>
			))}
		</>
	));
};

export default ChartOfAccountChild;

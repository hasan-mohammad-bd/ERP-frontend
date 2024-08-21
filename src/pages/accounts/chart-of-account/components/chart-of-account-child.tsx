// import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { LedgerGroupRow } from "@/lib/validators/accounts";
import React from "react";
import { Link } from "react-router-dom";

interface ChartOfAccountItemProps {
  group: LedgerGroupRow;
  coaType: string;
  depth?: number;
}

const ChartOfAccountChild = ({
  group,
  coaType,
  depth = 0,
}: ChartOfAccountItemProps) => {
  const indent = Array(depth)
    .fill("\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0")
    .join(""); // Non-breaking spaces

	return group.childs_group.map((item) => (
		<React.Fragment key={item.id}>
			<TableRow>
				<TableCell className="py-2.5 col-span-2 w-2/3 font-medium">
					{indent}{item.name}
				</TableCell>
				<TableCell className="py-2.5">{item.code}</TableCell>
				<TableCell className="py-2.5">Group</TableCell>
{/* 				<TableCell className="py-2.5">
					<Badge variant="outline">Active</Badge>
				</TableCell>
				<TableCell className="py-2.5"></TableCell>
				<TableCell className="py-2.5"></TableCell> */}
			</TableRow>
			{item.childs_group && item.childs_group.length > 0 && (
				<ChartOfAccountChild group={item} coaType={coaType} depth={depth + 1} />
			)}
			{item.ledgers && item.ledgers.length > 0 && item.ledgers.map((ledger) => (
				<TableRow key={ledger.id}>
					<TableCell className="py-0 col-span-2 w-2/3">
						<Link
							className={buttonVariants({
								variant: "link",
								size: "sm",
								className: "text-blue-400 hover:no-underline",
							})}
							// to={`/accounts/${coaType}/${ledger.id}`}
							to={`/accounts/reports/detailed-general-ledger/${ledger.id}`}
						>
							{indent}{ledger.name}
						</Link>
					</TableCell>
					<TableCell className="py-2.5">{ledger.code}</TableCell>
					<TableCell className="py-2.5">Account</TableCell>
{/* 					<TableCell className="py-2.5">
						<Badge variant="outline">active</Badge>
					</TableCell>
					<TableCell className="py-2.5">700</TableCell>
					<TableCell className="py-2.5">500</TableCell> */}
				</TableRow>
			))}
		</React.Fragment>
	));
};

export default ChartOfAccountChild;

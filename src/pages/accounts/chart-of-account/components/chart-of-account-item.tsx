import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LedgerGroupColumn } from "@/lib/validators";
import ChartOfAccountChild from "./chart-of-account-child";
import { File, Folder } from "lucide-react";
import { LedgerCellAction } from "./ledger-cell-action";
import { GroupCellAction } from "./group-cell-action";

interface ChartOfAccountItemProps {
	data: LedgerGroupColumn[];
	title: string;
	description: string;
	coaType: string;
}

const ChartOfAccountItem = ({
	data,
	title,
	description,
	coaType,
}: ChartOfAccountItemProps) => {
	const coaItemData = data.find((item) => item.name === coaType);

	if (!coaItemData) return null;

	return (
		<div>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
				<CardDescription>
					<Table className="mt-6">
						{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Code</TableHead>
								<TableHead>Name</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>{coaItemData.code}</TableCell>
								<TableCell className="inline-flex items-center gap-2">
									<Folder />
									{coaItemData.name}
								</TableCell>
								<TableCell className="text-right">
									<GroupCellAction rowData={coaItemData} coaType={coaType} />
								</TableCell>
							</TableRow>
							<ChartOfAccountChild group={coaItemData} coaType={coaType} />
							{coaItemData.ledgers.map((ledger) => (
								<TableRow key={ledger.id}>
									<TableCell>{ledger.code}</TableCell>
									<TableCell className="inline-flex items-center gap-2">
										<File />
										{ledger.name}
									</TableCell>
									<TableCell className="text-right">
										<LedgerCellAction rowData={ledger} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardDescription>
			</CardHeader>
		</div>
	);
};

export default ChartOfAccountItem;

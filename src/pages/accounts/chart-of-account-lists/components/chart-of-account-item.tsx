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
import {
	File,
	FilePenLine,
	FilePlus2,
	Folder,
	FolderPlus,
	ScanEye,
} from "lucide-react";

interface ChartOfAccountItemProps {
	data: LedgerGroupColumn[];
	title: string;
	description: string;
	coaKey: string;
}

const ChartOfAccountItem = ({
	data,
	title,
	description,
	coaKey,
}: ChartOfAccountItemProps) => {
	const coaItemData = data.find((item) => item.name === coaKey);

	// console.log(coaItemData);

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
									<div className="inline-flex items-center justify-end gap-2">
										<FolderPlus className="cursor-pointer" />
										<FilePlus2 className="cursor-pointer" />
									</div>
								</TableCell>
							</TableRow>
							<ChartOfAccountChild group={coaItemData} />
							{coaItemData.ledgers.map((ledger) => (
								<TableRow key={ledger.id}>
									<TableCell>{ledger.code}</TableCell>
									<TableCell className="inline-flex items-center gap-2">
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
						</TableBody>
					</Table>
				</CardDescription>
			</CardHeader>
		</div>
	);
};

export default ChartOfAccountItem;

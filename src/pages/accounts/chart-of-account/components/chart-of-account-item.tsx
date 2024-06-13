import {
	Table,
	TableBody,
	// TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LedgerGroupColumn } from "@/lib/validators";
import { CellAction } from "./cell-action";

interface ChartOfAccountItemProps {
	data: LedgerGroupColumn[];
	title: string;
	description: string;
}

const ChartOfAccountItem = ({
	data,
	title,
	description,
}: ChartOfAccountItemProps) => {
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
								<TableHead>Description</TableHead>
								<TableHead className="text-right">Is Active</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{data.map((item) => (
								<TableRow key={item.id}>
									<TableCell>{item.code}</TableCell>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.description}</TableCell>
									<TableCell className="text-right">
										${item.is_active}
									</TableCell>
									<TableCell><CellAction data={item}/></TableCell>
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

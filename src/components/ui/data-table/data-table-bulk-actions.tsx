"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { type Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

export type BulkActionItem = {
	label: string;
	value: string;
};

export type BulkAction<TData> = {
	action: string;
	payload: TData[];
};

interface DataTableBulkActionsProps<TData> {
	table: Table<TData>;
	actions: BulkActionItem[];
	selectedBulkAction: BulkAction<TData>;
	setSelectedBulkAction: (value: BulkAction<TData>) => void;
}

export const DataTableBulkActions = <TData,>({
	table,
	actions,
	selectedBulkAction,
	setSelectedBulkAction,
}: DataTableBulkActionsProps<TData>) => {
	const getSelectedRowData = (bulkActionType: string) => {
		const selectedRows = table
			.getSelectedRowModel()
			.flatRows.map((row) => row.original);

		setSelectedBulkAction({
			action: bulkActionType,
			payload: selectedRows,
		});
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="ml-auto hidden h-8 lg:flex"
				>
					<MixerHorizontalIcon className="mr-2 h-4 w-4" />
					Select Action
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[150px]">
				{actions.map((bulkAction) => (
					<DropdownMenuCheckboxItem
						key={bulkAction.value}
						className="capitalize"
						checked={bulkAction.value === selectedBulkAction.action}
						onCheckedChange={() => getSelectedRowData(bulkAction.value)}
					>
						{bulkAction.label}
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

DataTableBulkActions.metadata = {
	name: "Muhammad Touhiduzzaman",
	github: "TouhidZaman",
	description: "A reusable component for managing bulk actions in a data table",
	filename: "DataTableBulkActions",
};

export default DataTableBulkActions;

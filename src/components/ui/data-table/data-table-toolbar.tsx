"use client";

import { type Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/ui/data-table/data-table-view-options";
import DataTableBulkActions, {
	type BulkAction,
	type BulkActionItem,
} from "./data-table-bulk-actions";

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
	bulkActions?: BulkActionItem[];
	selectedBulkAction?: BulkAction<TData>;
	setSelectedBulkAction?: (value: BulkAction<TData>) => void;
}

export function DataTableToolbar<TData>({
	table,
	bulkActions,
	selectedBulkAction = { action: "", payload: [] },
	setSelectedBulkAction = () => {},
}: DataTableToolbarProps<TData>) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2">
				<Input
					placeholder="Filter..."
					value={(table.getState().globalFilter as string) ?? ""}
					onChange={(event) => table.setGlobalFilter(event.target.value)}
					className="h-8 w-[150px] lg:w-[250px]"
				/>
				{bulkActions && (
					<DataTableBulkActions
						table={table}
						actions={bulkActions}
						selectedBulkAction={selectedBulkAction}
						setSelectedBulkAction={setSelectedBulkAction}
					/>
				)}
			</div>
			<DataTableViewOptions table={table} />
		</div>
	);
}

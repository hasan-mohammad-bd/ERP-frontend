"use client";

import { type Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/ui/data-table/data-table-view-options";
import DataTableBulkActions, {
  type BulkAction,
  type BulkActionItem,
} from "./data-table-bulk-actions";
import { Button } from "../button";
import { File, Sheet } from "lucide-react";


interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  bulkActions?: BulkActionItem[];
  selectedBulkAction?: BulkAction<TData>;
  setSelectedBulkAction?: (value: BulkAction<TData>) => void;
  setStartDate?: (value: Date | null) => void;
  setEndDate?: (value: Date | null) => void;
  datePicker?: boolean;
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
      <div className="flex space-x-2 items-center">
        <Button variant="outline" size="sm" className="h-8 lg:flex">
          CSV <Sheet className="ml-1" size={16} strokeWidth={1.2} />
        </Button>
        <Button variant="outline" size="sm" className="h-8 lg:flex">
          PDF <File className="ml-1" size={16} strokeWidth={1.2} />
        </Button>
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}

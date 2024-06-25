"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  PaginationState,
  OnChangeFn,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "@/components/ui/data-table/data-table-pagination";
import { DataTableToolbar } from "@/components/ui/data-table/data-table-toolbar";
import { BulkAction, BulkActionItem } from "./data-table-bulk-actions";
import { PaginationInfo } from "@/types";
import { Card } from "../card";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  paginationInfo?: PaginationInfo;
  pagination?: PaginationState;
  setPagination?: OnChangeFn<PaginationState>;
  noPagination?: boolean;
  bulkActions?: BulkActionItem[];
  selectedBulkAction?: BulkAction<TData>;
  setSelectedBulkAction?: (value: BulkAction<TData>) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  paginationInfo,
  pagination: externalPagination,
  setPagination: externalSetPagination,
  noPagination,
  bulkActions,
  selectedBulkAction,
  setSelectedBulkAction,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // To Handle server side pagination
  const [internalPagination, setInternalPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: noPagination ? data.length : 10,
    });

  const pagination = externalPagination ?? internalPagination;
  const setPagination = externalSetPagination ?? setInternalPagination;

  const table = useReactTable({
    data,
    columns,
    // pageCount: 2 ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: paginationInfo?.total || data.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination, // to handle server side pagination
    },
    enableRowSelection: true,
    manualPagination: paginationInfo || noPagination ? true : false, // to handle server side pagination
    // autoResetPageIndex: false, //turn off auto reset of pageIndex
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
    // getPaginationRowModel: getPaginationRowModel(),
    ...(paginationInfo || noPagination
      ? {}
      : { getPaginationRowModel: getPaginationRowModel() }),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  // console.log(getPaginationRowModel());

  return (
    <Card className="px-4 py-6 space-y-4">
      <DataTableToolbar
        table={table}
        bulkActions={bulkActions}
        selectedBulkAction={selectedBulkAction}
        setSelectedBulkAction={setSelectedBulkAction}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                            // eslint-disable-next-line no-mixed-spaces-and-tabs
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="py-0.5" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {!noPagination && <DataTablePagination table={table} />}
    </Card>
  );
}
